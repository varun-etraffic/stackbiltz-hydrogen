import {gql, Link, useShopQuery} from '@shopify/hydrogen';
import { Suspense } from 'react';
import {
  Heading,
  Section,
  Grid,
  ProductCard,
  Text,
  FeaturedCollectionSlider
} from '~/components';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {getImageLoadingPriority} from '~/lib/const';

const QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionPage(
    $handle: String!
    $productCount: Int!
  ) {
    collection(handle: $handle) {
      id,
      title,
      products(first: $productCount) {
        nodes {
          ...ProductCard
        }
      }
    }
  }
`;

export function FeaturedCollection({title, handle, productCount, sectionDescription, linkText, layout}) {
  const {
    data: {collection},
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle: handle,
      productCount: Number(productCount)
    },
  });

  const products = collection.products.nodes;
  return (
    <Suspense fallback="<h1>Not Working</h1>">
      <Section
        display={layout === 'slider' ? 'flex' : 'grid'}
        className={layout === 'slider' ? 'flex-wrap' : ''}
      >
        <div className='text-center w-full mb-20'>
          <Heading className="text-5xl" format as="h2" size="heading" width="full">
            {typeof title !== 'undefined' ? title : collection.title}
          </Heading>
          {typeof sectionDescription !== 'undefined' ?
            <Text className="my-4 max-w-3xl m-auto text-[#999999]" size="lead" width="full" as="p">
              {sectionDescription}
            </Text>
            : ''
          }
        </div>

        { layout === 'grid' ?
          <Grid layout="products">
            {products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                loading={getImageLoadingPriority(i)}
              />
            ))}
          </Grid>
        :
          <FeaturedCollectionSlider className={`w-full`} products={products}/>
        }
        <Link to={`/collections/${handle}`} className="text-center underline italic w-full mt-20 text-2xl text-[#666461]">{linkText}</Link>
      </Section>
    </Suspense>
  );
}
