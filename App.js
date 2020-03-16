import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { styles } from './stylesheet';
import Menu from './components/menu';
import Buttons from './components/button';
import Timer from './components/timer';
import Label from './components/label';
import Info from './components/info';
import Picture from './components/picture';
import vibrate from './vibrate';

function leftPadding(n) {
  if (parseInt(n) < 10) {
    return "0" + n.toString();
  } else {
    return n.toString();
  }
}

function getTime(val) {
  return leftPadding(val) + ":00";
}

class App extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        currentTime: "25:00",
        workTime: "25:00",
        breakTime: "05:00",
        working: true,
        timer: null,
        paused: false,
        playing: false,
      }
    this.setWorkTimer = this.setWorkTimer.bind(this);
    this.setBreakTimer = this.setBreakTimer.bind(this);
    this.playButton = this.playButton.bind(this);
    this.pauseButton = this.pauseButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.countdown = this.countdown.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  setWorkTimer(val) {
    let newTime = getTime(val);
    this.setState({
      workTime: newTime,
      paused:true,
    });
    if (!this.state.timer) {
      this.setState({
        currentTime: newTime,
      });
    }
  }

  setBreakTimer(val) {
    let newTime = getTime(val);
    this.setState({
      breakTime: newTime,
    });
  }

  playButton() {
    if (this.state.paused === true || this.state.playing === false) {
      this.setState({
        timer: setInterval(this.countdown, 1000),
        paused: false,
        playing: true,
      });
    }
  }

  pauseButton() {
    if (this.state.paused === false && this.state.playing === true) {
      clearInterval(this.state.timer);
      this.setState({
        paused: true,
        timer: null,
        playing: false
      });
      console.log(this.state.paused);
    } else if (this.state.paused === true && this.state.playing === false) {
      this.playButton();
    }
  }

  resetButton() {
    this.pauseButton();
    this.setState({
      currentTime: this.state.workTime,
      playing: false,
      paused: true,
      working: true,
    })
  }

  countdown() {
    if (this.state.currentTime === "00:00" && this.state.playing === true) {
      console.log('finished');
      vibrate();
      this.toggleStatus();
    } else {
      let sec = this.state.currentTime.slice(3);
      let min = this.state.currentTime.slice(0, 2);
      if (sec === "00") {
        let newMin = leftPadding(parseInt(min) - 1);
        let newTime = newMin + ":59";
        this.setState({
          currentTime: newTime,
        });
      } else {
        let newSec = leftPadding((parseInt(sec) - 1));
        let newTime = min + ":" + newSec;
        this.setState({
          currentTime: newTime,
        })
      }
    }
  }

  toggleStatus() {
    if (this.state.working) {
      this.setState({
        working: false,
        currentTime: this.state.breakTime,
      })
    } else {
      this.setState({
        working: true,
        backgroundColor:"red",
        currentTime: this.state.workTime,
      })
    }
  }

  render() {
    return (
      <View style={[styles.container,this.state.working === true ?{backgroundColor:'rgba(207,68,66,1)'}:{backgroundColor:'rgba(70,182,80,1)'}]}>
        <StatusBar hidden></StatusBar>
        <Timer currentTime={this.state.currentTime} />
        <Label working={this.state.working} paused={this.state.paused} playing={this.state.playing} />
        <View style={{ flexDirection: 'row-reverse' }}>
          <Buttons
            title="شروع"
            onPress={this.playButton}
          />
          <Buttons
            title="توقف"
            onPress={this.pauseButton}
          />
          <Buttons
            title="دوباره"
            onPress={this.resetButton}
          />
        </View>
        <View style={styles.menuContainer}>
          <Text style={{ fontFamily: "Vazir-Medium-FD", fontSize: 16, color: "white" }}>مدت زمان کار کردنت رو انتخاب کن</Text>
          <Menu
            selected={Number(this.state.workTime.slice(0, 2)).toString()}
            onValueChange={this.setWorkTimer}
          />
        </View>
        <View style={styles.menuContainer}>
          <Text style={{ fontFamily: "Vazir-Medium-FD", fontSize: 16, color: "white" }}>مدت زمان استراحتتو انتخاب کن</Text>
          <Menu
            selected={Number(this.state.breakTime.slice(0, 2)).toString()}
            onValueChange={this.setBreakTimer}
          />
        </View>
        <Info />
        <Picture />
      </View>
    );
  }
}

export default App;
