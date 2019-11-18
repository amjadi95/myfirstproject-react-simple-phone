import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div
        className="fx fxdc faic phone-product"
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
      >
        <div
          className="img w-100 fx-cc"
          style={{
            height: 190,
            padding: "0 !important",
            position: "relative"
          }}
        >
          <div className="w-100 h-100  product-hover-effect  fx-cc">
            <div className="position-relative w-100 h-100 fx-cc fxdc">
              <button
                style={
                  this.props.AddedToCompare
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="btn btn-outline-success m-1"
                onClick={() => this.props.onShow(this.props.info.id)}
              >
                Show Details
              </button>
              <button
                className="btn btn-outline-info m-1"
                onClick={() => this.props.onEdit(this.props.info.id)}
              >
                Edit Product
              </button>
              <button
                style={
                  this.props.AddedToCompare
                    ? { display: "block" }
                    : { display: "none" }
                }
                className="btn btn-outline-danger m-1"
                onClick={() => this.props.onRemove(this.props.info.id)}
              >
                Remove form compare
              </button>
              <button
                className="btn btn-outline-primary m-1"
                style={
                  this.props.AddedToCompare
                    ? { display: "none" }
                    : { display: "block" }
                }
                onClick={() => this.props.onAdd(this.props.info.id)}
              >
                Add to Compare
              </button>
              <button
                className="btn btn-outline-danger kk p-1"
                onClick={() => this.props.onDelete(this.props.info.id)}
              >
                X
              </button>
            </div>
          </div>
          <img
            src="https://cdn2.gsmarena.com/vv/bigpic/motorola-moto-g8-play-r.jpg"
            alt=""
            width="50%"
          />
        </div>
        <div className="fx-cc fxdc  w-100 ">
          <div className="fx-cc fxdc font-weight-bold">
            {this.props.info.brand}
          </div>
          <div className="fx-cc fxdc bold">{this.props.info.model}</div>
        </div>
      </div>
    );
  }
}
export default Product;
