import React, {Component} from 'react';
import ContentSwapper from '../ContentSwapper/ContentSwapper';
import './SwapForever.scss';

const items = ["USA", "Canada", "Mexico"];

class SwapForever extends Component {
  state = {index: 0};

  componentDidMount() {
    const dis = this;
    setInterval(() => {
      let index = dis.state.index + 1;
      if (index > 2) {
        index = 0
      }
      dis.setState({index});
    }, 1000);
  }

  render() {
    console.log(this.state);
    return (
      <div className="SwapForever">
        <ContentSwapper value={items[this.state.index]}/>
      </div>
    );
  }
}

export default (SwapForever);
