/** react.js version
* a component for a react component to show percentage circle
**/
import React, { Component } from 'react';

const styles = require('style-loader!css-loader!./style.css');

class ReactjsPercentageCircle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="circle"
        style={{
          width: this.props.radius * 2,
          height: this.props.radius * 2,
          borderRadius: this.props.radius,
          backgroundColor: this.props.bgcolor,
        }}
      >
        <div
          className="left-wrap"
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: 0,
          }}
        >
          <div
            className="loader"
            id="id1"
            style={{
              left: this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: this.props.color,
            }}
          >
          </div>
        </div>
        <div
          className="right-wrap"
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: this.props.radius,
          }}
        >
          <div
            className="loader"
            id="id2"
            style={{
              left: -this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
            }}
          >
          </div>
        </div>
        <div
          className="inner-circle"
          style={{
            width: (this.props.radius - this.props.borderWidth) * 2,
            height: (this.props.radius - this.props.borderWidth) * 2,
            borderRadius: this.props.radius - this.props.borderWidth,
            backgroundColor: this.props.innerColor,
          }}
        >
          {this.props.children ? this.props.children : <span class="text" style={this.state.textStyle}>{this.props.percent}%</span>}
        </div>
      </div>
    )
  }
}

ReactjsPercentageCircle.propTypes = {
  color: React.PropTypes.string,
  bgcolor: React.PropTypes.string,
  innerColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  percent: React.PropTypes.number,
  borderWidth: React.Proptypes.number,
  disabled: React.PropTypes.bool,
};

ReactjsPercentageCircle.defaultProps = {
  color: '#000',
  radius: 20,
  percent: 0,
  borderWidth: 2,
  bgcolor: '#e3e3e3',
  innerColor: '#fff',
  disabled: false,
};

export default ReactjsPercentageCircle;
