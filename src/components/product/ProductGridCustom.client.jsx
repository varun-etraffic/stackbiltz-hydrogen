import {useState, useEffect, useCallback} from 'react';
import {Link, flattenConnection} from '@shopify/hydrogen';
import {
  Section,
  ProductCard,
  ProductGridBanner,
  Button
} from '~/components';
import { getImageLoadingPriority } from '~/lib/const';

export function ProductGridCustom({url, collection}) {
  const initialProducts = collection?.products?.nodes || [];
  const {hasNextPage, hasPreviousPage, startCursor, endCursor} = collection?.products?.pageInfo ?? {};
  const [products, setProducts] = useState(initialProducts);
  const [pageEndCursor, setPageEndCursor] = useState(endCursor ?? '');
  const [pageStartCursor, setPageStartCursor] = useState(startCursor ?? '');
  const [nextPage, setNextPage] = useState(hasNextPage);
  const [prevPage, setPrevPage] = useState(hasPreviousPage);
  const [pending, setPending] = useState(false);
  const haveProducts = initialProducts.length > 0;

  console.log(startCursor);
  console.log(endCursor);

  const fetchProducts = useCallback(async () => {
    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set('cursor', pageEndCursor);
    postUrl.searchParams.set('page', 'next');

    const response = await fetch(postUrl, {
      method: 'POST',
    });
    const {data} = await response.json();

    // ProductGrid can paginate collection, products and search routes
    // @ts-ignore TODO: Fix types
    const newProducts = flattenConnection(
      data?.collection?.products || data?.products || [],
    );
    const {startCursor, endCursor, hasNextPage, hasPreviousPage} = data?.collection?.products?.pageInfo ||
      data?.products?.pageInfo || {startCursor: '', hasPreviousPage: false, endCursor: '', hasNextPage: false};

    setProducts([...newProducts]);
    setPageStartCursor(startCursor);
    setPageEndCursor(endCursor);
    setNextPage(hasNextPage);
    setPrevPage(hasPreviousPage);
    setPending(false);
  }, [pageEndCursor, url, products]);

  const fetchPrevProducts = useCallback(async () => {
    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set('cursor', pageStartCursor);
    postUrl.searchParams.set('page', 'prev');

    const response = await fetch(postUrl, {
      method: 'POST',
    });
    const {data} = await response.json();

    // ProductGrid can paginate collection, products and search routes
    // @ts-ignore TODO: Fix types
    const newProducts = flattenConnection(
      data?.collection?.products || data?.products || [],
    );
    const {startCursor, endCursor, hasNextPage, hasPreviousPage} = data?.collection?.products?.pageInfo ||
      data?.products?.pageInfo || {startCursor: '', hasPreviousPage: false, endCursor: '', hasNextPage: false};

    setProducts([...newProducts]);
    setPageStartCursor(startCursor);
    setPageEndCursor(endCursor);
    setNextPage(hasNextPage);
    setPrevPage(hasPreviousPage);
    setPending(false);
  }, [pageStartCursor, url, products]);

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    );
  }

  return(
    <Section padding="x">
      <div className={`w-full grid lg:grid-cols-4 md:grid-cols-4`}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            loading={getImageLoadingPriority(i)}
            collectionPage={true}
            className={`p`}
          />
        ))}

        { (products.length >= 5) && <ProductGridBanner id="banner-1"/> }
        { (products.length >= 13) && <ProductGridBanner id="banner-2"/> }
      </div>

      <div className={`w-full`}>
        { prevPage && <Button variant="secondary" disabled={pending} onClick={fetchPrevProducts}>Prev</Button> }
        { nextPage && <Button variant="secondary" disabled={pending} onClick={fetchProducts}>Next</Button> }
      </div>
    </Section>
  );
}