import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../useAuthStore";
import usePreventBackNavigation from "../usePreventBackNavigation";
import {
  actionIcon,
  analyticsIcon,
  arrowDownIcon,
  backIcon,
  // barDownIcon,
  barIcon,
  checkboxIcon,
  checkboxRightIcon,
  commanderMobileIcon,
  // customerGraph,
  dashboardIcon,
  dots,
  dots2,
  dots3,
  dots4,
  // engagedGraph,
  forwardIcon,
  globeIcon,
  hamburgerIcon,
  heatmapIcon,
  inteliigenceIcon,
  linkedInIcon,
  logo,
  // MeetingGraph,
  // projectGraph,
  refershIcon,
  settingIcon,
} from "./icon";
import Icon from "./icons";
import ChartCard from "./ChartCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // Default search keyword
  const [selectedProspect, setSelectedProspect] = useState<any>(null); // State for selected prospect
  const {
    handleSearch,
    handleDetails,
    loading,
    companyDetails,
    handleLogout,
    user,
    initializeUserFromLocalStorage,
  }: any = useAuthStore((state) => ({
    user: state.user,
    handleSearch: state.handleSearch,
    handleDetails: state.handleDetails,
    handleLogout: state.handleLogout,
    initializeUserFromLocalStorage: state.initializeUserFromLocalStorage,
    loading: state.loading,
    companyDetails: state.companyDetails,
  }));

  const navigate = useNavigate();
  usePreventBackNavigation();

  useEffect(() => {
    initializeUserFromLocalStorage();
  }, [initializeUserFromLocalStorage]);

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

  console.log(companyDetails, "detailss");

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

  const [isOpen, setIsOpen] = useState(false);
  // const [actionableItems, setActionableItems] = useState<any[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutClick = async () => {
    try {
      await handleLogout(); // Use handleLogout from the store
      setIsOpen(false); // Close dropdown after logout
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const handleRemoveItem = (id: string) => {
    if (!selectedProspect) return;

    // Update actionable items by filtering out the removed item
    const updatedActionableItems = selectedProspect?.actionable_items?.filter(
      (item: any) => item.id !== id
    );

    // Update the state with the new list of actionable items
    setSelectedProspect({
      ...selectedProspect,
      actionable_items: updatedActionableItems,
    });
    toast.success("Item removed successfully!");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const hasActionableItems = selectedProspect?.actionable_items?.length > 0;

  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (time: any) => {
    return new Date(time).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
<div className="flex flex-col min-h-screen bg-gray-100">
  <ToastContainer />

  {/* Header */}
  <div className="flex justify-between items-center p-4 bg-gray-100 fixed w-full z-10 top-0">
    <Icon icon={logo} styleClass="hidden lg:block" />
    <Icon icon={hamburgerIcon} styleClass="lg:hidden" />
    <Icon icon={commanderMobileIcon} styleClass="lg:hidden" />
    <div className="flex items-center">
      {user ? (
        <>
          <img
            src={user.photo_url}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="hidden md:block mr-2">
            {user.first_name} {user.last_name}
          </p>
        </>
      ) : (
        <p className="mr-2">Guest</p>
      )}
      <Icon
        icon={arrowDownIcon}
        action={toggleDropdown}
        styleClass="cursor-pointer"
      />
      {isOpen && (
        <div className="absolute right-0 mt-16 bg-white border rounded shadow-lg">
          <button
            onClick={handleLogoutClick}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            disabled={loading}
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      )}
    </div>
  </div>

  <div className="flex flex-1 pt-16">
    {/* Sidebar */}
    <div className="w-64 bg-white rounded-lg p-2 hidden lg:flex flex-col gap-2 mt-2 ml-2 h-screen fixed top-16">
      <div className="flex mt-4">
        <img
          src={user?.company?.logo_url}
          alt="company_logo"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{user?.company?.name}</span>
        <span className="ml-auto mr-4 bg-purple-200 text-purple-900 p-1 rounded-lg">
          Trial
        </span>
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
        <div className="flex items-center gap-2 py-2 px-4 mt-48 rounded-md hover:bg-gray-200 cursor-pointer">
          <Icon icon={settingIcon} />
          <p>Settings</p>
          <Icon icon={forwardIcon} styleClass="ml-16" />
        </div>
        <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
          <Icon icon={backIcon} />
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-1 flex-col lg:ml-64 pt-4">
      <div className="flex flex-row gap-4 lg:gap-2">
        {/* Search Section */}
        <div className="bg-white p-2 shadow flex flex-col gap-2 mb-4 rounded-lg w-full lg:w-64 lg:fixed lg:top-16 lg:left-64 lg:ml-2" style={{marginLeft:"20px", marginTop:"10px"}}>
          <div className="flex gap-1 ">
            <div className="flex items-center  border border-gray-400 rounded-lg w-full">
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
              </button>
            </div>
          </div>
        </div>

        {/* Prospect List Section */}
        <div className="flex flex-col bg-white p-2 shadow rounded-lg flex-1 lg:fixed lg:top-32 lg:left-64 lg:ml-2 lg:mt-0 lg:w-64 lg:h-[calc(100vh-8rem)] overflow-y-auto" style={{marginLeft:"20px",marginTop:"10px" }}>
          {/* Header Section */}
          <div className="flex justify-between items-center gap-8 mb-2 ml-2 px-2 py-1 rounded-lg">
            <span className="text-sm md:text-base font-semibold">PROSPECTS</span>
            <span className="text-sm md:text-base font-semibold">STATUS</span>
          </div>

          {/* Prospect List */}
          <div className="flex-1 overflow-y-auto">
            {companyDetails?.company_prospects?.length ? (
              companyDetails.company_prospects.map((prospect: any) => (
                <div
                  key={prospect.id}
                  className="flex items-center justify-between gap-4 mb-2 border-b border-gray-300 pb-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
                  onClick={() => onViewProspectDetails(prospect.id)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={prospect.basic_company.photo_url}
                      alt={prospect.basic_company.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-none">
                    <p className="text-gray-600">{prospect.prospect_status}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">No prospects found</p>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-0 mt-4 lg:ml-72 lg:mt-0">
          <div className="flex flex-wrap gap-4">
            <ChartCard
              title="Total Prospects"
              icon={barIcon}
              dots={dots}
              data={companyDetails?.graph_data?.total_prospects?.data}
              total={companyDetails?.graph_data?.total_prospects?.total}
              percentageChange={
                companyDetails?.graph_data?.total_prospects?.percentage_change
              }
            />

            <ChartCard
              title="Customers"
              icon={barIcon}
              dots={dots2}
              data={companyDetails?.graph_data?.customer_prospects?.data}
              total={companyDetails?.graph_data?.customer_prospects?.total}
              percentageChange={
                companyDetails?.graph_data?.customer_prospects
                  ?.percentage_change
              }
            />

            <ChartCard
              title="Engaged"
              dots={dots3}
              icon={barIcon}
              data={companyDetails?.graph_data?.engaged_prospects?.data}
              total={companyDetails?.graph_data?.engaged_prospects?.total}
              percentageChange={
                companyDetails?.graph_data.engaged_prospects
                  ?.percentage_change
              }
            />

            <ChartCard
              title="Meetings booked"
              dots={dots4}
              icon={barIcon}
              data={companyDetails?.graph_data?.meetings_booked?.data}
              total={companyDetails?.graph_data?.meetings_booked.total}
              percentageChange={
                companyDetails?.graph_data?.meetings_booked?.percentage_change
              }
            />
          </div>
          <div className="bg-white rounded-lg mr-4">
            {selectedProspect ? (
              <div className="ml-4 mt-4 p-4">
                <div className="flex items-center">
                  {selectedProspect.basic_company?.photo_url && (
                    <img
                      src={selectedProspect.basic_company.photo_url}
                      alt={selectedProspect.basic_company.name}
                      className="w-24 h-auto object-contain"
                    />
                  )}
                  <p className="ml-auto mr-4 bg-[#26BD6C33] text-[#26BD6C] p-1 rounded-lg">
                    {selectedProspect.prospect_status}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                  <div className="flex border border-[#D5DDE5] rounded-lg p-4 gap-4 bg-[#F8F9FA]">
                    <div className="flex">
                      <p>
                        <img
                          src={user?.photo_url}
                          alt="owner_image"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      </p>
                      <div>
                        <h2 className="text-lg font-semibold">
                          {selectedProspect.basic_company?.name}
                        </h2>
                        <p className="text-sm">
                          VP of Operations | {selectedProspect.basic_company?.name}
                        </p>
                      </div>
                      <Icon icon={linkedInIcon} />
                    </div>
                  </div>
                  <div className="flex flex-col border border-[#D5DDE5] bg-[#F8F9FA] rounded-lg p-4">
                    {/* Render Meetings */}
                    {selectedProspect.company_meetings?.length ? (
                      selectedProspect.company_meetings.map((meeting: any) => (
                        <div key={meeting.id} className="mb-4">
                          <h3 className="font-semibold">{meeting.name}</h3>
                          <p>{meeting.meeting_notes}</p>
                          <p>
                            {new Date(meeting.start_time).toDateString() ===
                            new Date(meeting.end_time).toDateString() ? (
                              <>
                                {formatDate(meeting.start_time)} <br />
                                {formatTime(meeting.start_time)} - {formatTime(meeting.end_time)}
                              </>
                            ) : (
                              <>
                                {formatDate(meeting.start_time)} {formatTime(meeting.start_time)} <br />
                                - {formatDate(meeting.end_time)} {formatTime(meeting.end_time)}
                              </>
                            )}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p>No meetings available</p>
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-2xl mt-4">
                    Actionable Intelligence
                  </h2>
                </div>
                <div className="flex flex-col border border-[#D5DDE5] rounded-lg mt-4 p-4 gap-4">
                  {/* Render Actionable Items */}
                  {hasActionableItems ? (
                    selectedProspect?.actionable_items?.map((item: any) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <Icon styleClass="intelligence" icon={actionIcon} />
                        <h2 className="flex-1">{item.question_text}</h2>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Icon icon={checkboxRightIcon} />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Icon icon={checkboxIcon} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No actionable items available</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="ml-4 mt-4"></div>
            )}
          </div>
          {hasActionableItems && (
            <div
              className="flex bg-white mr-4 mb-4 rounded-lg mt-4 p-4 gap-4 cursor-pointer"
              onClick={toggleText}
            >
              <img
                src={user?.photo_url}
                alt="owner_photo"
                className="w-8 h-8 rounded-full mr-2"
              />
              <p className="hidden md:block mr-2">
                {user?.first_name} {user?.last_name}
              </p>
              {isExpanded ? (
                <p className="whitespace-pre-line mt-16">
                  Hi Dough, I oversee the retail business here at vitamin water. I wanted to reach out, I'd appreciate any direction regarding Beverages stakeholders at Target. Please let me know if I can send you some samples.
                  <br />
                  Best,
                  <br />
                  Lauren Kaszuba
                  <br />
                  National Accountant | Vitamin Water
                </p>
              ) : (
                <p>
                  Hi Dough, I oversee the retail business here at vitamin water...
                </p>
              )}
              <p>March 16</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Dashboard;


