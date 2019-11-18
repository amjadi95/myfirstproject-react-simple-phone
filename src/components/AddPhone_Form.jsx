import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        ram: "",
        storage: "",
        battery: "",
        brand: "",
        model: ""
      },
      id: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({
        info: this.props.data,
        id: 0
      });
    }
  }
  onChange(event, index) {
    console.log("event :", event);
    console.log("index :", index);
    let temp = this.state.info;
    //temp.brand = event.target.value;
    this.setState({ info: temp });
  }
  // StorageHandleChange = event => {
  //   this.setState({ storage: event.target.value });
  // };
  // BatteryHandleChange = event => {
  //   this.setState({ battery: event.target.value });
  // };
  // BrandHandleChange = event => {
  //   this.setState({ brand: event.target.value });
  // };
  // ModelHandleChange = event => {
  //   this.setState({ model: event.target.value });
  // };

  render() {
    // let brand = "",
    //   model = "",
    //   ram = "",
    //   storage = "",
    //   battery = "";

    // if (this.props.editing && this.props.data) {
    //   brand = this.props.data.brand;
    //   model = this.props.data.model;
    //   ram = this.props.data.ram;
    //   storage = this.props.data.storage;
    //   battery = this.props.data.battery;
    // }
    var data = this.state.info;

    return (
      <div className="position-relative p-4">
        <div className="input-group input-group-default mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Brand
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-default"
            value={data.brand}
            onChange={() => onChange(this, "brand")}
          />
        </div>
        {/* <div className="input-group input-group-default mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Model
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-default"
            value={data.model}
            onChange={this.onChnage("model")}
          />
        </div>
        <div className="input-group input-group-default mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Ram
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-default"
            value={data.ram}
            onChange={this.onChange("ram")}
          />
        </div>
        <div className="input-group input-group-default mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Internal Storage
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-default"
            value={data.storage}
            onChange={this.onChange("storage")}
          />
        </div>
        <div className="input-group input-group-default mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Battery
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-default"
            value={data.battery}
            onChange={this.onChange("battery")}
          />
        </div> */}
        {this.props.editing ? (
          <button
            className="btn btn-primary px-5"
            onClick={() => {
              this.state.id = this.props.data.id;
              this.props.onEdit(this.state);
              this.props.onClose();
            }}
          >
            Edit
          </button>
        ) : (
          <button
            className="btn btn-primary px-5"
            onClick={() => {
              this.state.id = this.props.myId + 1;
              this.props.onAdded(this.state);
              this.props.onClose();
            }}
          >
            Add
          </button>
        )}
        <button
          className="btn btn-secondary mx-3"
          onClick={() => this.props.onClose()}
        >
          Close
        </button>
      </div>
    );
  }
}
export default AddForm;
