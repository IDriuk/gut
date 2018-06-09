import { Component } from 'react';
import ReactDOM from 'react-dom';

// trick: portal for tip or modal

class SvgTip extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.el.className = this.props.className;
    this.el.style.top = `${this.props.style.top}px` ;
    this.el.style.left = `${this.props.style.left}px`;
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default SvgTip;
