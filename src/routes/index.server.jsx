import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {ImageWithText, RichText, ImageWithAccordion, RingImageWithText, SplitSlider} from '~/components';
import {Layout, FeaturedCollection} from '~/components/index.server';
// import DemoSlick from '../components/sections/DemoSlick.client';


export default function Homepage() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });

  return (
    <>
      {/* <DemoSlick/> */}
      <ImageWithText
        imgUrl="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/widelevourbg.png?v=1630615399"
        text="RE-ENGINEERING TRADITION"
        />
       
      <RichText
        subheading="WE'VE LEARNED THE RULES / NOW IT'S TIME TO BREAK THEM"
        content='Levour is built on three generations of American manufacturing and luxury jeweleryp production. Raising the standard for superior craftsmanship, Levour reignites tradition with modern refinement, cutting edge designs and flawless quality. Each piece of jewelry is created in our Downtown LA Factory'
        url='/pages/our-story'
        urlText='Read Our Story'
      />
       <RingImageWithText/>
      <FeaturedCollection
        title="Shop Engagement Rings"
        sectionDescription="A nod to tradition, From our revolutionary Signature Levour Solitaire to our modern takes on traditional classics, each ring embodies true ingenuity and refined design."
        handle="all-products"
        productCount="12"
        linkText="Shop all Engagement Rings"
        layout="slider" // values can be 'slider' or 'grid'
      />
      <ImageWithAccordion/>
      <SplitSlider/>
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
        titleTemplate: '%s',
      }}
    />
  );
}

const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredCollections: collections(
      first: 3
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      title: name
      description
    }
  }
`;
