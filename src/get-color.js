import React from 'react';
import { convertRgbToHex, convertRgbToHsl, convertHexToRgb, convertHslToRgb } from './convert-functions.js';
import { isValidForm } from './validation.js';

export class GetColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    }
    this.handleGetColor = this.handleGetColor.bind(this);
  }

  handleGetColor(e) {
    e.preventDefault();
    const color = this.input.value;
    this.setState({
      isActive: true
    })
    if (isValidForm(color)) {
      let hex, hsl, rgb;
      if (color.indexOf('rgb') > -1) {
        rgb = color;
        hex = convertRgbToHex(color);
        hsl = convertRgbToHsl(rgb);
      } else if (color.indexOf('#') === 0) {
        rgb = convertHexToRgb(color);
        hex = color;
        hsl = convertRgbToHsl(rgb);
      } else {
        hsl = color;
        rgb = convertHslToRgb(hsl);
        hex = convertRgbToHex(rgb);
      }
      this.props.onClick(color, hex, hsl, rgb);
    } else {
      return this.setState({
        isActive: false
      });
    }
  }

  render() {
    return (
      <div className="get-color">
        <form>
          <div>
            <label>Type the color in one of the formats:
              <ul>
                <li> hex </li>
                <li> hsl </li>
                <li> rgb </li>
              </ul>
            </label>
          </div>
          <input type="text" className={!this.state.isActive ? "alert" : null} ref={(input) => this.input = input} />
          <button onClick={this.handleGetColor}>Display color</button>
          <div className={this.state.isActive ? "hidden" : null}>
            <p className="alert-info">incorrect data</p>
          </div>
        </form>
      </div>
    )
  }
}