

import { analyticsIcon, dashboardIcon, globeIcon, heatmapIcon, inteliigenceIcon } from "./icon"
import Icon from "./icons"


const Sidebar = () => {
    return (
        <div> <aside className="w-64 bg-gray-100 p-4 flex flex-col">
            <div className="mb-8">
                <div className="flex items-center space-x-2">
                    <img src="/path/to/email-logo.png" alt="Email" className="h-5" />
                    <span>yopmail.com</span>
                    <button className="text-sm py-1 px-2 bg-purple-200 text-purple-700 rounded">
                        Trial
                    </button>
                </div>
            </div>
            <nav className="flex flex-col space-y-2">
                <a href="#" className="flex items-center py-2 px-4 bg-gray-200 text-gray-700 rounded">
                <Icon icon={dashboardIcon} /> Home
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                <Icon icon={heatmapIcon} /> Heatmap
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                <Icon icon={inteliigenceIcon} /> Actionable Intelligence
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                <Icon icon={globeIcon} /> Command Center
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                <Icon icon={analyticsIcon} /> Analytics
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                     Contact Us
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                   CRO Admin
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
                <a href="#" className="flex items-center py-2 px-4 text-gray-700">
                <Icon icon={analyticsIcon} />Settings
                </a>
            </nav>
        </aside></div>
    )
}

export default Sidebar