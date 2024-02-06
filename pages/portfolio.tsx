import Page from "components/utility/Page";
import Portfolio from "components/portfolio/portfolio";
import React from "react";

/*import PortfolioSlide from 'components/projects/portfolio_slide'
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, A11y, Mousewheel, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';*/

function portfolio() {
  return (
    <Page
      currentPage="Portfolio"
      meta={{ title: "Mes projets", desc: "Voici les projets sur lesquels j'ai travaillé." }}>
      
        {/*<div className="ml-10 md:ml-14">
          <div className="m-4 mr-0 portfolio-swiper-container">
            <Swiper
              hidden={true}
              className="portfolio-swiper"
                modules={[EffectCreative, FreeMode, Pagination, A11y, Mousewheel]}
                spaceBetween={50}
                grabCursor={true}
                slidesPerView={1}
                direction='horizontal'
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 0.5
                }}
                freeMode={false}
                pagination={{ clickable: true }}
                effect={'creative'}
                creativeEffect={{
                  limitProgress: 2,
                  prev: {
                      shadow: true,
                      scale: 0.7,
                      origin: 'left center',
                      translate: ['-5%', 0, -10],
                      rotate: [0, 0, 0],
                  },
                  next: {
                      shadow: false,
                      scale: 1.3,
                      origin: 'right center',
                      // [x, y, z] //
                      translate: ['200%', 0, 50],
                      rotate: [0, 0, 0],
                  },
                }}>

                {portfolio_proj_data.map((project, index) => (
                  <SwiperSlide className="bg-sunglowBgSection rounded portfolio-slides" key={`portfolio-project-${index}`}>
                    <PortfolioSlide project_data={project} />
                  </SwiperSlide>
                ))}
                
            </Swiper>
          </div>
        </div>*/}

    </Page>
  );
}

export default portfolio;
