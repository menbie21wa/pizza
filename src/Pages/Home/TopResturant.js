import React from "react";
import pizzaCard from "../../Assets/company-logo/pizzaCard.PNG";

const TopRestaurant = () => {
  return (
    <>
      <div className="bg-[#FFF8F1]">
        <div className="w-11/12 xl:w-11/12 mx-auto pb-6 py-8">
          <h1 className="text-start font-normal text-2xl md:text-5xl font-serif mb-6">
            Top Restaurants
          </h1>
          <section className="mb-6">
            <ul
              role="list"
              class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <li class="divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                  <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                      <img
                        class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
                        alt=""
                      />
                      <h3 class="truncate text-sm font-medium text-gray-900">
                        Azmera Pizza
                      </h3>
                    </div>
                    <p class="mt-1 truncate text-sm text-gray-500">
                      Get food from your favorite restaurants in Addis delivered
                      to your home or office.
                    </p>
                  </div>
                  <div className="bg-gray-300">
                    <img src={pizzaCard} className="w-full" />
                  </div>
                </div>
              </li>

              <li class="divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                  <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                      <img
                        class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
                        alt=""
                      />
                      <h3 class="truncate text-sm font-medium text-gray-900">
                        Azmera Pizza
                      </h3>
                    </div>
                    <p class="mt-1 truncate text-sm text-gray-500">
                      Get food from your favorite restaurants in Addis delivered
                      to your home or office.
                    </p>
                  </div>
                  <div className="bg-gray-300">
                    <img src={pizzaCard} className="w-full" />
                  </div>
                </div>
              </li>
              <li class="divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                  <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                      <img
                        class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
                        alt=""
                      />
                      <h3 class="truncate text-sm font-medium text-gray-900">
                        Azmera Pizza
                      </h3>
                    </div>
                    <p class="mt-1 truncate text-sm text-gray-500">
                      Get food from your favorite restaurants in Addis delivered
                      to your home or office.
                    </p>
                  </div>
                  <div className="bg-gray-300">
                    <img src={pizzaCard} className="w-full" />
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
export default TopRestaurant;
