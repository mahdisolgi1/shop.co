import { FC } from "react";
import Button from "./Button";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <>
      <section className="bg-primary-lessLight flex  flex-col justify-center items-center md:flex-row  ">
        <div className="p-5 flex flex-col ">
          <div className="flex flex-col gap-4 p-5 justify-center ">
            <h1 className="text-[2.25rem] leading-9  font-bold text-primary-dark font-Bebas md:text-[4.5rem] md:leading-[4.5rem] ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="leading-5 text-primary-darkWithOpacity text-[0.875rem] ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              size="lg"
              variant="primary"
              className="text-xs self-stretch md:self-start"
            >
              Shop Now
            </Button>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-8 ">
            <div className="flex flex-col justify-center items-center">
              <span className="text-primary-dark font-bold text-[1.5rem ]   md:text-[2.5rem]">
                200+
              </span>
              <span className="text-[0.75rem] text-primary-darkWithOpacity md:text-xs">
                International Brands
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-primary-dark font-bold text-[1.5rem ]  md:text-[2.5rem]">
                2,000+
              </span>
              <span className="text-[0.75rem] text-primary-darkWithOpacity md:text-xs">
                High-Quality Products
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-primary-dark font-bold text-[1.5rem ]  md:text-[2.5rem]">
                30,000+
              </span>
              <span className="text-[0.75rem] text-primary-darkWithOpacity md:text-xs">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
        <div className="relative ">
          <Image
            src="/hero.jpg"
            width={500}
            height={300}
            alt="hero image"
            className="w-[80vw]  md:h-[36rem]  lg:h-[29rem]"
          />
          <Image
            src="/Icon.svg"
            width={500}
            height={300}
            alt="svg icon "
            className="absolute top-7 right-7 lg:top-10 lg:right-10 w-[4.75rem] md:w-[5.5rem] lg:w-[5.5rem]"
          />{" "}
          <Image
            src="/smallerIcon.svg"
            width={500}
            height={300}
            alt="svg icon "
            className="absolute bottom-40 md:bottom-80 left-8 w-11 lg:bottom-72 lg:left-14  md:w-14"
          />
        </div>
      </section>
      <div className="px-4 py-6 flex justify-around items-stretch flex-wrap gap-8 bg-primary-dark">
        <Image
          className=" w-24 md:w-44"
          width={500}
          height={500}
          src="/versace-logo.svg"
          alt="versace logo"
        />
        <Image
          className=" w-24 md:w-44"
          width={500}
          height={500}
          src="/zara-logo.svg"
          alt="zira Logo"
        />
        <Image
          className=" w-24 md:w-44"
          width={500}
          height={500}
          src="/gucci-logo.svg"
          alt="gucci Logo"
        />
        <Image
          className=" w-24 md:w-44"
          width={500}
          height={500}
          src="/prada-logo.svg"
          alt="prada Logo"
        />
        <Image
          className=" w-24 md:w-44"
          width={500}
          height={500}
          src="/calvinKlein-logo.svg"
          alt="calvinKlein Logo"
        />
      </div>
    </>
  );
};

export default HeroSection;
