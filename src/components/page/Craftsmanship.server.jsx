import {Suspense} from 'react';
import {Layout, FeaturedCollection} from '~/components/index.server';
import {Seo} from '@shopify/hydrogen';
import {
  MultiTextWithImage,
  ImageWithAccordion,
  ImageBanner,
  VideoSection
} from '~/components';
import { CustomImageWithText } from './components/CustomImageWithText';
 
 
export function Craftsmanship({response, type = 'page'}) {
  const heading = `Craftsmanship ${type}`;
  const description = `On this page the Craftsmanship Sections will be rendered`;

  return (
    <Layout>
      <Suspense>
        <SeoForCraftmanshipPage />
      </Suspense>

      <ImageBanner position="bottom-left" />

      <CustomImageWithText ImageWithTextData={ImageWithTextData} headingTitle={false} bg_color="#FCF9F5" reverse={true}/>

      <VideoSection
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        thumbnail="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/stone-ring_copy.png"
      />

      <MultiTextWithImage />

      <ImageWithAccordion />

      <FeaturedCollection
        title="Shop Engagement Rings"
        sectionDescription="A nod to tradition, From our revolutionary Signature Levour Solitaire to our modern takes on traditional classics, each ring embodies true ingenuity and refined design."
        handle="collection-1"
        productCount="10"
        linkText="Shop all Engagement Rings"
        layout="slider"
      />
    </Layout>
  );
}

function SeoForCraftmanshipPage() {
  const title = `Craftsmanship`;
  const description = `This is Craftsmanship Page`;

  return (
    <Seo
      type="page"
      data={{
        title,
        description,
        titleTemplate: 'Craftsmanship - %s',
      }}
    />
  );
}


const ImageWithTextData = [
  {
    id: 1,
    position: 'flex-row-reverse',
    image: 'https://cdn.shopify.com/s/files/1/0588/2789/9031/files/image.png?v=1660995877',
    title: 'Three Generations of Excellence',
    content: 'Down to every detail– Each facet of our jewelry embarks on an intimate vetting. This ensures quality, sustainability, a curated selection of ethically sourced diamonds, groundbreaking designs, and precision engineering. We embolden perfection.'
  },
  {
    id: 2,
    position: 'flex-row',
    image: 'https://cdn.shopify.com/s/files/1/0588/2789/9031/files/image-2.png?v=1660036688',
    title: 'Emboldening Perfection in Each Levour Piece',
    content: 'You’ll even meet your design team, by name – for exclusive authenticity and transparency, unique to Levour. Nothing happens without your involvement and approval. Immerse yourself in a true luxury experience from the moment your order is placed. You will receive insight into the maker’s process, daily updates, virtual exploration, and clarity around every material, tool, and detail.' 
  }
]