import React, { Component } from 'react';
import ParamDiary from '../../components/ParamDiary';
import Summary from '../../components/Summary';
import Training from '../../components/Training';
import Statistics from '../../components/Statistics';
import DiaryComponent from '../../components/DiaryComponent';

import './Diary.css';

class Diary extends Component {
  state = {
    diaryItems: [
      { name: "Сводка", active: false, itemEl: "summary"},
      { name: "Тренировки", active: false, itemEl: "training"},
      { name: "Статистика", active: false, itemEl: "statistics"},
      { name: "Календарь", active: false, itemEl: "diary"},
    ],
    filter: "summary",
    date: new Date(),
  }
  
  onChange = date => this.setState({ date })

  onFilterChange = (filter) => {
    this.setState({ filter });
  }
  filter(filter) {
    switch(filter) {
      case 'summary': 
        return <Summary />;
      case 'training':
        return <Training />;
      case 'statistics':
        return <Statistics />;
      case 'diary':
        return <DiaryComponent onChange={this.onChange} value={this.state.date}/>;
      default:
        return <Summary />;      
    }
   };
  render() {
    const visibleItems = this.filter(this.state.filter);
    return (
      <div className="Diary-container">
        <ParamDiary 
          diaryItems={this.state.diaryItems}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}/>
        {visibleItems}
      </div>
    );
  }
}

export default Diary;