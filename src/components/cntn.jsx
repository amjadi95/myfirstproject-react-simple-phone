import React, { Component } from "react";
import Product from "./Product";
import AddForm from "./AddPhone_Form";
import CompareTable from "./CompareTable";

class Cntn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          brand: "Xiaomi",
          model: "mi 9",
          ram: "8",
          storage: "64",
          battery: "4000"
        },
        {
          id: 2,
          brand: "nokia",
          model: "6.1",
          ram: "8",
          storage: "64",
          battery: "4000"
        },
        {
          id: 3,
          brand: "samsung",
          model: "galaxy s9 plus",
          ram: "8",
          storage: "64",
          battery: "4000"
        },
        {
          id: 4,
          brand: "motorolla",
          model: "z2 force",
          ram: "8",
          storage: "64",
          battery: "4000"
        }
      ],
      addingPhone: false,
      addedPhone: true,
      editing: false,
      selelctedPhone: 0,
      compare: false,
      compareList: []
    };
  }

  AddCompareHandler = idd => {
    if (this.state.compareList.length < 3) {
      let newList = this.state.compareList;
      newList.push(this.state.list.find(obj => obj.id === idd));
      this.setState({ compare: true, compareList: newList });
    }
  };
  RemoveCompareHandler = idd => {
    if (this.state.compareList.length > 0) {
      let newList = this.state.compareList.filter(obj => obj.id !== idd);

      if (newList.length < 1) {
        this.setState({ compare: false, compareList: [] });
      } else {
        this.setState({ compareList: newList });
      }
    }
  };

  RemoveProductHandler = idd => {
    let newList = this.state.list.filter(obj => obj.id !== idd);
    this.setState({ list: newList });
  };

  AddingPhoneHandler = () => {
    this.setState({ addingPhone: true, addedPhone: false, editing: false });
  };
  CloseAddingForm = () => {
    this.setState({
      addingPhone: false,
      addedPhone: false,
      editing: false,
      selelctedPhone: 0
    });
  };
  AddedPhoneHandler = obj => {
    let newList = this.state.list;
    newList.push(obj);
    this.setState({ list: newList });
  };
  EditingHandler = idd => {
    this.setState({
      addingPhone: true,
      addedPhone: false,
      editing: true,
      selelctedPhone: idd
    });
  };
  EdittedHandler = obj => {
    let newList = this.state.list;
    for (let index = 0; index < newList.length; index++) {
      if (newList[index].id == obj.id) {
        newList[index] = obj;
        break;
      }
    }
    this.setState({ list: newList });
    if (this.state.compareList.find(elem => elem.id === obj.id)) {
      for (let index = 0; index < this.state.compareList.length; index++) {
        if (this.state.compareList[index].id == obj.id) {
          this.state.compareList[index] = obj;
          break;
        }
      }
    }
  };

  render() {
    let styles = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };

    var productId = 1;
    if (this.state.addingPhone) {
      if (this.state.list && this.state.list.length > 0) {
        productId = this.state.list[this.state.list.length - 1].id;
      }
    } else {
      productId = this.state.selelctedPhone;
    }

    return (
      <div
        className="col-12 fx-cc fxdc "
        style={{
          backgroundColor: "#f3f3f3"
        }}
      >
        <div className="container fx-cc fxdc py-5">
          <div className="col-12 p-1">
            <button
              className="btn btn-primary"
              onClick={() => this.AddingPhoneHandler()}
            >
              +
            </button>
          </div>
          <div
            className="add-form p-2  w-100 position-fixed faic fjcc"
            style={
              this.state.addingPhone ? { display: "flex" } : { display: "none" }
            }
          >
            {this.state.addingPhone && (
              <AddForm
                onClose={this.CloseAddingForm}
                onAdded={this.AddedPhoneHandler}
                onEdit={this.EdittedHandler}
                myId={productId}
                editing={this.state.editing}
                data={this.state.list.find(
                  obj => obj.id === this.state.selelctedPhone
                )}
              />
            )}
          </div>
          <div className="col-12 fx-cc py-2" style={styles}>
            {this.state.list.map(obj => (
              <Product
                key={obj.id}
                info={obj}
                onShow={this.AddCompareHandler}
                onAdd={this.AddCompareHandler}
                onRemove={this.RemoveCompareHandler}
                onDelete={this.RemoveProductHandler}
                onEdit={this.EditingHandler}
                AddedToCompare={
                  this.state.compareList.find(elem => elem.id === obj.id)
                    ? true
                    : false
                }
              />
            ))}
          </div>
        </div>
        <div className="col-12 " style={{ textAlign: "center" }}>
          {this.state.compare && (
            <CompareTable
              list={this.state.compareList}
              onRemove={this.RemoveCompareHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Cntn;
