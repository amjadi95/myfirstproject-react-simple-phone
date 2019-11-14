import React, { Component } from "react";

class CompareTable extends Component {
  state = {
    list: this.props.list
  };
  remove = id => {
    this.props.onRemove(id);
    let newList = this.state.list.filter(c => c.id !== id);
    this.setState({ list: newList });
  };

  render() {
    return (
      <div className="fx-cc">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                #
              </th>
              {this.state.list.map(obj => (
                <th scope="col" key={obj.id}>
                  {obj.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left"></th>
              {this.state.list.map(obj => (
                <td key={obj.id}>
                  <span
                    className="badge badge-danger p-2"
                    onClick={() => {
                      this.remove(obj.id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    remove
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="text-left">
                RAM
              </th>
              {this.state.list.map(obj => (
                <td key={obj.id}>{obj.ram}</td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="text-left">
                STORAGE
              </th>
              {this.state.list.map(obj => (
                <td key={obj.id}>{obj.storage}</td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="text-left">
                bATTERY
              </th>
              {this.state.list.map(obj => (
                <td key={obj.id}>{obj.battery}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompareTable;
