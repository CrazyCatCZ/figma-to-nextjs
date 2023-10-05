import type { NextPage } from "next";
import InformationContainer from "./information-container";

const Services: NextPage = () => {
  return (
    <div className="relative rounded-t-none rounded-b-131xl bg-teal w-[1440px] h-[1047px] overflow-hidden shrink-0 text-center text-17xl text-white font-averia-serif-libre">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1053px] object-cover"
        alt=""
        src="/image-641@2x.png"
      />
      <div className="absolute top-[487px] left-[calc(50%_-_492px)] flex flex-col items-start justify-start gap-[42px] text-left">
        <InformationContainer
          imageLabel="/frame.svg"
          componentLabel="Information"
          imageDimensions="/frame1.svg"
          serviceType="Support"
        />
        <InformationContainer
          imageLabel="/frame2.svg"
          componentLabel="Guidance"
          imageDimensions="/frame3.svg"
          serviceType="Education"
        />
      </div>
      <div className="absolute top-[255px] left-[655px] flex flex-col items-center justify-start text-base text-gray1-200 font-rubik">
        <div className="self-stretch relative tracking-[6px] leading-[36px] uppercase font-semibold">
          Our Services
        </div>
      </div>
      <h1 className="m-0 absolute top-[291px] left-[420px] text-77xl leading-[120%] font-bold font-inherit inline-block w-[654px]">
        What we offer
      </h1>
      <img
        className="absolute h-[9.56%] w-[21.78%] top-[16.03%] right-[64.8%] bottom-[74.4%] left-[13.41%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default Services;
