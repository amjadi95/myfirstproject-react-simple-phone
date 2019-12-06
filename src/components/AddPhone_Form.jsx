import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: { ram: "", storage: "", battery: "", brand: "", model: "", id: 0 }
    };
  }

  componentDidMount() {
    if (this.props.data)
      this.setState({
        phone: this.props.data
      });
  }
  onChange = (event, elem) => {
    var newPhone = this.state.phone;
    newPhone[elem] = event.target.value;
    this.setState({ phone: newPhone });
  };
  // onChnageRam = event => {
  //   this.setState({ ram: event.target.value });
  // };
  // onChangeStorage = event => {
  //   this.setState({ storage: event.target.value });
  // };
  // onChnageBattery = event => {
  //   this.setState({ battery: event.target.value });
  // };
  // onChangeBrand = event => {
  //   this.setState({ brand: event.target.value });
  // };
  // onChnageModel = event => {
  //   this.setState({ model: event.target.value });
  // };

  render() {
    var info = this.state.phone;
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
            onChange={event => {
              this.onChange(event, "brand");
            }}
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
            onChange={event => {
              this.onChange(event, "model");
            }}
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
            onChange={event => {
              this.onChange(event, "ram");
            }}
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
            onChange={event => {
              this.onChange(event, "storage");
            }}
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
            onChange={event => {
              this.onChange(event, "battery");
            }}
            disabled={isShowDetails}
          />
        </div>

        {!isShowDetails &&
          (this.props.editing ? (
            <button
              className="btn btn-primary px-5"
              onClick={() => {
                this.state.phone.id = this.props.data.id;
                this.props.onEdit(this.state.phone);
                this.props.onClose();
              }}
            >
              Edit
            </button>
          ) : (
            <button
              className="btn btn-primary px-5"
              onClick={() => {
                this.state.phone.id = this.props.myId + 1;
                this.props.onAdded(this.state.phone);
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
