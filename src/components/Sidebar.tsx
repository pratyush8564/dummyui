import { useState } from 'react';
import { analyticsIcon, dashboardIcon, globeIcon, heatmapIcon, inteliigenceIcon } from "./icon";
import Icon from "./icons";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`bg-white p-4 flex flex-col h-screen border-r border-gray-200 transition-width duration-300 ease-in-out ${open ? 'w-16' : 'w-64'} rounded-lg`}>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/path/to/email-logo.png" alt="Email" className="h-5" />
                        {!open && <span className="text-gray-900">yopmail.com</span>}
                    </div>
                    {!open && <button className="text-sm py-1 px-2bg-purple-100 text-purple-700 rounded">
                        Trial
                    </button>}
                </div>
            </div>
            <nav className="flex flex-col space-y-1 flex-grow">
                <button className="flex items-center py-2 px-4 text-gray-900 hover:bg-gray-100 rounded">
                    <Icon icon={dashboardIcon} />
                    {!open && <span className="ml-2">Home</span>}
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                    <Icon icon={heatmapIcon} />
                    {!open && <span className="ml-2">Heatmap</span>}
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                    <Icon icon={inteliigenceIcon} />
                    {!open && <span className="ml-2">Actionable </span>}
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                    <Icon icon={globeIcon} />
                    {!open && <span className="ml-2">Command Center</span>}
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                    <Icon icon={analyticsIcon} />
                    {!open && <span className="ml-2">Analytics</span>}
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded justify-between">
                    {!open && <span>Contact Us</span>}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded justify-between">
                    {!open && <span>CRO Admin</span>}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                    <Icon icon={analyticsIcon} />
                    {!open && <span className="ml-2">Settings</span>}
                </button>
            </nav>
            <div className="flex justify-center py-2">
                <button onClick={() => setOpen(!open)} className="text-gray-700 hover:text-gray-900">
                    <svg className={`w-6 h-6 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m7-7-7 7 7 7" />
                    </svg>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
