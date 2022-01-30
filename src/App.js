import React from 'react';
import './style.css';
import getData from './getData';
import ListView from "./ListView"

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    //через отдельный компонент получаем данные
    getData()
    //преобразуем полученный json в list и устанавливаем его в стэйт
      .then((list) => {
        console.log(list.slice(0, 5));
        this.setState({ list });
      });
  }

  render() {
    return (
      <div>
        {/* Перебираем и отображаем сам список в потомке. Лист передаем через стэйт */}
       <ListView list={this.state.list}/>
      </div>
    );
  }
}
