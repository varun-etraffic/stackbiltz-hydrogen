import { useContext } from 'react';
import { Accordion } from '~/components';

const accordionData = [
  {
    id: 1,
    title: 'We Obsess Over Excellence',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada molestie neque, eget iaculis tellus pellentesque sed. Nam sit amet aliquam ligula. Ut tempor ullamcorper metus ac vehicula. Nullam porta dolor et diam facilisis, in pellentesque nibh aliquam. Fusce vitae ligula ut velit elementum mollis eu auctor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'We Obsess Over Excellence',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada molestie neque, eget iaculis tellus pellentesque sed. Nam sit amet aliquam ligula. Ut tempor ullamcorper metus ac vehicula. Nullam porta dolor et diam facilisis, in pellentesque nibh aliquam. Fusce vitae ligula ut velit elementum mollis eu auctor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'We Obsess Over Excellence',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada molestie neque, eget iaculis tellus pellentesque sed. Nam sit amet aliquam ligula. Ut tempor ullamcorper metus ac vehicula. Nullam porta dolor et diam facilisis, in pellentesque nibh aliquam. Fusce vitae ligula ut velit elementum mollis eu auctor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

export function ImageWithAccordion() {
  function test(id) {
    let accBtn = '#acc-'+id+' button';
    document.querySelector(accBtn).click();
  }

  return (
    <section className="w-full gap-4 md:gap-16 grid p-6 md:p-8 lg:p-16 bg-[#FCF9F5]">
      <div className="">
        <div className="image-with-text-header text-center mb-20">
          <h3 className="text-5xl mb-4">What Makes <span className="italic">the</span> Levour Difference</h3>
          <p className="max-w-3xl m-auto text-xl">A nod to tradition. From our revolutionary Signature Levuor Solitaire to our modern takes on traditional classics, each ring embodies true ingenuity and refined design.</p>
        </div>

        <div className="image-with-text-accordian-block flex items-center">
          <div className="image-block w-1/2">
            <img className="m-auto max-w-md" src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/ring.png?v=1660114236" alt="rings"/>
            <span className="ShopTheLook__Dot" onClick={() => test(1)} style={{left: '33%', top: '40%'}}></span>
            <span className="ShopTheLook__Dot" onClick={() => test(2)} style={{left: '55%', top: '60%'}}></span>
            <span className="ShopTheLook__Dot" onClick={() => test(3)} style={{left: '70%', top: '50%'}}></span>
          </div>

          <div className="accordian-block w-1/2">
            <div className="accordion">
              {accordionData.map((item) => {
                return(<Accordion key={item.id} title={item.title} content={item.content} id={item.id} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
