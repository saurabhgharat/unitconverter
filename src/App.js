import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LengthConverter from "./component/lengthconverter";
import AreaConverter from "./component/areaconverter";
import WeightConverter from "./component/weightconverter";
import VolumeConverter from "./component/volumeconverter";
import TemperatureConverter from "./component/temperatureconverter";
import TimeConverter from "./component/timeconverter";
import SpeedConverter from "./component/speedconverter";
import PressureConverter from "./component/pressureconverter";
import PowerConverter from "./component/powerconverter";
import AngleConverter from "./component/angleconverter";
import DataConverter from "./component/dataconverter";
import EnergyConverter from "./component/energyconverter";
import FrequencyConverter from "./component/frequencyconverter";

import Navigationbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={LengthConverter} />
            <Route path="/area" component={AreaConverter} />
            <Route path="/weight" component={WeightConverter} />
            <Route path="/volume" component={VolumeConverter} />
            <Route path="/temp" component={TemperatureConverter} />
            <Route path="/time" component={TimeConverter} />
            <Route path="/speed" component={SpeedConverter} />
            <Route path="/pressure" component={PressureConverter} />
            <Route path="/power" component={PowerConverter} />
            <Route path="/angle" component={AngleConverter} />
            <Route path="/data" component={DataConverter} />
            <Route path="/energy" component={EnergyConverter} />
            <Route path="/frequency" component={FrequencyConverter} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
