// import { useNavigate } from "react-router-dom";

// const Onboarding = () => {

// const navigate = useNavigate();

// const handleFinishButtonClick = () => {
//   // Navigate to the desired route here
//   navigate('/dashboard');
// };

//   return (
//     <div className="flex">
//       <div>
//         <img
//           src="/src/assets/Background.png"
//           alt="background"
//           width="622px"
//           height="200px"
//           className="mt-8 ml-8 rounded-xl"
//         />
//       </div>
//       <div className="absolute ">
//         <div className="flex justify-center mt-16 ml-24">
//           <img src="/src/assets/Logo.png" alt="logo" className="" />
//         </div>
//         <div>
//           <img
//             src="/src/assets/Charts.png"
//             width="500"
//             height="263"
//             className="flex justify-center items-center ml-16  mt-24"
//           />
//         </div>
//         <div>
//           <p className="flex justify-center items-center text-4xl text-white font-normal mt-8 ml-24">
//             AI built for sales
//           </p>
//           <p className="flex justify-center text-white mt-8 ml-24">
//             © CommanderAl, Inc. 2024
//           </p>
//         </div>
//       </div>
//       <div className="text-center mt-64">
//         <p className="ml-16 text-3xl text-center">connect your accounts</p>
//         <div className="flex  justify-between ml-16 gap-4 mt-4">
//           <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
//             <img src="/src/assets/hubspot.png" alt="hubspot-logo" />
//             <div style={{ marginBottom: "25px" }}>
//               <input type="checkbox" id="checkbox" />
//             </div>
//           </div>

//           <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
//             <img src="/src/assets/salesforce logo.png" alt="salesforce-logo" />
//             <div style={{ marginBottom: "25px" }}>
//               <input type="checkbox" id="checkbox" />
//             </div>
//           </div>
//           <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
//             <img src="/src/assets/linkedin logo.png" alt="linkedin" />
//             <div style={{ marginBottom: "25px" }}>
//               <input type="checkbox" id="checkbox" />
//             </div>
//           </div>
//           <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
//             <img src="/src/assets/Company logo.png" alt="company-logo" />
//             <div style={{ marginBottom: "25px" }}>
//               <input type="checkbox" id="checkbox" />
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-8">--- Or ---</div>
//         <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1 mt-8 ml-16">
//           <div className="flex">
//             <div className="">
//             <p>Got Lists? Drop it like its's hot!</p>
//             <p>.xls, .doc, .txt, .pdf, .jpg., .png : 30MB</p>
//             </div>
//             <div className="flex justify-items-end ml-64 mb-4">
//               <button  type="submit" className="border border-[#08736D] p-2 rounded-xl text-black ">Upload away!</button>
//             </div>
//             </div>
//         </div>
//   <div>
//     <button type="submit"
//           className="bg-[#08736D] p-2 rounded-xl text-white w-1/2 mt-4"
//           onClick={handleFinishButtonClick}>Finish</button>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Onboarding;

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleFinishButtonClick = () => {
    navigate("/dashboard");
  };

  const fileInputRef: any = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      alert(`Selected file: ${file.name}`);
    }
  };
  return (
    <div>
      <div>
        <div className="xl:h-screen w-full flex bg-[#ffffff]">
          <div className="w-full md:flex-row flex flex-col flex-wrap justify-center items-stretch">
            <div className="w-full lg:min-h-dvh lg:w-6/12 md:p-2 hidden lg:block">
              <div
                className="min-h-full block md:flex flex-col justify-between rounded-lg"
                style={{
                  backgroundImage:
                    'url("src/assets/Background.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="px-5 py-5 flex flex-col items-center justify-center">
                  <span className="p-[19.50px]">  <img src="/src/assets/Logo.png" alt="logo" className="" /> </span>
                </div>
                <div className="flex w-full items-center justify-center md:max-w-md xl:max-w-xl mx-auto">
                  <img
                    src="/src/assets/Charts.png"
                    alt="FeatureGraphCard"
                    className="w-full"
                  />
                </div>
                <div className="flex items-center justify-center md:text-[2rem] lg:text-[2.625rem] text-[#FFFFFF]">
                  <p className="mt-auto">Selling Made Simple</p>
                </div>
                <div className="flex items-center justify-center text-xs text-[#ffffff] pb-[20px]">
                  <span>© CommanderAl, Inc. 2024</span>
                </div>
              </div>
            </div>
            <div className="w-full justify-center items-center px-5 py-2 flex lg:hidden">
              <div className="px-5 py-5 flex flex-col items-center justify-center">
                <span className="block mb-2">"commander icon mobile view"</span>
                <span> </span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 flex md:items-center justify-center px-5 relative">
              <div className="text-center w-full max-w-[900px]">
                <h2 className="text-2xl trialrooftopbold pb-5">
                  Connect your accounts
                </h2>
                <div className="w-full flex justify-center mb-5 h-auto">
                  <div className="flex flex-wrap gap-4 md:flex-nowrap w-full justify-center ">
                    <div className="w-[159px] md:w-1/4">
                      <div className="cursor-pointer h-[84px] p-3 w-full border border-[#D5DDE5] rounded-lg relative
                       flex items-center justify-center xl:ronded-[10px] false">
                        <div className="px-3">
                          <span>"hubspot"</span>
                        </div>
                        <div className="absolute right-[8px] top-[2px]">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 
                            text-[#08736D] focus:ring-[#08736D] dark:ring-offset-[#08736D] dark:focus:ring-[#08736D] border border-[#D5DDE5]"
                            id="hubspot"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[159px] md:w-1/4">
                      <div
                        className="cursor-pointer h-[84px] p-3 w-full border border-[#D5DDE5] rounded-lg relative
                       flex
                       items-center justify-center xl:ronded-[10px] false"
                      >
                        <div className="px-3">
                          <span>"salesforceicon"</span>
                        </div>
                        <div className="absolute right-[8px] top-[2px]">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700
                             text-[#08736D] focus:ring-[#08736D] dark:ring-offset-[#08736D] 
                            dark:focus:ring-[#08736D] border border-[#D5DDE5]"
                            id="salesForce"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[159px] md:w-1/4">
                      <div
                        className="cursor-pointer h-[84px] p-3 w-full border border-[#D5DDE5] rounded-lg relative flex
                       items-center justify-center xl:ronded-[10px] false"
                      >
                        <div className="px-3">
                          <span>"linkedin icon"</span>
                        </div>
                        <div className="absolute right-[8px] top-[2px]">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700
                             text-[#08736D] focus:ring-[#08736D] dark:ring-offset-[#08736D] dark:focus:ring-[#08736D]
                              border border-[#D5DDE5]"
                            id="linkedin"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[159px] md:w-1/4">
                      <div
                        className="cursor-pointer h-[84px] p-3 w-full border border-[#D5DDE5] rounded-lg relative
                       flex items-center justify-center xl:ronded-[10px] false"
                      >
                        <div className="px-3">
                          <span>"calendly icon"</span>
                        </div>
                        <div className="absolute right-[8px] top-[2px]">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded bg-gray-100 focus:ring-2
                             dark:border-gray-600 dark:bg-gray-700 text-[#08736D] 
                             focus:ring-[#08736D] dark:ring-offset-[#08736D]
                              dark:focus:ring-[#08736D] border border-[#D5DDE5]"
                            id="calendly"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pb-5">
                  <div className="relative w-full">
                    <span className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200"></span>
                    <span className="relative z-10 px-4 bg-white">or</span>
                    <span className="absolute right-0 top-1/2 w-full h-0.5 bg-border-primary"></span>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-full">
                    <div className="p-6 mb-6 border border-surface-border-color rounded-lg 
                    flex items-start flex-wrap w-full">
                      <div className="w-full flex flex-wrap items-start justify-between ">
                        <div className=" w-full md:w-3/4 ">
                          <h2 className="text-lg font-bold text-start pb-[8px]">
                            Got Lists? Drop it like it's hot!
                          </h2>
                          <p className="text-xs font-normal text-secondary text-start">
                            .xls, .doc, .txt, .pdf, .jpg., .png : 30MB
                          </p>
                        </div>
                        <input
                          type="file"
                          id="file"
                          hidden
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          multiple
                          accept=".csv"
                          maxLength={31457280}
                        />
                        <div className="w-full md:w-1/4 ">
                          <button
                            type="button"
                            onClick={handleButtonClick}
                            className="group relative flex justify-center p-0.5 text-center font-medium 
                            border-[#08736D] bg-transparent
                             text-black rounded-xl border border-button-primary focus:ring-0 outine-0 md:w-full"
                          >
                            <span className="flex items-stretch transition-all border-[#08736D]
                              duration-200 rounded-md px-4 py-2 text-sm">
                              Upload away!
                            </span>
                          </button>
                          <div className="w-full mt-1">
                            <span className="whitespace-nowrap text-xs font-normal text-red-600 text-start"></span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-2/4"></div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="bg-[#08736D] text-white py-3 px-6 rounded-xl w-full max-w-sm mx-auto mt-8"
                        onClick={handleFinishButtonClick}
                      >
                        Finish
                      </button>
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
};

export default Onboarding;
