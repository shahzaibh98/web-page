import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapModule from "highcharts/modules/map"; // Import Highcharts Map module
import { useEffect, useState } from "react";

import { MapPin } from "lucide-react";
import image1 from "../assets/image4.png";
if (typeof mapModule === "function") {
  mapModule(Highcharts);
}

const Section7 = () => {
  const [mapData, setMapData] = useState(null);
  const [populationData, setPopulationData] = useState<
    { code: string; value: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the map topology data
        const topologyResponse = await fetch(
          "https://code.highcharts.com/mapdata/countries/us/us-all.topo.json"
        );
        const topology = await topologyResponse.json();
        setMapData(topology);

        // Fetch the population density data
        const dataResponse = await fetch(
          "https://www.highcharts.com/samples/data/us-population-density.json"
        );
        let fetchedData: { code: string; value: number }[] =
          await dataResponse.json();

        const mappedData = fetchedData.map((p) => ({
          code: `us-${p.code}`,
          value: p.value,
        }));

        setPopulationData(mappedData);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchData();
  }, []);

  if (!mapData || populationData.length === 0) {
    return <p>Loading map...</p>;
  }

  const options = {
    chart: {
      map: mapData,
    },
    title: {
      text: "",
    },
    exporting: {
      sourceWidth: 600,
      sourceHeight: 500,
    },
    legend: {
      enabled: false,
    },
    mapNavigation: {
      enabled: false,
    },
    colorAxis: {
      min: 0,
      max: 100,
      stops: [
        [0, "#49C7AB"],
        [1, "#49C7AB"],
      ],
    },
    tooltip: false,
    series: [
      {
        accessibility: {
          point: {
            valueDescriptionFormat:
              "{xDescription}, {point.value} people per square kilometer.",
          },
        },
        animation: {
          duration: 1000,
        },
        data: populationData.map((item) => [item.code, item.value]),
        joinBy: "hc-key",
        dataLabels: {
          enabled: true,
          color: "grey",
          formatter: function (this: Highcharts.Point) {
            const dataItem = populationData.find(
              (item) => item.value === this.value
            );
            return dataItem
              ? dataItem.code.replace(/^us-/, "").toUpperCase()
              : "";
          },
          style: {
            fontSize: "13px",
            fontWeight: "normal",
            textOutline: "none",
          },
          allowOverlap: false,
          align: "center",
          verticalAlign: "middle",
          inside: true,
        },
        states: {
          hover: {
            color: "#FA846D",
            borderColor: "transparent", // Removes the border color
            borderWidth: 0, // Removes the border width
          },
        },
      },
    ],
  };
  return (
    <section id="section7" className="px-14 md:px-10 lg:px-32 py-8">
      <div className="container mx-auto text-left">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16">
          <div className="w-full lg:max-w-[420px] md:max-w-[520px] ml-5">
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[415px]">
              <img
                src={image1}
                alt="image"
                className="rounded-md w-full h-full object-cover"
              />

              <div className="absolute inset-4 border-[2px] border-white rounded-xs pointer-events-none"></div>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-xl md:text-2xl lg:text-[28px] font-cabinet">
                Toronto
              </p>
              <div className="flex items-center">
                <MapPin color="#008080" size={15} />
                <p className="underline text-sm md:text-[14px] text-[#008080] ml-2 font-cabinet">
                  Ottawa St. and Homer Waston Blvd
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[500px] md:max-w-[650px] lg:max-w-none">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              constructorType="mapChart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
