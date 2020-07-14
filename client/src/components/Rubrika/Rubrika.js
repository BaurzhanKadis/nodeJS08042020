import React, { useState } from 'react';

import './Rubrika.css';

const Rubrika = ({ filterTodos, onFilterDone }) => {
  const [ active, setActive ] = useState(false);

  const rubrikaHandler = () => {
    !active ? setActive(true) : setActive(false);
  }
  // const activeUlContainer = "rubrika-container-active";

  const liArr = filterTodos.map((item) => {
    const clazz = item.active ? "activeLiRubrica" : "";
    return <li className={`rubrika-filter ${clazz}`} 
               onClick={()=>onFilterDone(item.id)} 
               key={item.id}>
            {item.title}
          </li>
  }) 
  const liArrFilter = filterTodos.filter((item) => item.active).map((item) => {
    return <li key={item.id} className="filterDone-item">
            {item.title}
          </li>
  })
  return (
    <div 
      className="rubrika-container"
      // className={`rubrika-container  ${active ? activeUlContainer : ""}`}
      >
      <span 
        className="rubrika-link" 
        // className={`rubrika-link ${active ? "rubrika-link-Active" : "" }`} 
        onClick={rubrikaHandler}>
        <i className="fas fa-indent"></i>
        <span>Рубрика</span>  
      </span>
      <ul className="filterDone">
        {liArrFilter}
      </ul>
      <ul className={`rubrika-filters ${active ? "rubrika-filters-Active" : "" }`}>
        {liArr}
        <li onClick={()=>setActive(false)} style={{ background: "var(--mainGreen)" }} className="rubrika-filter">Показать результаты</li>
      </ul>
    </div>
  );
};

export default Rubrika;