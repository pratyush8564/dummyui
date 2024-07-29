import { useEffect, useState } from "react";
import useAuthStore from "../useAuthStore";
import {
  actionIcon,
  analyticsIcon,
  arrowDownIcon,
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
  logo,
  MeetingGraph,
  projectGraph,
  refershIcon,
} from "./icon";
import Icon from "./icons";

const Dashboard = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // Default search keyword
  const [selectedProspect, setSelectedProspect] = useState<any>(null); // State for selected prospect
  const { handleSearch, handleDetails, loading, companyDetails } = useAuthStore(
    (state) => ({
      handleSearch: state.handleSearch,
      handleDetails: state.handleDetails,
      loading: state.loading,
      companyDetails: state.companyDetails,
    })
  );

  const onSearch = async (keyword: string) => {
    try {
      console.log("Search triggered with keyword:", keyword);
      await handleSearch(keyword);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  useEffect(() => {
    const fetchDetailsAndSearch = async () => {
      try {
        await onSearch(searchKeyword); // Perform search based on initial keyword
      } catch (error) {
        console.error("Error during search:", error);
      }
    };

    fetchDetailsAndSearch();
  }, [searchKeyword, handleSearch]);

  const onViewProspectDetails = async (prospectId: string) => {
    try {
      // Fetch detailed information for the selected prospect
      await handleDetails(prospectId);
      
      // Extract the detailed information directly from `handleDetails` state
      const detailedProspect = useAuthStore.getState().selectedProspect;
  
      if (!detailedProspect) {
        console.log("Detailed prospect not found.");
        return;
      }
  
      // Update the selected prospect state
      setSelectedProspect(detailedProspect);
  
    } catch (error) {
      console.error("Error during view details:", error);
    }
  };
  
  

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <Icon icon={logo} />
        <div className="flex items-center">
          <p className="mr-2">Toni</p>
          <Icon icon={arrowDownIcon} />
        </div>
      </div>

      <div className="flex min-h-screen bg-slate-200">
        {/* Sidebar */}
        <div className="ml-4  pr-4 mt-4 bg-white">
          <div>{/* <Icon icon={logo} /> */}</div>
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
        <div className="flex flex-col md:flex-row ml-4 mt-4">
          {/* Left Sidebar */}
          <div className="bg-white p-2 shadow flex flex-col w-full md:w-1/4 min-h-screen">
            <div className="flex gap-1 mb-4">
              <div className="flex items-center gap-2 border border-gray-400 rounded-lg p-2 w-full">
                <input
                  type="search"
                  placeholder="Search"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="outline-none border-none flex-1"
                />
              </div>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <button
                  onClick={() => onSearch(searchKeyword)}
                  disabled={loading}
                >
                  <Icon icon={refershIcon} />
                  {/* {loading ? "Searching..." : "🔄"} */}
                </button>
              </div>
            </div>
            <div className="flex gap-8 mb-4 ">
              <span>PROSPECTS</span>
              <span>STATUS</span>
            </div>
            <div>
              {companyDetails?.company_prospects?.length ? (
                companyDetails.company_prospects.map((prospect) => (
                  <div
                    key={prospect.id}
                    className="flex items-center gap-4 mb-2 border-b border-gray-300 pb-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
                    onClick={() => onViewProspectDetails(prospect.id)}
                  >
                    <img
                      src={prospect.basic_company.photo_url}
                      alt={prospect.basic_company.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="flex-1 ml-10">
                      <p className="text-gray-600">
                        {prospect.prospect_status}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No prospects found</p>
              )}
            </div>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 ml-0 mt-4 md:ml-4 md:mt-0">
            <div className="flex flex-wrap gap-4 ">
              {/* <!-- Card 1 --> */}
              <div className="flex flex-col bg-[#F3F4F6] rounded-lg gap-4 p-4 flex-1 min-w-[170px] max-w-[calc(25%-16px)]">
                <div className="flex gap-2 items-center">
                  <Icon icon={dots} />
                  <p className="font-medium">Total Prospects</p>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <p className="text-2xl font-bold">8000</p>
                  <Icon icon={barIcon} />
                  <span className="text-[#08736D]">103%</span>
                </div>
                <div className="mt-2 flex justify-center items-center overflow-hidden w-full">
                  <div className="w-[80px] h-[80px] flex justify-center items-center">
                    <Icon
                      icon={projectGraph}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="flex flex-col bg-[#F3F4F6] rounded-lg gap-4 p-4 flex-1 min-w-[170px] max-w-[calc(25%-16px)]">
                <div className="flex gap-2 items-center">
                  <Icon icon={dots2} />
                  <p className="font-medium">Customers</p>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <p className="text-2xl font-bold">150</p>
                  <Icon icon={barIcon} />
                  <span className="text-[#08736D]">103%</span>
                </div>
                <div className="mt-2 flex justify-center items-center overflow-hidden w-full">
                  <div className="w-[80px] h-[80px] flex justify-center items-center">
                    <Icon
                      icon={customerGraph}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="flex flex-col bg-[#F3F4F6] rounded-lg gap-4 p-4 flex-1 min-w-[170px] max-w-[calc(25%-16px)]">
                <div className="flex gap-2 items-center">
                  <Icon icon={dots3} />
                  <p className="font-medium">Engaged</p>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <p className="text-2xl font-bold">93</p>
                  <Icon icon={barIcon} />
                  <span className="text-[#08736D]">103%</span>
                </div>
                <div className="mt-2 flex justify-center items-center overflow-hidden w-full">
                  <div className="w-[80px] h-[80px] flex justify-center items-center">
                    <Icon
                      icon={engagedGraph}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="flex flex-col bg-[#F3F4F6] rounded-lg gap-4 p-4 flex-1 min-w-[170px] max-w-[calc(25%-16px)]">
                <div className="flex gap-2 items-center">
                  <Icon icon={dots4} />
                  <p className="font-medium">Meetings booked</p>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                  <p className="text-2xl font-bold">12</p>
                  <Icon icon={barDownIcon} />
                  <span className="text-[#BB3D34]">103%</span>
                </div>
                <div className="mt-2 flex justify-center items-center overflow-hidden w-full">
                  <div className="w-[80px] h-[80px] flex justify-center items-center">
                    <Icon
                      icon={MeetingGraph}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            {selectedProspect ? (
  <div className="ml-4 mt-4">
    <div className="flex items-center">
      {console.log(selectedProspect, "hello1")}
      {selectedProspect.basic_company?.photo_url && (
        <img
          src={selectedProspect.basic_company.photo_url}
          alt={selectedProspect.basic_company.name}
          style={{ maxWidth: "100px", height: "auto" }}
        />
      )}
      <p className="ml-auto mr-4 bg-[#26BD6C33] text-[#26BD6C] p-1 rounded-sm">
        {selectedProspect.prospect_status}
      </p>
    </div>
    <div className="flex gap-4 mt-4">
      <div className="flex border border-[#D5DDE5] rounded-lg p-2 gap-4">
        <div>
          <h2>{selectedProspect.basic_company?.name}</h2>
          <p>Role/Title</p>
        </div>
      </div>
      <div className="flex flex-col border border-[#D5DDE5] rounded-lg p-2 gap-2">
        {/* Render Meetings */}
        {selectedProspect.company_meetings?.length ? (
          selectedProspect.company_meetings.map((meeting: any) => (
            <div key={meeting.id} className="mb-2">
              <h3 className="font-semibold">{meeting.name}</h3>
              <p>{meeting.meeting_notes}</p>
              <p>
                {new Date(meeting.start_time).toLocaleString()} -{" "}
                {new Date(meeting.end_time).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No meetings available</p>
        )}
      </div>
    </div>
    <hr className="my-4 border-gray-400 w-full" />
    <div>
      <h2 className="font-medium text-2xl">Actionable Intelligence</h2>
    </div>
    <div className="flex flex-col border border-[#D5DDE5] rounded-lg mt-4 p-2 gap-2">
      {/* Render Actionable Items */}
      {selectedProspect.actionable_items?.length ? (
        selectedProspect.actionable_items.map((item: any) => (
          <div key={item.id} className="flex gap-4">
            <Icon styleClass="intelligence" icon={actionIcon} />
            <h2>{item.question_text}</h2>
            <input
              type="checkbox"
              className="h-4 w-4 rounded bg-gray-100"
              checked={!!item.user_response}
              onChange={() => {}}
            />
          </div>
        ))
      ) : (
        <p>No actionable items available</p>
      )}
    </div>
  </div>
) : (
  <div className="ml-4 mt-4">
    {/* <p>Select a prospect to view details</p> */}
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
