import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow pt-16 md:pt-20">
        <Hero/>
      </main>
      <Footer/>
    </div>
  );
}
