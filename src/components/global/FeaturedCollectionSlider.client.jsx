import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Mousewheel } from "swiper";
import { ProductCard } from '~/components';
import { getImageLoadingPriority } from '~/lib/const';

let initFlag = false;

export function FeaturedCollectionSlider({products}) {
  return ( 
    <>
      <Swiper
        className={`featured-collection-slider`}
        scrollbar={{
          hide: false,
          draggable: true
        }}
        navigation={true}
        mousewheel={true}
        modules={[Scrollbar, Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        onAfterInit={() => {wrapContentDiv();}}
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              key={product.id}
              product={product}
              loading={ getImageLoadingPriority(i) }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function wrapContentDiv() {
  if(!initFlag) {
    let wrapper = document.createElement('div');
    wrapper.className = "swiper-scroll-btn-wrapper";

    let element1 = document.querySelector('div.swiper-button-prev');
    let element2 = document.querySelector('div.swiper-button-next');
    let element3 = document.querySelector('div.swiper-scrollbar');

    element1.parentNode.insertBefore(wrapper, element1);

    wrapper.appendChild(element1);
    wrapper.appendChild(element2);
    wrapper.appendChild(element3);
    initFlag = true;
  }
}