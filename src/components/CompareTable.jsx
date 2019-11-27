import React, { Component } from "react";

class CompareTable extends Component {
  render() {
    return (
      <div className="fx-cc">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                #
              </th>
              {this.props.list.map(obj => (
                <th scope="col" key={obj.id}>
                  {obj.brand + " " + obj.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left"></th>
              {this.props.list.map(obj => (
                <td key={obj.id}>
                  <span
                    className="badge badge-danger p-2"
                    onClick={() => {
                      this.props.onRemove(obj.id);
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
              {this.props.list.map(obj => (
                <td key={obj.id}>{obj.ram}</td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="text-left">
                STORAGE
              </th>
              {this.props.list.map(obj => (
                <td key={obj.id}>{obj.storage}</td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="text-left">
                BATTERY
              </th>
              {this.props.list.map(obj => (
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
