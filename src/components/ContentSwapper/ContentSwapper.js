import React, {Component} from 'react';
import './ContentSwapper.scss';

class ContentSwapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: true
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      console.log('changed')
      this.setState({changed: !this.state.changed})
    }
  }


  render() {
    return (
      <div className="ContentSwapper">
        <div className={`slide ${this.state.changed ? 'fade-in-active' : 'slide-left-exit-active'}`}
        >{this.props.value}</div>
      </div>
    );
  }
}

export default (ContentSwapper);
