import React, { useState } from "react";
import "./Card.css";
import { motion,AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.35,
        color: "#000",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: { format: "dd/MM/yy HH:mm" },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          param={props}
          setExpandedFun={() => setExpanded(false)}
          data={data}
        />
      ) : (
        <CompactCard param={props} setExpandedFun={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// compact card
function CompactCard({ param, setExpandedFun }) {
  const Png = param.png;

  return (
    <motion.div
      className="compactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpandedFun}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// expanded card
function ExpandedCard({ param, setExpandedFun, data }) {
  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{display:"flex", justifyContent:"flex-end", cursor:"pointer", color:"white", width:"100%"}}>
        <UilTimes onClick={setExpandedFun} />
      </div>
      <span>{param.title}</span>
      <div className="charContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
