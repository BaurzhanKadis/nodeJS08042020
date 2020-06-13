import React from 'react';
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
import './Summary.css';
const data = [
  { name: "ПН", uv: 66.5, pv: 64.5, amt: 2400 },
  { name: "ВТ", uv: 67, pv: 64, amt: 2400 },
  { name: "СР", uv: 66.5, pv: 64.2 },
  { name: "ЧТ", uv: 66, pv: 63.5 },
  { name: "ПТ", uv: 65, pv: 64 },
  { name: "СБ", uv: 65.5, pv: 64.5 },
  { name: "ВС", uv: 66.5, pv: 64 },
];
const Summary = () => {
  return (
    <div className="Summary-container">
      <div className="Statistics_params">
        <span className="Statistics_params-item">Настроить</span>
        <span className="Statistics_params-item">За неделю</span>
      </div>
      {/* прописал внизу класс "Statistics_params" специально для бета версии */}
      <div className="Statistics_params">Поздравляем! За эту неделю Вы побили два предыдущих своих рекорда. Так держать!</div>
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
      <div className="Statistics-container" style={{ marginTop: "10px" }}>
        <h5>Диаграмма изменения массы тела</h5>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            className="Statistics_LineChart"
            width={400}
            height={200}
            data={data}
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
      <ul className="Summary_records">
        <li>Мои рекорды</li>
        <li>Жанглирование мячом - 351 раз <span>(new)</span></li>
        <li>Бег 100 метров - 13,5 сек <span>(new)</span></li>
        <li>Бег 40 метров 5,5 сек</li>
        <li>Подтягивание 11 раз</li>
        <li>Бег (МАХ) - 14 км</li>
      </ul>
    </div>
  );
};

export default Summary;