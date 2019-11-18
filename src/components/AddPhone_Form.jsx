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
    if (this.props.data)
      this.setState({
        ram: this.props.data.ram,
        storage: this.props.data.storage,
        battery: this.props.data.battery,
        brand: this.props.data.brand,
        model: this.props.data.model,
        id: 0
      });
  }
  onChnageRam = event => {
    this.setState({ ram: event.target.value });
  };
  onChangeStorage = event => {
    this.setState({ storage: event.target.value });
  };
  onChnageBattery = event => {
    this.setState({ battery: event.target.value });
  };
  onChangeBrand = event => {
    this.setState({ brand: event.target.value });
  };
  onChnageModel = event => {
    this.setState({ model: event.target.value });
  };

  render() {
    var info = this.state;
    var isShowDetails = this.props.showDetails;
    return (
      <div
        className="position-relative p-4"
        onClick={() => {
          return false;
        }}
      >
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
            value={info.brand}
            onChange={this.onChangeBrand}
            disabled={isShowDetails}
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
            value={info.model}
            onChange={this.onChnageModel}
            disabled={isShowDetails}
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
            value={info.ram}
            onChange={this.onChnageRam}
            disabled={isShowDetails}
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
            value={info.storage}
            onChange={this.onChangeStorage}
            disabled={isShowDetails}
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
            value={info.battery}
            onChange={this.onChnageBattery}
            disabled={isShowDetails}
          />
        </div>

        {!isShowDetails &&
          (this.props.editing ? (
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
          ))}

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
