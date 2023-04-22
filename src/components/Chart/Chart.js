import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    // convert data-points from an object to an array
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // convert array to list of elements using spread operator
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMaximum} key={dataPoint.label} label={dataPoint.label}/>)}
        </div>
    )
};

export default Chart;