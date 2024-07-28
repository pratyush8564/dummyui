const DashboardCards = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-4 bg-gray-100 rounded">
                <div className="text-gray-600">Total prospects</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="text-green-600">0%</div>
            </div>
            <div className="p-4 bg-gray-100 rounded">
                <div className="text-gray-600">Engaged</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="text-green-600">0%</div>
            </div>
            <div className="p-4 bg-gray-100 rounded">
                <div className="text-gray-600">Customers</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="text-green-600">0%</div>
            </div>
            <div className="p-4 bg-gray-100 rounded">
                <div className="text-gray-600">Meetings Booked</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="text-green-600">0%</div>
            </div>
        </div>
    )
}

export default DashboardCards