import {Image, Link} from '@shopify/hydrogen';

export function MultiTextWithImage() {
  return (
    <>
    <div>
    <div className="w-full gap-4 md:gap-16 grid p-6 md:p-8 lg:p-16 bg-[#212121] top-dark-slice-bg relative top-slice-bg">
    <div className="container">
        <div className="top-dark-slice-image-text-block flex items-center">
        <div className="top-image-item w-1/2">
            <img className="max-w-md m-auto" src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/Rectangle_113.png?v=1660798706" alt="icon"/>
        </div> 
        <div className="top-content-item w-1/2 max-w-md m-auto">   
            <h2 className="text-[#F7F6F6] text-5xl mb-4">Precision<br />Engineering</h2>
            <p className="text-[#F7F6F6] text-xl">With three generations of jewelry manufacturing experience behind us, and a team of over 80 skilled artisans, we take care of every detail – so you don’t have to. Built to last for generations, our jewelry is created for a lifetime and every lifetime beyond that.</p>
        </div>
        </div>
    </div> 
    </div>
</div>

<div className="bottom-slice-block-section flex items-center h-full">
<div className="bottom-content-item w-1/2 max-w-md m-auto">
  <h2 className="text-[#000000] text-5xl mb-4">Superior<br/>Craftsmanship</h2>
  <p className="text-[#999691] text-xl mb-4">
    Our commitment to meticulous detail is evident in every one of our designs. When you see a Levour piece, you’re witnessing the convergence of artistry and technology. Our in-house designers, engineers, and artisans pair vision with cutting edge technology and precision engineering to deliver extraordinary results.</p>
  <p className="text-[#999691] text-xl"> From concept through delivery, every handcrafted piece reflects our decades-strong mastery and our refusal to cut corners anywhere.</p>
</div>
<div className="bottom-image-item w-1/2 relative flex items-center h-full"></div>
</div>
 
</>

  )
}