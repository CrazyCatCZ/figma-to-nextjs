import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[8943px] overflow-hidden flex flex-col items-center justify-start">
      <section className="w-[1440px] h-[2353px] flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <Services />
      </section>
    </div>
  );
};

export default LandingPage;
