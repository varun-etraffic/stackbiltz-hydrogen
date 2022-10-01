import {Suspense} from 'react';
import {
  SplitImageBanner,
  ImageWithAccordion,
  VideoSection
} from '~/components';
import {Layout} from '~/components/index.server';
import {Seo} from '@shopify/hydrogen';
import { CustomImageWithText } from './components/CustomImageWithText';
import { ImageSection } from './components/ImageSection';
import { TextSection } from './components/TextSection';
import { FeaturedCollection } from '../index.server';

export function OurStory({response, type = 'page'}) {
  const heading = `Our Story ${type}`;
  const description = `On this page the Our Story Sections will be rendered`;

  return (
    <Layout>
      <Suspense>
        <SeoForOurStoryPage />
      </Suspense>

      <SplitImageBanner position="bottom-left"/>
      <TextSection/>

      <CustomImageWithText ImageWithTextData={ImageWithTextData} />

      <VideoSection
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        thumbnail="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/stone-ring_copy.png"
      />

      <ImageWithAccordion/>

      <FeaturedCollection
        title="Shop Engagement Rings"
        sectionDescription="A nod to tradition, From our revolutionary Signature Levour Solitaire to our modern takes on traditional classics, each ring embodies true ingenuity and refined design."
        handle="collection-1"
        productCount="10"
        linkText="Shop all Engagement Rings"
        layout="slider"
      />

      <ImageSection/>

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

function SeoForOurStoryPage() {
  const title = `Our Story`;
  const description = `This is Our Story Page`;

  return (
    <Seo
      type="page"
      data={{
        title,
        description,
        titleTemplate: 'Our Story - %s',
      }}
    />
  );
}

const ImageWithTextData = [
  {
    id: 1,
    count: 1,
    position: 'flex-row',
    image: 'https://cdn.shopify.com/s/files/1/0588/2789/9031/files/image-1.png?v=1660036688',
    title: 'We Obsess Over Excellence',
    content: 'Down to every detail– Each facet of our jewelry embarks on an intimate vetting. This ensures quality, sustainability, a curated selection of ethically sourced diamonds, groundbreaking designs, and precision engineering. We embolden perfection.'
  },
  {
    id: 2,
    count: 2,
    position: 'flex-row-reverse',
    image: 'https://cdn.shopify.com/s/files/1/0588/2789/9031/files/image-2.png?v=1660036688',
    title: 'Personalized Design, Curated for You.',
    content: 'You’ll even meet your design team, by name – for exclusive authenticity and transparency, unique to Levour. Nothing happens without your involvement and approval. Immerse yourself in a true luxury experience from the moment your order is placed. You will receive insight into the maker’s process, daily updates, virtual exploration, and clarity around every material, tool, and detail.' 
  },
  {
    id: 3,
    count: 3,
    position: 'flex-row',
    image: 'https://cdn.shopify.com/s/files/1/0588/2789/9031/files/image-3.png?v=1660036690',
    title: 'Our Forever Guarentee',
    content: 'Experience a return to luxury service, upgraded. With each Levour creation, receive complimentary resizing, maintenance, and repair. Your hand-crafted Levour piece is covered for a lifetime.'
  }
]