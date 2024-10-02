import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "./layout";
import FeaturePizza from "./FeaturedPizza";
import PizzaBg from "../../Assets/company-logo/Pizza-background.PNG";
import PopularPizza from "./PopularPizza";
import FastingPizza from "./Fasting";
import TopRestaurant from "./TopResturant";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div class="h-full w-full bg-gradient-to-b from-[#FFFAF4] to-[#FAC792] flex items-center">
        <div class="w-full flex flex-row items-center justify-between text-gray-700">
          <div class="w-full mx-8">
            <div class="text-7xl font-dark font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF890E] to-[#FFBE71]">
              {" "}
              Order Us
            </div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
              Get food from your favorite restaurants in Addis delivered to your
              home or office. what you're looking for.
            </p>

            <a
              href="#"
              class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
            >
              back to homepage
            </a>
          </div>
          <div class="w-full  my-12">
            <img src={PizzaBg} class="w-full" alt="Page not found" />
          </div>
        </div>
      </div>

      <FeaturePizza />
      <TopRestaurant />
      <PopularPizza />
      <FastingPizza />
    </Layout>
  );
};
export default Home;
