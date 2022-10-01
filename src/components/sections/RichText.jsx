import { Link } from '@shopify/hydrogen';

export function RichText(props) {
  return (
    <section className={`w-full richtext py-16`}>
      <div className='content w-3/4 max-w-3xl text-center md:mx-auto'>
        <p className={`text-sm text-[#212121] mb-8`}>{props.subheading}</p>
        <h3 className={'text-3xl mb-8'}>{props.content}</h3>
        <Link className={'text-xl underline italic'} to={props.url}>{props.urlText}</Link>
      </div>
    </section>
  )
}