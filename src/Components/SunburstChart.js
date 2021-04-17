import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsSunburst from "highcharts/modules/sunburst";
import linechartData from "../assets/sunburstdata2.json"

HighchartsSunburst(Highcharts);
const data = linechartData  

export default class SunburstChart extends Component {


  render() {

    let options = {
      title: {text: "Topics per Group"},
      series: [
        {
          type: "sunburst",
          data: data,
          borderColor : "#ffffff",
          allowDrillToNode: false,
          cursor: "pointer",
          dataLabels: {
            borderWidth: 0,
            filter: { property: "innerArcLength", operator: ">", value: 16 },
            style: { textShadow: false, textOutline: null, color: "contrast" }
          },
          levels: [
            {
              level: 1,
              levelIsConstant: false,
              dataLabels: {
                filter: { property: "outerArcLength", operator: ">", value: 64 }
              },
              colorByPoint: true
            },
            { level: 2, colorVariation: { key: "brightness", to: -0.3 } }
          ]
        }
      ]
    };



    return (
        <div id="chartNode" className = "w-full h-2/3 bg-white rounded-lg shadow-lg p-2 transform hover:scale-105 transition ease-in-out duration-500">

          <HighchartsReact
            constructorType={"chart"}
            highcharts={Highcharts}
            options={options}
            allowChartUpdate={false}
          />

        </div>
      
    );
  }
}

