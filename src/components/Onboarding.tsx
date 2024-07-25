import { useNavigate } from "react-router-dom";


const Onboarding = () => {

  const navigate = useNavigate();

  const handleFinishButtonClick = () => {
    // Navigate to the desired route here
    navigate('/dashboard');
  };

  return (
    <div className="flex">
      <div>
        <img
          src="/src/assets/Background.png"
          alt="background"
          width="622px"
          height="200px"
          className="mt-8 ml-8 rounded-xl"
        />
      </div>
      <div className="absolute ">
        <div className="flex justify-center mt-16 ml-24">
          <img src="/src/assets/Logo.png" alt="logo" className="" />
        </div>
        <div>
          <img
            src="/src/assets/Charts.png"
            width="500"
            height="263"
            className="flex justify-center items-center ml-16  mt-24"
          />
        </div>
        <div>
          <p className="flex justify-center items-center text-4xl text-white font-normal mt-8 ml-24">
            AI built for sales
          </p>
          <p className="flex justify-center text-white mt-8 ml-24">
            © CommanderAl, Inc. 2024
          </p>
        </div>
      </div>
      <div className="text-center mt-64">
        <p className="ml-16 text-3xl text-center">connect your accounts</p>
        <div className="flex  justify-between ml-16 gap-4 mt-4">
          <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
            <img src="/src/assets/hubspot.png" alt="hubspot-logo" />
            <div style={{ marginBottom: "25px" }}>
              <input type="checkbox" id="checkbox" />
            </div>
          </div>

          <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
            <img src="/src/assets/salesforce logo.png" alt="salesforce-logo" />
            <div style={{ marginBottom: "25px" }}>
              <input type="checkbox" id="checkbox" />
            </div>
          </div>
          <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
            <img src="/src/assets/linkedin logo.png" alt="linkedin" />
            <div style={{ marginBottom: "25px" }}>
              <input type="checkbox" id="checkbox" />
            </div>
          </div>
          <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1">
            <img src="/src/assets/Company logo.png" alt="company-logo" />
            <div style={{ marginBottom: "25px" }}>
              <input type="checkbox" id="checkbox" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">--- Or ---</div>
        <div className="flex items-center justify-center border-[#08736D] border-2 rounded-lg gap-2 p-1 mt-8 ml-16">
          <div className="flex">
            <div className="">
            <p>Got Lists? Drop it like its's hot!</p>
            <p>.xls, .doc, .txt, .pdf, .jpg., .png : 30MB</p>
            </div>
            <div className="flex justify-items-end ml-64 mb-4">
              <button  type="submit" className="border border-[#08736D] p-2 rounded-xl text-black ">Upload away!</button>           
            </div>
            </div>
        </div>
        <div>
          <button type="submit"
                className="bg-[#08736D] p-2 rounded-xl text-white w-1/2 mt-4"
                onClick={handleFinishButtonClick}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
