// import React from "react";
import CustomerReview from "./sections/CustomerReview";
import Populerproducts from "./sections/Populerproducts";
import SuperQuality from "./sections/SuperQuality";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import Specialoffer from "./sections/Specialoffer";
import Subscribe from "./sections/Subscribe";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding ">
        <Populerproducts></Populerproducts>
      </section>
      <section className="padding ">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10 ">
        <Services></Services>
      </section>
      <section className="padding ">
        <Specialoffer></Specialoffer>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="text-white bg-black padding-x padding-t">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
