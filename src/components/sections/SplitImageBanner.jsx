export function SplitImageBanner(props) {
    return (
    <div className="image-banner-section relative image-banner-split">
        <div className="block w-full image-banner-block flex">
            <div className="split-full-image w-3/4">
            <img src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/stone-ring_copy.png?v=1662708954" alt="craftsmanship-banner" />
            </div>
            <div className="split-banner-bg">
                
            </div>
        </div>
        <div className={`banner-content absolute text-right ${props.position}`}>
            <p className="uppercase text-base text-right inline-block relative mb-8">OUR STORY</p>
            <h3 className="text-6xl">Born <i>in</i> Downtown<br/><span className="ml-40">Los Angeles</span></h3>
        </div>
    </div>
    )
  } 