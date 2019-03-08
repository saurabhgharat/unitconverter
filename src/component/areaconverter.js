import React, { Component } from "react";
import convert from "convert-units";
import Select from "react-select-v1";
import "react-select-v1/dist/react-select.css";
class AreaConverter extends Component {
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
    let area = convert(e.target.value)
      .from(this.state.selectedOption1.value)
      .to(this.state.selectedOption2.value);

    this.setState({
      data: area
    });
  };

  render() {
    const { selectedOption1, selectedOption2 } = this.state;
    return (
      <div className="container center">
        <p className="title">Area</p>
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
              { value: "ac", label: "Acre" },
              { value: "mm2", label: "mm²" },
              { value: "cm2", label: "cm²" },
              { value: "m2", label: "m²" },
              { value: "km2", label: "km²" },
              { value: "in2", label: "in²" },
              { value: "yd2", label: "yard²" },
              { value: "mi2", label: "mile²" },
              { value: "ft2", label: "ft²" }
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
              { value: "ac", label: "Acre" },
              { value: "mm2", label: "mm²" },
              { value: "cm2", label: "cm²" },
              { value: "m2", label: "m²" },
              { value: "km2", label: "km²" },
              { value: "in2", label: "in²" },
              { value: "yd2", label: "yard²" },
              { value: "mi2", label: "mile²" },
              { value: "ft2", label: "ft²" }
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

export default AreaConverter;
