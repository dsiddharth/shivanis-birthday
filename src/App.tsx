import React from 'react';
import './App.css';
import shivani3 from "./photos/3.jpg";
import shivani4 from "./photos/4.jpg";
import shivani5 from "./photos/5.jpg";
import shivani11 from "./photos/11.jpg";
import shivani13 from "./photos/13.jpg";
import shivani14 from "./photos/14.jpg";
import shivani15 from "./photos/15.jpg";
import shivani16 from "./photos/16.jpg";
import shivani17 from "./photos/17.jpg";
import shivani18 from "./photos/18.jpg";
import shivani19 from "./photos/19.jpg";
import shivani20 from "./photos/20.jpg";

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

    return {days, hours, minutes, seconds};
  }

  isToday(someDate : Date) {
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth()
  }    

  render() {
    var timeLeft = this.getDateDiff();
    var text;
    if (this.isToday(this.birthday)) {
      text = <p>"It's TODAY!! Happy Birthday Shivani!!"</p>
    } else {
      text = (
      <div>
          <p> {timeLeft.days} days</p>
          <p> {timeLeft.hours} hours</p>
          <p> {timeLeft.minutes} minutes</p>
          <p> {timeLeft.seconds} seconds</p>
        </div>
      )
    }


    return (
      <div className="App">
        <header className="App-header">
          <p>
            Countdown to Shivani's Birthday
          </p>
          {text}
        </header>
        <PhotoViewer />
      </div>
    );
  }
}

interface IPhotoState {
  index : number;
}

class PhotoViewer extends React.Component<{}, IPhotoState>  {

  interval : any;
  photos = [shivani3,shivani4,shivani5,shivani11,shivani13,shivani14,shivani15,shivani16,shivani17,shivani18,shivani19,shivani20];

  constructor(props : any) {
    super(props);
    this.state = {
      index: 0
    };
  }


  componentDidMount() {
    this.interval = setInterval(() => this.setState({ index: (this.state.index + 1) % this.photos.length }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="PhotoViewer">
       <img src={this.photos[this.state.index]} />
      </div>
    )
  }
}

export default App;
