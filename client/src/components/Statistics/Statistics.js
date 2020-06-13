import React from "react";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";

const data = [
  { name: "ПН", uv: 66.5, pv: 64.5, amt: 2400 },
  { name: "ВТ", uv: 67, pv: 64, amt: 2400 },
  { name: "СР", uv: 66.5, pv: 64.2 },
  { name: "ЧТ", uv: 66, pv: 63.5 },
  { name: "ПТ", uv: 65, pv: 64 },
  { name: "СБ", uv: 65.5, pv: 64.5 },
  { name: "ВС", uv: 66.5, pv: 64 },
];
const Statistics = () => {
  return (
    <React.Fragment>
      <div className="Statistics_params">
        <span className="Statistics_params-item">Настроить</span>
        <span className="Statistics_params-item">За неделю</span>
      </div>
      <div className="Statistics-container">
        <h5>Диаграмма изменения массы тела</h5>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            className="Statistics_LineChart"
            width={400}
            height={200}
            data={data}
            // margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis
              type="number"
              domain={[60, 68]}
              minTickGap={1}
              tickMargin={1}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="Настоящая неделя"
              type="monotone"
              dataKey="pv"
              stroke="#754290"
            />
            <Line
              name="Прошлая неделя"
              type="monotone"
              dataKey="uv"
              stroke="#E31E24"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="Statistics-container" style={{ marginTop: "5px" }}>
        <h5>Диаграмма изменения массы тела</h5>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            className="Statistics_LineChart"
            width={400}
            height={200}
            data={data}
            // margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis
              type="number"
              domain={[60, 68]}
              minTickGap={1}
              tickMargin={1}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              name="Настоящая неделя"
              type="monotone"
              dataKey="pv"
              stroke="#754290"
            />
            <Line
              name="Прошлая неделя"
              type="monotone"
              dataKey="uv"
              stroke="#E31E24"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="Statistics-tablo">
        <div className="Statistics-tablo_item">
          <span>Тренировок</span>
          <span>4</span>
        </div>
        <div className="Statistics-tablo_item">
          <span>Часов</span>
          <span>10</span>
        </div>
        <div className="Statistics-tablo_item">
          <span>Пробег</span>
          <span>21 км</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Statistics;
