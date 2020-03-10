import React from 'react';
import './App.css';
import dataRate from './data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        rates: {},
      },
      err: null,
    }
  }
  prom = new Promise((res, rej) => {
    Object.keys(dataRate).length ? res(dataRate) : rej('Empty')
  });

  pusk = () => {
    this.prom.then(data => {
      console.log(data)
      this.setState({ data })
    }).catch(err => {
      this.setState({ err })
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.pusk}>Check</button>
        <ul className='list'>
          { !this.state.err ? 
            Object.keys(this.state.data.rates).map((value, index) => <li key={index}>{value} : {this.state.data.rates[value]}</li>)
            :
            <li>{this.state.err}</li>
          }
        </ul>
      </div>
    )
  }
}
export default App;
