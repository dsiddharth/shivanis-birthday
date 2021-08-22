import React, { ReactNode } from 'react';
import './App.css';

interface IProps {}
interface IState {
  time: number
}

class App extends React.Component<IProps, IState> {
  interval : any;

  constructor(props : IProps) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  getDateDiff() {
    var birthday = new Date("08/24/2021");
    
    var delta = Math.abs(birthday.getTime() - this.state.time) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    var seconds = Math.floor(delta % 60);

    var text = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    return text;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Countdown to Shivani's Birthday
          </p>
          <p>
            {this.getDateDiff()}
          </p>
        </header>
      </div>
    );
  }


  
}

export default App;
