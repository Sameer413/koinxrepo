import Image from "next/image";
import Header from "./components/Header";
import SideSection from "./components/SideSection";
import BreadCrumbComponent from "./components/BreadCrumbComponent";
import TeamsSection from "./components/TeamsSection";
import StockListSection from "./components/StockListSection";
import AboutSection from "./components/AboutSection";
import TokenomicSection from "./components/TokenomicSection";
import CryptoInfo from "./components/CryptoInfo";
import SentimentSection from "./components/SentimentSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      {/* BreadCrumb Component */}
      <div className="lg:max-w-7xl mx-auto py-4">
        <BreadCrumbComponent />
      </div>

      <div className="lg:max-w-7xl mx-auto flex">
        <div className="lg:w-3/4 lg:mr-5 w-full">
          <CryptoInfo />
          <SentimentSection />
          <AboutSection />
          <TokenomicSection />
          <TeamsSection />
          <StockListSection />
          <SideSection />
        </div>
        <div className="lg:w-3/12">
          <SideSection show/>
        </div>
      </div>
      {/* Footer */}
      <div className=""></div>
    </div>
  );
}
