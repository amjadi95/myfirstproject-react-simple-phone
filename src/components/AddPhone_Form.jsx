import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ram: "",
      storage: "",
      battery: "",
      brand: "",
      model: "",
      id: 0
    };
  }

  componentDidMount() {
    this.setState({
      ram: this.props.data ? this.props.data.ram : "",
      storage: this.props.data ? this.props.data.storage : "",
      battery: this.props.data ? this.props.data.battery : "",
      brand: this.props.data ? this.props.data.brand : "",
      model: this.props.data ? this.props.data.model : "",
      id: 0
    });
  }
  RamHandleChange = event => {
    this.setState({ ram: event.target.value });
    let p = 0;
 mbm
  StorageHandleChange = event => {
    this.setState({ storage: event.target.value });
  };
  BatteryHandleChange = event => {
    this.setState({ battery: event.target.value });5
  };
  BrandHandleChange = event => {
    this.setState({ brand: event.target.value });
  };
  ModelHandleChange = event => {
    this.setState({ model: event.target.value });
  };
  nm, nmbnjkm
  njkml;
  resetState = () => {
    this.setState({
      ram: "",
      storage: "",
      battery: "",
      brand: "",
      model: "",
      id: 0
    });
  };
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
            value={this.state.brand}
            onChange={this.BrandHandleChange}
          />
        </div>
        <div className="input-group input-group-default mb-3">
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
            value={this.state.model}
            onChange={this.ModelHandleChange}
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
            value={this.state.ram}
            onChange={this.RamHandleChange}
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
            value={this.state.storage}
            onChange={this.StorageHandleChange}
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
            value={this.state.battery}
            onChange={this.BatteryHandleChange}
          />
        </div>
        {this.props.editing ? (
          <button
            className="btn btn-primary px-5"
            onClick={() => {
              this.state.id = this.props.data.id;
              this.props.onEdit(this.state);
              this.resetState();
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
              this.resetState();
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
