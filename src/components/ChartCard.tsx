
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartCard = ({ title, data, total, percentageChange, icon, dots }: any) => {
    const chartData = data?.map((point: any) => [point.x]);
    const options = {
        chart: {
            type: 'column',
            height: 80,
            width: 100,
            color:"black"
        },
        title: {
            text: ''
        },
        xAxis: {
            visible: true,
            labels: {
                enabled: false 
            },
            tickWidth: 0,

        },
        yAxis: {
            visible: false
        },
        series: [
            {
                data: chartData,
                pointWidth: 0.1,
                color: 'gray',
            }
        ],
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    };
 
    return (
        <div className="flex flex-col bg-white rounded-lg gap-4 p-4 flex-1 min-w-[170px] max-w-[calc(25%-16px)]">
            <div className="flex gap-2 items-center">
             {dots}   <p className="font-medium">{title}</p>
            </div>
            <div className="flex gap-2 mt-2 items-center">
                <p className="text-2xl font-bold">{total}</p>
                <p className="text-2xl font-bold">{icon}</p>
                <span className="text-[#08736D]">{percentageChange}%</span>
            </div>
            <div className="mt-2 flex justify-center items-center overflow-hidden w-full">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
};

export default ChartCard