import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/home/HomeBanner";
import MobileNav from "@/components/navigation/MobileNav";
import Nav from "@/components/navigation/Nav";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-[100dvh]">
      <Header desktopMenu={<Nav />} mobileMenu={<MobileNav />} sendToHome={false}/>
      <main className="flex flex-col items-center">
        <HomeBanner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
