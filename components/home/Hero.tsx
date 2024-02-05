import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Je suis Nicolas Foin,</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          Je crée des <span className="heroShiny1 text-fun-pink">sites web</span> pour votre{" "}
          <span className="heroShiny2 text-fun-pink">entreprise</span>.
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px] opacity-40"
            style={{ animationDelay: "0.1s"}}
            src="/static/doodles/hero/cart.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11 opacity-40"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-250px] -right-[-30px] sm:right-[-10%] lg:bottom-[-350px] lg:right-[+90px] w-[25%] opacity-40"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/mobile.svg"
          />
          <img
            className="sqD w-[15%] left-[10px] lg:left-[160px] bottom-[-150px] sm:bottom-[-250px] opacity-40"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD w-[20%] opacity-40 bottom-[-280px] sm:bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/store.svg"
          />
          <img
            className="sqD w-[15%] right-[0px] sm:right-0 bottom-[-120px] lg:[5%] opacity-40"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/coin.svg"
          />
          <img
            className="sqD w-[15%] left-[-85px] bottom-[-85px] sm:left-[-15px] sm:bottom-[-120px] opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
