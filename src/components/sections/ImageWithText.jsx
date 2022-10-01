import {Image, Link} from '@shopify/hydrogen';

export function ImageWithText(props) {
  return (
    <section className={`w-full image-with-text`}>
      <Image
          src={props.imgUrl}
          width='100%'
          height='100%'
          alt='Index Banner Image'
      />
      <div className='content w-full text-center'>
        <h2 className={`text-display`}>{props.text}</h2>
      </div>
    </section>
  )
}