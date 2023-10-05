import type { NextPage } from "next";

type InformationContainerType = {
  imageLabel?: string;
  componentLabel?: string;
  imageDimensions?: string;
  serviceType?: string;
};

const InformationContainer: NextPage<InformationContainerType> = ({
  imageLabel,
  componentLabel,
  imageDimensions,
  serviceType,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[42px] text-left text-17xl text-white font-averia-serif-libre">
      <div className="rounded-2xl bg-gray1-100 flex flex-col items-start justify-start py-8 px-12">
        <div className="flex flex-row items-start justify-start gap-[21px]">
          <img
            className="relative w-20 h-20 overflow-hidden shrink-0"
            alt=""
            src={imageLabel}
          />
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block w-[296px]">
              {componentLabel}
            </h1>
            <div className="relative text-base leading-[144%] font-averia-sans-libre text-gray1-200 inline-block w-[296px]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The `}</div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-gray1-100 flex flex-col items-start justify-start py-8 px-12">
        <div className="flex flex-row items-start justify-start gap-[21px]">
          <img
            className="relative w-20 h-20 overflow-hidden shrink-0"
            alt=""
            src={imageDimensions}
          />
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block w-[296px]">
              {serviceType}
            </h1>
            <div className="relative text-base leading-[144%] font-averia-sans-libre text-gray1-200 inline-block w-[296px]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationContainer;
