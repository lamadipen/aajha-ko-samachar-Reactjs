import React, {Component} from 'react';
import './App.css';
import Home from './components/content/Home';
import {getAllNewsToday} from './client/InvokeApi';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {news:[], post : "" , };
  }

  componentDidMount() {
    getAllNewsToday().then((data) => this.setState({news : data}));
  }

  sometest = (printme) => {
    console.log(printme);
  }

  render() {
    let newsList = this.state.news;
    let newsRender = newsList.map((news,i) => {
       return <Home key={i} newsParam={news}  invokeMe={this.sometest}></Home>;
     });

    return (
      <div className="App">
        {newsRender}
      </div>
    );
  }

}

export default App;



//jest enzyme testing with coverage
//Redux/Saga
//Router Browser react
//Promise
//Observables

