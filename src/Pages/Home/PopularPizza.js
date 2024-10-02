import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataProducts } from "../../Components/Toasts/data";
import pizzaDetail from "../../Assets/company-logo/pizzaDetail.PNG";

const PopularPizza = () => {
  return (
    <>
      <div className="bg-[#FFF8F1]">
        <div className="w-11/12 xl:w-11/12 mx-auto pb-6">
          <h1 className="text-start font-normal text-2xl md:text-5xl font-serif mb-6">
            Popular Pizzas
          </h1>
          <section className="mb-6 text-gray-800 text-center ">
            <div class="grid lg:grid-cols-4 xl:gap-5 md:gap-6 xl:gap-x-4">
              {dataProducts?.length > 0
                ? dataProducts?.slice(0, 15).map((values, index) => {
                    return (
                      <>
                        <div key={index} className="mb-6 lg:mb-0">
                          <div className="relative group block bg-white overflow-hidden">
                            <div className="flex">
                              <div
                                className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  className="w-screen h-72 transition cursor-pointer duration-700"
                                  src={values?.linkImg}
                                  alt="product img not found"
                                />
                              </div>
                            </div>

                            <div className="p-2">
                              <p className="text-lg font-bold  mt-4 text-start">
                                {values.name.substring(0, 24)}
                              </p>

                              <p className="text-sm text-start">
                                {values.description}
                              </p>
                              <img src={pizzaDetail} className="w-full" />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                : null}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default PopularPizza;
