import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Category title="First Love Romance" />
    </div>
  );
}
