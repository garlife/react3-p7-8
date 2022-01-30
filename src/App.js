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
    // fetch('https://jsonplaceholder.typicode.com/posts')
    getData()
      //.then((response) => response.json())
      .then((list) => {
        console.log(list);
        this.setState({ list });
      });
  }

  render() {
    return (
      <div>
       <ListView list={this.state.list}/>
      </div>
    );
  }
}
