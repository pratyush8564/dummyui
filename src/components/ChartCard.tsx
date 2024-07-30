
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartCard = ({ title, data, total, percentageChange, icon, dots }: any) => {
    const chartData = data?.map((point: any) => [point.x, point.y]);


    const options = {
        chart: {
            type: 'line',
            height: 80,
            width: 100,
        },
        title: {
            text: ''
        },
        xAxis: {

            labels: {
                enabled: false
            },
            tickWidth: 0,
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false
            },
            gridLineWidth: 0,




        },
        series: [
            {
                data: chartData,
                lineWidth: 1,
                color: '#08736D',
                marker: {
                    enabled: false
                }
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