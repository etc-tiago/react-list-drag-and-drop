import * as React from 'react';
import RLDD from '../RLDD';

import './example.css';

const bananas = require('./bananas.json');

interface Item {
  id: number;
  title: string;
  body: string;
}

export interface ExampleState {
  items: Item[];
}

export default class Example extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: bananas.bananas
    };

    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleDnDContextChange = this.handleDnDContextChange.bind(this);
  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <h1>react-list-drag-and-drop</h1>
        <p>
          <a href="https://www.npmjs.com/package/react-list-drag-and-drop">
            <img src="https://nodei.co/npm/react-list-drag-and-drop.png?mini=true" />
          </a>
        </p>
        <h2>Example 1: Draggable List of Bananas</h2>
        <p>Drag and drop items to re-order the list.</p>
        <RLDD
          cssClasses="example"
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleDnDContextChange}
        />
      </div>
    );
  }

  private itemRenderer(index: number): JSX.Element {
    const item = this.state.items[index];
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <div className="small">item.id: {item.id} - index: {index}</div>
      </div>
    );
  }

  private handleDnDContextChange(reorderedItems: Array<Item>) {
    this.setState({ items: reorderedItems });
  }
}