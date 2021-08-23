import React from 'react';
import './App.css';

interface IProps {}
interface IState {
  time: number
}

class App extends React.Component<IProps, IState> {
  interval : any;
  birthday = this.getNextBirthday();

  constructor(props : IProps) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  getNextBirthday() {
    const curYear = new Date(Date.now()).getFullYear();
    var birthday = new Date(curYear, 7, 24);

    if (birthday.getTime() - Date.now() < 0) {
       birthday = new Date(curYear + 1, 7, 24)
    }
    return birthday;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  getDateDiff() {    
    var delta = Math.abs(this.birthday.getTime() - this.state.time) / 1000;
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

  isToday(someDate : Date) {
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth()
  }    

  render() {
    var text = this.getDateDiff();
    if (this.isToday(this.birthday)) {
      text = "It's TODAY!! Happy Birthday Shivani!!"
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Countdown to Shivani's Birthday
          </p>
          <p>
            {text}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
