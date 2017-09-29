import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GetColor } from './get-color.js';
import { DisplayColor } from './display-color.js';

class ColorReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      hexCode: '',
      hslCode: '',
      rgbCode: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(color, hex, hsl, rgb) {
    this.setState({
      background: color,
      hexCode: hex,
      hslCode: hsl,
      rgbCode: rgb
    });
  }

  render() {
    return (
      <div>
        <h1>Color Reader</h1>
        <GetColor onClick={this.handleSubmit} />
        <DisplayColor background={this.state.background} hexCode={this.state.hexCode} rgbCode={this.state.rgbCode} hslCode={this.state.hslCode} />
      </div>
    );
  }
}

ReactDOM.render(<ColorReader />, document.getElementById('root'));