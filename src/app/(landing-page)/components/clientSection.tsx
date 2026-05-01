"use client";
import Image from "next/image";
import Link from "next/link";
import heroSlide1 from "@/assets/images/hero/slide1.png";
import heroSlide2 from "@/assets/images/hero/slide2.png";
import heroSlide3 from "@/assets/images/hero/slide3.png";
import background from "@/assets/images/background.png";
import communityImage from "@/assets/images/community.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import PortfolioOfChange from "./portfolio-of-change";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import PartnerSection from "./partners-section";
import ContactUsSection from "@/components/contact-us-section";
import TypewriterText from "@/components/typewriter-text";

const WHATSAPP_COMMUNITY_URL =
  "https://chat.whatsapp.com/LRE8WPsqyQ9ETktAcfZxgy?mode=gi_t";

const statistics = [
  { label: "Healthcare solution developed", value: 250 },
  { label: "Healthcare Innovators Trained", value: 1200 },
  { label: "Research conducted", value: 100 },
];

export const ClientSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 bg-primary/50 z-[4]" />

        <div className="absolute inset-0 z-[5]">
          <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-4">
            <h1 className="text-white font-bold text-center text-3xl sm:text-4xl lg:text-6xl lg:leading-tight">
              Advancing Equitable Healthcare in Africa through{" "}
              <TypewriterText
                phrases={[
                  "Innovation",
                  "Research",
                  "Workforce Capacity Development",
                ]}
                className="text-accent"
              />
            </h1>

            <Button
              className="mt-8 sm:mt-14 text-md"
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="m-0 h-[80vh] sm:h-[664px]">
            <CarouselItem className="p-0">
              <Image
                src={heroSlide1}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full h-full object-cover"
                priority
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <Image
                src={heroSlide2}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full h-full object-cover"
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <Image
                src={heroSlide3}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Statistics */}
      <section className="w-full flex justify-center relative px-8 lg:px-0">
        <div className="shadow-lg rounded-3xl grid grid-cols-1 lg:grid-cols-3 py-8 px-8 lg:px-24 gap-4 sm:gap-6 lg:gap-8 max-w-screen-xl mx-auto bg-white absolute left-8 right-8 z-10 -mt-[25%] sm:-mt-[12%] lg:-mt-[5%]">
          {statistics.map((stat, index) => (
            <div key={index} className="col-span-1 px-4 space-y-2 sm:space-y-3">
              <p className="font-[400] font-spaceGrotesk text-2xl md:text-3xl lg:text-5xl text-center">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
                +
              </p>
              <h3 className="font-[300] text-lg md:text-lg text-center">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-85"></div>

        <div className="relative z-10">
          <PortfolioOfChange />
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="bg-white py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row px-8 lg:px-0 lg:space-x-12 gap-8 lg:gap-0 max-w-screen-xl mx-auto">
          <div className="flex flex-col justify-center w-full max-w-lg">
            <h2 className="font-[600] text-3xl lg:text-[2.5rem] leading-tight lg:leading-10 text-primary">
              Join the largest community of healthcare innovators
            </h2>

            <p className="mt-4 text-lg">
              Join the largest community of innovators, encompassing product
              developers, data scientists, engineers, healthcare professionals,
              AI developers, cloud engineers, and more.
            </p>

            <Button
              className="w-fit mt-4 lg:mt-9 text-white text-base"
              size="lg"
              asChild
            >
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Largest Community of Healthcare Innovators
              </a>
            </Button>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={communityImage}
              alt="Image of innovators connected by one goal"
              width={553}
              height={300}
              className="rounded-3xl overflow-hidden"
            />
          </div>
        </div>
      </section>

      <PartnerSection />

      <ContactUsSection />
    </>
  );
};
