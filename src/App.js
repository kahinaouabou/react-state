
import './App.css';

import React from 'react'

export default class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      Person: {
      fullName: 'test',
      bio: 'test',
      imgSrc:'',
      profession :'test'
      },
      show :true,
      date: new Date()
    }
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      
    });
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
    console.log(this.state.date)
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="img"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </div>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        </div>
    );
  }
};


