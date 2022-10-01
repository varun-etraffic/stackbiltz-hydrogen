export function TextSection() {
    return (
        <div className="custom-text-section-bg w-full gap-4 md:gap-16 grid p-6 md:p-8 lg:p-16 bg-[#F5F4F4]">
            <div className="flex items-center">
                <div className="w-1/2">
                    <div className="max-w-lg">
                    <h3 className="text-5xl capitalize mb-3 relative cut-line-text">our<br/>story</h3>
                    <p className="text-2xl">Disrupting the way things have always been done, we are edgy, innovative and modern. We are the rebels of fine jewelry, here to merge craftsmanship with technology, bringing clean lines and intricate details to each bold design. We bridge the gap between the ever-changing world we live in and jewelry made to last a lifetime.</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="max-w-sm">
                    <h4 className="text-2xl">“Driven by innovation, Levour offers truly superior designs available through a revolutionary luxury buying experience.”</h4>
                    <div className="mt-6">
                        <img className="max-w-xs block" src="https://cdn.shopify.com/s/files/1/0588/2789/9031/files/new-sign.png?v=1660385249" alt="sign"/>
                        <p className="uppercase font-semibold text-[#B2A48E] mt-3">Michael Ashikian, CEO</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}