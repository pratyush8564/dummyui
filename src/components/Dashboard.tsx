import { useEffect, useState } from "react";
import useAuthStore from "../useAuthStore";
import {
  actionIcon,
  analyticsIcon,
  barDownIcon,
  barIcon,
  customerGraph,
  dashboardIcon,
  dots,
  dots2,
  dots3,
  dots4,
  engagedGraph,
  globeIcon,
  heatmapIcon,
  inteliigenceIcon,
  linkedInIcon,
  logo,
  MeetingGraph,
  projectGraph,
  refershIcon,
} from "./icon";
import Icon from "./icons";

const Dashboard = () => {
  const [keyword, setKeyword] = useState("");
  const { handleSearch, handleDetails, loading, companyDetails } = useAuthStore(
    (state) => ({
      handleSearch: state.handleSearch,
      handleDetails: state.handleDetails,
      loading: state.loading,
      companyDetails: state.companyDetails,
    })
  );

  const onSearch = async () => {
    try {
      await handleSearch(keyword);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  useEffect(() => {
    handleDetails();
  }, [handleDetails]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="ml-4 border-r border-gray-400 pr-4 mt-4">
        <div>
          <Icon icon={logo} />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {/* Home */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon icon={dashboardIcon} />
            <p>Home</p>
          </div>
          {/* Heatmap */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon icon={heatmapIcon} />
            <p>Heatmap</p>
          </div>
          {/* Actionable Intelligence */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon icon={inteliigenceIcon} />
            <p>Actionable Intelligence</p>
          </div>
          {/* Command Center */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon icon={globeIcon} />
            <p>Command Center</p>
          </div>
          {/* Analytics */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon icon={analyticsIcon} />
            <p>Analytics</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-4 mt-4">
        {/* Your main content goes here */}
        <p className="mt-4 font-bold">WeWork</p>
        <hr className="my-4  border-gray-400 w-full" />
        <div className="flex flex-wrap gap-4">
  <div className="flex flex-col bg-[#F3F4F6] border border-[#374151] rounded-lg gap-[var(--spacing24)] p-[var(--spacing24)]" style={{ width: '267px', height: '174px', opacity: '1' }}>
    <div className="flex gap-2 items-center">
      <Icon icon={dots} />
      <p className="font-medium">Total Prospects</p>
    </div>
    <div className="flex gap-2 mt-2">
    <p className="text-2xl font-bold">8000</p>
    <Icon icon={barIcon}/>
    <span className="text-[#08736D]">103%</span>
    </div>
    <div className="mt-2">
      <Icon icon={projectGraph}/>
    </div>
  </div>
  <div className="flex flex-col bg-[#F3F4F6] border border-[#374151] rounded-lg gap-[var(--spacing24)] p-[var(--spacing24)]" style={{ width: '267px', height: '174px', opacity: '1' }}>
    <div className="flex gap-2 items-center">
    <Icon icon={dots2} />
    <p className="font-medium">Customers</p>
    </div>
    <div className="flex gap-2 mt-2">
    <p className="text-2xl font-bold">150</p>
    <Icon icon={barIcon}/>
    <span className="text-[#08736D]">103%</span>
    </div>
    <div className="mt-2">
      <Icon icon={customerGraph}/>
    </div>
  </div>
  <div className="flex flex-col bg-[#F3F4F6] border border-[#374151] rounded-lg gap-[var(--spacing24)] p-[var(--spacing24)]" style={{ width: '267px', height: '174px', opacity: '1' }}>
    <div className="flex gap-2 items-center">
    <Icon icon={dots3} />
    <p className="font-medium">Engaged</p>
    </div>
    <div className="flex gap-2 mt-2">
    <p className="text-2xl font-bold">93</p>
    <Icon icon={barIcon}/>
    <span className="text-[#08736D]">103%</span>
    </div>
    <div className="mt-2">
    <Icon icon={engagedGraph}/>
    </div>
  </div>
  <div className="flex flex-col bg-[#F3F4F6] border border-[#374151] rounded-lg gap-[var(--spacing24)] p-[var(--spacing24)]" style={{ width: '267px', height: '174px', opacity: '1' }}>
    <div className="flex gap-2 items-center">
    <Icon icon={dots4} />
    <p className="font-medium">Meetings booked</p>
    </div>
    <div className="flex gap-2 mt-2">
    <p className="text-2xl font-bold">12</p>
    <Icon icon={barDownIcon}/>
    <span className="text-[#BB3D34]">103%</span>
    </div>
    <div className="mt-2">
      <Icon icon={MeetingGraph}/>
    </div>
  </div>
</div>
        <hr className="my-4  border-gray-400 w-full" />
        <div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 border border-gray-400 rounded-lg p-2 w-1/6">
              {/* <img src="/src/assets/search-outline.png" alt="search-icon" className="w-4 h-4" /> */}
              <input
                type="search"
                placeholder="Search"
                className="outline-none border-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2 border border-gray-400 rounded-lg p-2 ">
              <Icon icon={refershIcon} action={onSearch} />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <span> PROSPECTS </span>
            <span>STATUS</span>
          </div>
        </div>
        {/* <hr className="my-4 border-l border-gray-400 h-4/6 absolute ml-64 top-44" /> */}
        <div className="flex  ml-64 ">
          {companyDetails && (
            <div className="ml-4">
              {companyDetails.logo_url && (
                <img
                  src={companyDetails.logo_url}
                  alt={companyDetails.name}
                  style={{ maxWidth: "100px", height: "auto" }}
                />
              )}
              <div className="flex gap-4">
                <div className="flex border border-[#D5DDE5] rounded-lg mt-4 gap-4 p-2">
                  <img
                    src={companyDetails.logo_url}
                    style={{ maxWidth: "100px", height: "auto" }}
                  />
                  <div>
                    <h2>{companyDetails.name}</h2>
                    <p>Role/Title</p>
                  </div>
                  <div>
                    <Icon styleClass="camera" icon={linkedInIcon} />
                  </div>
                </div>
                <div className="flex flex-col border border-[#D5DDE5] rounded-lg mt-4 gap-2 p-2">
                  <p>Meeting</p>
                  <p>Meeting Description</p>
                </div>
              </div>
              <hr className="my-4  border-gray-400 w-full" />
              <div>
                <h2 className="font-medium text-2xl">
                  Actionable Intelligence
                </h2>
              </div>
              <div className="flex flex-col border border-[#D5DDE5] rounded-lg mt-4 gap-2 p-2">
                <div className="flex gap-4">
                  <Icon styleClass="inteliigence" icon={actionIcon} />
                  <h2>conetnt</h2>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 text-[#08736D] focus:ring-[#08736D] dark:ring-offset-[#08736D] dark:focus:ring-[#08736D]          border border-[#D5DDE5]"
                    id="linkedin"
                  />
                </div>
              </div>
              <div className="flex flex-col border border-[#D5DDE5] rounded-lg mt-4 gap-2 p-2">
                <div className="flex gap-4">
                  <Icon styleClass="inteliigence" icon={actionIcon} />
                  <h2>conetnt</h2>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 text-[#08736D] focus:ring-[#08736D] dark:ring-offset-[#08736D] dark:focus:ring-[#08736D]          border border-[#D5DDE5]"
                    id="linkedin"
                  />
                </div>
              </div>
            </div>
          )}

          {/* <p className="font-bold">`Welcome ${"Name"},`</p> */}
          {/* <div className="flex flex-col mt-4 gap-2">
         
            <div className="flex gap-2">
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Type in a company you want
                <br /> Commander to target
              </div>
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Who are the companies that replied in the last 30 days
              </div>
            </div>

           
            <div className="flex gap-2 mt-2">
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Who are the companies that replied in the last 30 days
              </div>
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Type in a company you want
                <br /> Commander to target
              </div>
            </div>
            <div className="flex items-center gap-2 border border-gray-400 rounded-lg p-2 mt-4">
        
              <input
                type="search"
                placeholder="Type here"
                className="outline-none border-none flex-1"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-[#08736D] p-2 rounded-xl text-white  mt-4"
              >
                Get Started
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
