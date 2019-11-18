import React, { Component } from "react";
import Product from "./Product";
import AddForm from "./AddPhone_Form";
import CompareTable from "./CompareTable";

class Cntn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      addingPhone: false,
      addedPhone: true,
      editing: false,
      showDetails: false,
      selelctedPhone: 0,
      compare: false,
      compareList: []
    };
  }
  componentDidMount() {
    this.setState({
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
      ]
    });
  }
  onAdd_toCompare = idd => {
    if (this.state.compareList.length < 3) {
      let newList = this.state.compareList;
      newList.push(this.state.list.find(obj => obj.id === idd));
      this.setState({ compare: true, compareList: newList });
    }
  };
  onRemove_fromCompare = idd => {
    if (this.state.compareList.length > 0) {
      let newList = this.state.compareList.filter(obj => obj.id !== idd);

      if (newList.length < 1) {
        this.setState({ compare: false, compareList: [] });
      } else {
        this.setState({ compareList: newList });
      }
    }
  };

  onRemove_product = idd => {
    let newList = this.state.list.filter(obj => obj.id !== idd);
    if (this.state.selelctedPhone === idd) {
      this.setState({
        addingPhone: false,
        addedPhone: false,
        editing: false,
        showDetails: false,
        selelctedPhone: 0,
        list: newList
      });
    } else if (this.state.compareList.find(obj => obj.id === idd)) {
      this.onRemove_fromCompare(idd);
      this.setState({ list: newList });
    } else {
      this.setState({ list: newList });
    }
  };

  onShow_addForm = () => {
    this.setState({ addingPhone: true, addedPhone: false, editing: false });
  };
  onShow_editForm = idd => {
    this.setState({
      addingPhone: true,
      addedPhone: false,
      editing: true,
      selelctedPhone: idd
    });
  };
  onClose_addForm = () => {
    this.setState({
      addingPhone: false,
      addedPhone: false,
      editing: false,
      showDetails: false,
      selelctedPhone: 0
    });
  };
  onAdd_product = obj => {
    let newList = this.state.list;
    newList.push(obj);
    this.setState({ list: newList });
  };
  onEdit_product = obj => {
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
  onShow_details = idd => {
    this.setState({
      addingPhone: true,
      addedPhone: false,
      editing: false,
      showDetails: true,
      selelctedPhone: idd
    });
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
              onClick={() => this.onShow_addForm()}
            >
              +
            </button>
          </div>
          {this.state.addingPhone && (
            <React.Fragment>
              <div
                className="h-100 w-100  position-fixed  click-close"
                onClick={this.onClose_addForm}
              ></div>
              <div
                className="add-form p-2   position-fixed faic fjcc"
                style={
                  this.state.addingPhone
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <AddForm
                  onClose={this.onClose_addForm}
                  onAdded={this.onAdd_product}
                  onEdit={this.onEdit_product}
                  myId={productId}
                  editing={this.state.editing}
                  showDetails={this.state.showDetails}
                  data={this.state.list.find(
                    obj => obj.id === this.state.selelctedPhone
                  )}
                />
              </div>
            </React.Fragment>
          )}
          <div className="col-12 fx-cc py-2" style={styles}>
            {this.state.list.map(obj => (
              <Product
                key={obj.id}
                info={obj}
                onShow={this.onShow_details}
                onAdd={this.onAdd_toCompare}
                onRemove={this.onRemove_fromCompare}
                onDelete={this.onRemove_product}
                onEdit={this.onShow_editForm}
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
              onRemove={this.onRemove_fromCompare}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Cntn;
