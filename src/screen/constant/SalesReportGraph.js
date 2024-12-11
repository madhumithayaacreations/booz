import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { graphStyle } from "../bar/club/SalesStyles";

export default function SalesReportGraph({ data }) {
  console.log("Received data in SalesReportGraph:", data);
  return (
    <div
      style={{
        ...graphStyle.graphStyle,
      }}
    >
      <div
        style={{
          ...graphStyle.SalesReportStyle,
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            ...graphStyle.yScale,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            ...graphStyle.axisBottom,
          }}
          axisLeft={{
            ...graphStyle.axisLeft,
          }}
          enablePoints={true}
          pointSize={10}
          pointColor={{ from: "color", modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          enableArea={true}
          useMesh={true}
          curve="catmullRom"
          colors={["#1b66ef"]}
          defs={[
            linearGradientDef("gradientA", [
              { offset: 0, color: "#1b66ef", opacity: 0.5 },
              { offset: 90, color: "#1b66ef", opacity: 0.1 },
            ]),
          ]}
          fill={[{ match: "*", id: "gradientA" }]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 40,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.85,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          gridXValues={null}
          gridYValues={null}
        />
      </div>
    </div>
  );
}
