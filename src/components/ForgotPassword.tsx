const ForgotPassword = () => {
  return (
    <div>
      <div>
        <div className="xl:h-screen w-full flex bg-[#ffffff]">
          <div className="w-full md:flex-row flex flex-col flex-wrap justify-center items-stretch">
            <div className="w-full lg:min-h-dvh lg:w-6/12 md:p-2 hidden lg:block">
              <div
                className="min-h-full block md:flex flex-col justify-between rounded-lg"
                style={{
                  backgroundImage: 'url("src/assets/Background.png")',

                  backgroundSize: "cover",

                  backgroundPosition: "center center",
                }}
              >
                <div className="px-5 py-5 flex flex-col items-center justify-center">
                  <span className="p-[19.50px]">
                    {" "}
                    <img
                      src="/src/assets/Logo.png"
                      alt="logo"
                      className=""
                    />{" "}
                  </span>
                </div>

                <div className="flex w-full items-center justify-center md:max-w-md xl:max-w-xl mx-auto">
                  <img
                    src="/src/assets/Charts.png"
                    alt="FeatureGraphCard"
                    className="w-full"
                  />
                </div>

                <div className="flex items-center justify-center md:text-[2rem] lg:text-[2.625rem] text-[#FFFFFF]">
                  <p className="mt-auto">AI built for sales</p>
                </div>

                <div className="flex items-center justify-center text-xs text-[#ffffff] pb-[20px]">
                  <span>© CommanderAl, Inc. 2024</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 flex md:items-center justify-center px-5 relative">
              <div className="text-center w-full max-w-[900px]">
                <h2 className="text-2xl trialrooftopbold pb-5">
                  Forgot Your Password?
                </h2>
                <p>We'll send you a link to create a new password</p>
                <div className="mt-4">
                  <label className="block">E-mail</label>
                  <input
                    className="border-gray-800 border-2 rounded-lg w-1/2 p-2"
                    value="email"
                  />
                </div>
                <div className="mt-4 ">
                  <button
                    type="submit"
                    className="bg-[#08736D] p-2 rounded-xl text-white  mb-4 w-1/4 mr-2"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="border-[#08736D] border-2 p-2 rounded-xl text-black  mb-4 w-1/4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
