export function ImageBanner(props) {
    return (
    <div className="image-banner-section relative">
        <div className="block w-full image-banner-block">
            <img src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/craftsmanship-banner.png?v=1660990885" alt="craftsmanship-banner" />
        </div>
        <div className={`banner-content absolute text-right ${props.position}`}>
            <p className="uppercase text-base text-right inline-block relative mb-8">CRAFTSMANSHIP</p>
            <h3 className="text-6xl">Perfection <i>in</i><br/><span className="ml-40">very Facet</span></h3>
        </div>
    </div>
    )
  }


