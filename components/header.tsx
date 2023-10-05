import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="relative bg-white w-[1440px] h-[100px] overflow-hidden shrink-0 text-left text-base text-dark font-rubik">
      <img
        className="absolute top-[16px] left-[109px] w-[152px] h-[57px] overflow-hidden"
        alt=""
        src="/edufy-2.svg"
      />
      <button className="cursor-pointer [border:none] py-2.5 px-4 bg-coral absolute top-[calc(50%_-_29px)] left-[1239px] rounded-mini h-[52px] flex flex-row items-center justify-center box-border">
        <div className="relative text-base font-medium font-rubik text-white text-left">
          Sign Up
        </div>
      </button>
      <nav className="m-0 absolute top-[41px] left-[534px] flex flex-row items-center justify-start gap-[32px] text-left text-base text-dark font-rubik">
        <div className="relative font-medium">Home</div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="relative font-medium">Services</div>
          <img
            className="relative w-4 h-3 overflow-hidden shrink-0"
            alt=""
            src="/chevrondown-15-1.svg"
          />
        </div>
        <div className="relative font-medium">About</div>
        <div className="flex flex-row items-center justify-start gap-[4px] text-coral">
          <div className="relative font-medium">Resources</div>
          <img
            className="relative w-4 h-3 overflow-hidden shrink-0"
            alt=""
            src="/chevrondown-15-11.svg"
          />
        </div>
      </nav>
      <div className="absolute top-[41px] left-[931px] font-medium">Blog</div>
    </header>
  );
};

export default Header;
