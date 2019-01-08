import React, { Component } from "react";
import {
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon,
  TextInput,
  Form,
  Tile
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import "./patterns.scss";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: 0
    };
  }
  onRowClick = id => {
    this.setState({ selectedRow: id });
  };
  renderRow = (row, id) => {
    return (
      <StructuredListRow onClick={() => this.onRowClick(id)}>
        <div>
          <StructuredListInput
            id={`row-${id}`}
            value="row-0"
            title="row-0"
            name="row-0"
            //defaultChecked={this.state.selectedRow === id}
            checked={this.state.selectedRow === id}
          />
          <StructuredListCell>
            <Icon
              className="bx--structured-list-svg"
              icon={iconCheckmarkSolid}
            />
          </StructuredListCell>
        </div>
        {Object.keys(row).map(col => {
          return (
            <StructuredListCell className="simple-list-row">
              {row[col]}
            </StructuredListCell>
          );
        })}
      </StructuredListRow>
    );
  };
  render() {
    const data = [
      { Name: "Mak Kader", Address: "address A", City: "Austin" },
      { Name: "Lin Song", Address: "address B", City: "Austin" },
      { Name: "Joe John", Address: "address C", City: "San francisco" }
    ];
    const columns = Object.keys(data[0]);
    return (
      <div className="pattern-container">
        <div className="pattern-description">
          <strong>Description:</strong> This pattern will display and array of
          model objects in a multi column grid/table.
        </div>
        <StructuredListWrapper selection border>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head />
              {columns.map(key => {
                return <StructuredListCell head>{key}</StructuredListCell>;
              })}
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            {data.map((row, i) => {
              return this.renderRow(row, i);
            })}
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    );
  }
}
export default TableList;
