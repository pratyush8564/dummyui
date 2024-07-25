const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="ml-4 border-r border-gray-400 pr-4 mt-4">
        <div>
          <img src="/src/assets/LogoAdmin.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {/* Home */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <img src="/src/assets/DashboardIcon.png" alt="dashboard-icon" />
            <p>Home</p>
          </div>
          {/* Heatmap */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <img src="/src/assets/heatmap.png" alt="heatmap-icon" />
            <p>Heatmap</p>
          </div>
          {/* Actionable Intelligence */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <img
              src="/src/assets/intelligenceIcon.png"
              alt="intelligence-icon"
            />
            <p>Actionable Intelligence</p>
          </div>
          {/* Command Center */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <img src="/src/assets/world.png" alt="commander-icon" />
            <p>Command Center</p>
          </div>
          {/* Analytics */}
          <div className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-200 cursor-pointer">
            <img src="/src/assets/Analytics.png" alt="analytics-icon" />
            <p>Analytics</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-4 mt-4">
        {/* Your main content goes here */}
        <p className="mt-4 font-bold">WeWork</p>
        <hr className="my-4  border-gray-400 w-full" />
        <div className="flex gap-4">
          <div className="flex flex-col  bg-[#F3F4F6] border border-[#374151] rounded-lg gap-2 p-2">
            <p>8000</p>
            <p>Total Prospects</p>
          </div>
          <div className="flex flex-col  bg-[#F3F4F6] border-[#374151]  rounded-lg gap-2 p-2">
            <p>150</p>
            <p>Customers</p>
          </div>
          <div className="flex flex-col  bg-[#F3F4F6] border-[#374151]  rounded-lg gap-2 p-2">
            <p>93</p>
            <p>Engaged</p>
          </div>
          <div className="flex flex-col  bg-[#F3F4F6] border-[#374151]  rounded-lg gap-2 p-2">
            <p>12</p>
            <p>Meetings booked</p>
          </div>
        </div>
        <hr className="my-4  border-gray-400 w-full" />
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
            <img src="/src/assets/refresh.png" alt="refresh-icon" />
          </div>
        </div>
        <hr className="my-4 border-l border-gray-400 h-4/6 absolute ml-64 top-44" />
        <div className="flex flex-col justify-center items-center ml-64 mt-16">
          <p className="font-bold">`Welcome ${"Name"},`</p>
          <div className="flex flex-col mt-4 gap-2">
            {/* First row */}
            <div className="flex gap-2">
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Type in a company you want 
                <br /> Commander to target
              </div>
              <div className="flex items-center border border-gray-400 rounded-lg p-2 flex-1 text-balance">
                Who are the companies that replied in the last 30 days
              </div>
            </div>

            {/* Second row */}
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
            {/* <img src="/src/assets/search-outline.png" alt="search-icon" className="w-4 h-4" /> */}
            <input
              type="search"
              placeholder="Type here"
              className="outline-none border-none flex-1"
            />
          </div>
          <div className="flex justify-center">
            <button type="button" className="bg-[#08736D] p-2 rounded-xl text-white  mt-4">Get Started</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
