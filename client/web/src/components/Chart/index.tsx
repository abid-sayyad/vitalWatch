import LineChart from "react-linechart";
import { Line } from "react-chartjs-2";

const ChartEmbed: React.FC<{
  label: string;
  data: Array<any>;
  unit: string;
}> = ({ label, data, unit }) => {
  const array = [
    parseInt(data[0]),
    parseInt(data[1]),
    parseInt(data[2]),
    parseInt(data[3]),
    parseInt(data[4]),
    parseInt(data[5]),
    parseInt(data[6]),
    parseInt(data[7]),
    parseInt(data[8]),
    parseInt(data[9]),
  ];
  const options = {
    title: {
      display: false,
      text: "Heckin Chart!",
      fontSize: 35,
    },

    legend: {
      display: false,
      labels: {
        font: {
          color: "rgb(255,255,255)",
        },
      },
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      y: {
        beginAtZero: false,
      },
      xAxis: {
        display: false,
      },
    },
    responsive: true,
    elements: {
      point: {
        radius: 1,
        hoverRadius: 5,
        hitRadius: 6,
      },
    },
    tooltips: {
      callbacks: {
        //This removes the tooltip title
        title: function () {},
      },
      //this removes legend color
      displayColors: false,
      yPadding: 10,
      xPadding: 10,
      position: "nearest",
      caretSize: 10,
      backgroundColor: "rgb(233,233,237,.9)",
      bodyFontSize: 15,
    },
  };
  const displayData = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label,
        data: array,
        fill: true,
        legend: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        bodyFontColor: "#ffffff",
        Option: options,
        height: 500,
      },

      // borderColor: "#742774",
    ],
  };

  return (
    <>
      <Line data={displayData} height={340} width={600} />
    </>
  );
};

export default ChartEmbed;
