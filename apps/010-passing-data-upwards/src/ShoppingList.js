import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: 12 },
        { name: "Bread", qty: 25 },
      ],
    };
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name} : {item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm />
      </div>
    );
  }
}
export default ShoppingList;
