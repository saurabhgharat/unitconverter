import React, { Component } from "react";
import convert from "convert-units";
import Select from "react-select-v1";
import "react-select-v1/dist/react-select.css";
class VolumeConverter extends Component {
  state = {
    data: "",

    selectedOption1: "",
    selectedOption2: ""
  };

  handleSelect1 = selectedOption1 => {
    this.setState({ selectedOption1 });
    console.log(`Selected: ${selectedOption1.label}`);
  };
  handleSelect2 = selectedOption2 => {
    this.setState({ selectedOption2 });
    console.log(`Selected: ${selectedOption2.label}`);
  };
  handleChange = e => {
    let volume = convert(e.target.value)
      .from(this.state.selectedOption1.value)
      .to(this.state.selectedOption2.value);

    this.setState({
      data: volume
    });
  };

  render() {
    const { selectedOption1, selectedOption2 } = this.state;
    return (
      <div className="container center">
        <p className="title">Volume</p>
        <div className="block">
          <br />
          <label id="sel1">From:</label>
          <br />
          <br />
          <Select
            id="sel1"
            name="form-field-name"
            value={selectedOption1}
            onChange={this.handleSelect1}
            options={[
              { value: "mm3", label: "mm³" },
              { value: "cm3", label: "cm³" },
              { value: "cm2", label: "cm²" },
              { value: "ml", label: "ml" },
              { value: "cl", label: "centilitre" },
              { value: "dl", label: "deciltre" },
              { value: "l", label: "l" },
              { value: "gal", label: "gallon" },
              { value: "kl", label: "kl" },
              { value: "m3", label: "m³" },
              { value: "glas", label: "glas" },
              { value: "km3", label: "km³" },
              { value: "tsp", label: "Teaspoon(tsp)" },
              { value: "tbs", label: "Tablespoon(tbs)" },
              { value: "in3", label: "in³" },
              { value: "fl-oz", label: "fl-oz" },
              { value: "cup", label: "cup" },
              { value: "pnt", label: "pint" },
              { value: "ft3", label: "ft³" },
              { value: "yd3", label: "yd³" }
            ]}
          />
          <br />
          <label id="sel2">To:</label>
          <br />
          <br />
          <Select
            id="sel2"
            name="form-field-name"
            value={selectedOption2}
            onChange={this.handleSelect2}
            options={[
              { value: "mm3", label: "mm³" },
              { value: "cm3", label: "cm³" },
              { value: "cm2", label: "cm²" },
              { value: "ml", label: "ml" },
              { value: "cl", label: "centilitre" },
              { value: "dl", label: "deciltre" },
              { value: "l", label: "l" },
              { value: "gal", label: "gallon" },
              { value: "kl", label: "kl" },
              { value: "m3", label: "m³" },
              { value: "glas", label: "glas" },
              { value: "km3", label: "km³" },
              { value: "tsp", label: "Teaspoon(tsp)" },
              { value: "tbs", label: "Tablespoon(tbs)" },
              { value: "in3", label: "in³" },
              { value: "fl-oz", label: "fl-oz" },
              { value: "cup", label: "cup" },
              { value: "pnt", label: "pint" },
              { value: "ft3", label: "ft³" },
              { value: "yd3", label: "yd³" }
            ]}
          />
          <br />

          <label>Input:</label>
          <br />
          <br />
          <input
            name="convert"
            onChange={this.handleChange}
            placeholder="Enter value here"
          />
          <br />
          <br />
          <div className="answer">
            Answer = {this.state.data} {selectedOption2.label}
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default VolumeConverter;
