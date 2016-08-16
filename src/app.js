import { h, Component } from 'preact';

class Clock extends Component {
  render() {
    let time = new Date().toLocaleString();
    return <span>{time}</span>;
  }
}

export default Clock;
