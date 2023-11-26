import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/home/HomeBanner";
import MobileNav from "@/components/navigation/MobileNav";
import Nav from "@/components/navigation/Nav";

export default function Home() {
  return (
    <>
      <Header desktopMenu={<Nav />} mobileMenu={<MobileNav />} />
      <main className="flex">
        <HomeBanner />
      </main>
      <Footer />
    </>
  );
}
