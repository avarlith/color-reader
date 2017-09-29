import React from 'react';

export class DisplayColor extends React.Component {
  render() {
    const background = this.props.background;
    const hexCode = this.props.hexCode;
    const hslCode = this.props.hslCode;
    const rgbCode = this.props.rgbCode;
    return (
      <div className="display-color">
        <div className="visual-color" style={{ background: background }}></div>
        <div className="format-color">
          <p>{hexCode}</p>
          <p>{hslCode}</p>
          <p>{rgbCode}</p>
        </div>
      </div>
    );
  }
}