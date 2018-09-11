import React from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";

export default class Tree extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <SortableTree treeData={this.props.data} onChange={this.props.onChange} canDrag={false} />
      </div>
    );
  }
}
