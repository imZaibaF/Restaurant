import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col">
      <div className="pl-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-8 font-bold max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="max-w-full aspect-[1.28] w-[107px]"
              />
              <div className="mt-32 text-6xl text-red-500 leading-[69px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px]">
                Discover the <br />
                <span className="text-red-500">Best</span> Food and Drinks
              </div>
              <div className="mt-11 text-base leading-7 text-gray-700 max-md:mt-10">
                Naturally made Healthcare Products for the better care & support
                of your body.
              </div>
              <div className="justify-center px-9 py-3.5 mt-11 text-lg tracking-normal leading-9 text-white bg-red-500 rounded-[34px] max-md:px-5 max-md:mt-10">
                Explore Now!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col pt-1.5 pb-8 pl-4 text-base font-semibold tracking-wide leading-9 text-white whitespace-nowrap fill-red-500 min-h-[839px] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af47cb55844eba8623b538f7f4b3bda6b04c8f70fd2afb1d2cc60b180f24ced6?"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex overflow-hidden relative flex-col items-end px-16 pt-7 pb-12 min-h-[804px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-3 py-1 rounded-3xl border border-white border-solid bg-white bg-opacity-0 mb-[538px] max-md:mb-10">
                  Get In Touch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="z-10 mt-36 w-full max-w-[1031px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[0.82] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl leading-7 text-blue-950 max-md:max-w-full max-md:text-4xl">
                  About Us
                </div>
                <div className="mt-7 text-base leading-7 text-gray-700 max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. t has survived not only five centuries.
                </div>{" "}
                <div className="justify-center self-start px-7 py-1 mt-6 text-base tracking-wide leading-9 text-white whitespace-nowrap bg-red-500 rounded-3xl max-md:px-5">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-28 mb-4 w-full max-w-[1225px] max-md:mt-10 max-md:max-w-full">
          <div className="text-6xl font-semibold leading-10 text-blue-950 tracking-[2.24px] max-md:max-w-full max-md:text-4xl">
            Latest Articles
          </div>{" "}
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-7 py-9 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-stretch w-full aspect-[1.27]"
                  />{" "}
                  <div className="mt-9 text-xl font-bold leading-7 whitespace-nowrap text-blue-950">
                    Grilled Tomatoes at Home
                  </div>{" "}
                  <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                    PLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard...
                  </div>
                  <div className="justify-center px-7 py-1 mt-8 max-w-full text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid w-[295px] max-md:px-5">
                    Read More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-stretch w-full aspect-[1.27]"
                  />
                  <div className="mt-9 text-xl font-bold leading-7 text-blue-950">
                    Snacks for Travel
                  </div>
                  <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                    PLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard...
                  </div>{" "}
                  <div className="justify-center px-7 py-1 mt-7 max-w-full text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border border-gray-600 border-solid w-[295px] max-md:px-5">
                    Read More
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-7 pt-7 pb-11 w-full bg-white rounded-3xl border-solid border-[1.37px] border-slate-400 border-opacity-40 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-stretch w-full aspect-[1.27]"
                  />{" "}
                  <div className="mt-9 text-xl font-bold leading-7 text-blue-950">
                    Post-workout Recipes
                  </div>{" "}
                  <div className="mt-3.5 text-base tracking-tight leading-7 text-gray-700">
                    PLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard...
                  </div>
                  <div className="justify-center px-7 py-1 mt-7 max-w-full text-base font-semibold tracking-wide leading-9 text-gray-600 rounded-3xl border-gray-600 border-solid border-[1.37px] w-[295px] max-md:px-5">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 self-center mt-16 max-w-full text-2xl leading-7 text-gray-600 whitespace-nowrap w-[114px] max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fd690d285f9d0c385d340ea452f7a4fe5b28a27e65a2d87002bcc9aab4af4fe?"
              className="flex-1 shrink-0 w-full aspect-[0.96]"
            />
            <div>1/2</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b329851c36dbbc57dcc51e222c06331aa266ee360418ec9b3ec7c59c13b498f?"
              className="flex-1 shrink-0 w-full aspect-[0.96]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
        <div className="mt-10 mr-11 mb-11 ml-11 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="grow px-px max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-stretch my-auto max-w-full aspect-[1.28] w-[161px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-6 text-zinc-500 max-md:mt-10">
                      <div className="text-xl font-semibold tracking-wide leading-7 text-blue-950">
                        Contact Us
                      </div>
                      <div className="mt-7 leading-6">
                        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate
                        near YTM Market, XYZ-343434
                      </div>
                      <div className="mt-7">example2020@gmail.com</div>
                      <div className="mt-6 text-center">(904) 443-0343</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-7 whitespace-nowrap text-zinc-500 max-md:mt-10">
                      <div className="text-xl font-semibold tracking-wide leading-7 text-blue-950">
                        More
                      </div>
                      <div className="mt-8 leading-[186%]">About Us</div>
                      <div className="mt-7">Products</div>
                      <div className="mt-8">Career</div>
                      <div className="mt-7">Contact Us</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="flex gap-2 self-end">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="max-w-full aspect-[1.33] w-[102px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a1ddb1f3237afa390cb0ceabcf2ca498915483cb4ad4d57f6551a4a13678d6?"
                          className="my-auto aspect-square w-[21px]"
                        />
                      </div>
                      <div className="mt-20 text-base leading-6 text-center text-gray-400 whitespace-nowrap max-md:mt-10">
                        © 2022 Food Truck Example
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
