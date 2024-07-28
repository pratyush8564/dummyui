
import DataTable from 'react-data-table-component';
import Icon from './icons';
import { refershIcon } from './icon';

const DatatableComponent = () => {
    const data:any = [];
    const columns = [
        {
            name: 'Prospects',
            selector: (row:any )=> row.name,
        },
        {
            name: 'Status',
            selector: (row:any )=> row.status,
        },
        {
            name: 'Filter',
            button: true,
            cell: () => <div className="text-right">FILTER <span className="ml-1">&#9662;</span></div>, // down arrow symbol
        },
    ];

    return (
        <div className="flex flex-col bg-[rgb(248 249 250)] p-4 rounded-lg ">
            <div className="flex items-center mb-4">
                <div className="flex items-center  rounded-lg p-2 flex-grow bg-white">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white ml-2"
                    />
                </div>
                <button className="ml-2 p-2 bg-white text-gray-400 rounded-lg">
                    <Icon icon={refershIcon}/>
                </button>
            </div>
            <DataTable
                columns={columns}
                data={data}
                noDataComponent="There are no records to display"
                className="react-data-table"
            />
        </div>
    );
};

export default DatatableComponent;
