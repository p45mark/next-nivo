import React from "react";
import { ResponsiveLine } from "@nivo/line";

export const LineChart = ({ title, areaBaselineValue, data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "30px 1fr",
        marginBottom: 50,
      }}
    >
      <h5>{title}</h5>
      <div
        style={{
          height: 200,
          width: 700,
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
          enableArea={true}
          areaBaselineValue={areaBaselineValue}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          colors={["#e2e2e2"]}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={["#5390ad"]}
          useMesh={true}
        />
      </div>
    </div>
  );
};
