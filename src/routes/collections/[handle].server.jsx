import { Suspense } from 'react';
import {
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
  useUrl,
} from '@shopify/hydrogen';

import { PRODUCT_CARD_FRAGMENT } from '~/lib/fragments';
import {
  PageHeader,
  Text,
  ImageWithAccordion,
  ProductGridCustom
} from '~/components';
import { NotFound, Layout, FeaturedCollection } from '~/components/index.server';

const pageBy = 20;

export default function Collection({params}) {
  const {handle} = params;
  const {
    language: {isoCode: language},
    country: {isoCode: country},
  } = useLocalization();

  const url = useUrl();
  const page = url.searchParams.get('page');
  const cursor = url.searchParams.get('cursor');
  let queryObj = {};

  if(page == 'next') {
    queryObj = COLLECTION_QUERY;
  } else if(page == 'prev') {
    queryObj = PAGINATE_COLLECTION_QUERY;
  } else {
    queryObj = COLLECTION_QUERY;
  }

  const {
    data: {collection},
  } = useShopQuery({
    query: queryObj,
    variables: {
      handle,
      language,
      country,
      pageBy,
      cursor,
    },
    preload: true,
  });

  if (!collection) {
    return <NotFound type="collection" />;
  }

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    },
  });

  const products = collection.products.nodes;
  const hasNextPage = collection.products.pageInfo.hasNextPage;
  const hasPreviousPage = collection.products.pageInfo.hasPreviousPage;
  const startCursor = collection.products.pageInfo.startCursor;
  const endCursor = collection.products.pageInfo.endCursor;

  return (
    <Layout>
      <Suspense>
        <Seo type="collection" data={collection} />
      </Suspense>

      <PageHeader heading={collection.title}>
        {collection?.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <Text format width="narrow" as="p" className="inline-block">
                {collection.description}
              </Text>
            </div>
          </div>
        )}
      </PageHeader>

      <ProductGridCustom
        key={collection.id}
        collection={collection}
        url={`/collections/${handle}`}
      />

      <ImageWithAccordion/>

      <FeaturedCollection
        title="Shop Engagement Rings"
        sectionDescription="A nod to tradition, From our revolutionary Signature Levour Solitaire to our modern takes on traditional classics, each ring embodies true ingenuity and refined design."
        handle="all-products"
        productCount="12"
        linkText="Shop all Engagement Rings"
        layout="slider"
      />
    </Layout>
  );
}

// API endpoint that returns paginated products for this collection
// @see templates/demo-store/src/components/product/ProductGrid.client.tsx
export async function api(request, {params, queryShop}) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
      headers: {Allow: 'POST'},
    });
  }
  const url = new URL(request.url);

  const cursor = url.searchParams.get('cursor');
  const page = url.searchParams.get('page');
  const country = url.searchParams.get('country');
  const {handle} = params;

  if(page == 'next') {
    return await queryShop({
      query: COLLECTION_NEXT_QUERY,
      variables: {
        handle,
        cursor,
        pageBy,
        country,
      },
    });
  }

  if(page == 'prev') {
    return await queryShop({
      query: COLLECTION_PREV_QUERY,
      variables: {
        handle,
        cursor,
        pageBy,
        country,
      },
    });
  }
}

const COLLECTION_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: $pageBy, after: $cursor) {
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

const COLLECTION_NEXT_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionPage(
    $handle: String!
    $pageBy: Int!
    $cursor: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      handle
      products(first: $pageBy, after: $cursor) {
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

const COLLECTION_PREV_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionPage(
    $handle: String!
    $pageBy: Int!
    $cursor: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      handle
      products(last: $pageBy, before: $cursor) {
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;