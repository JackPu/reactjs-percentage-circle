/** 加载条组件
 * 支持自定义文案，加载动画，和样式
 * 默认提供 Material , gif加载样式
**/

import React, {Component} from 'react';
import Gif from './gif';


let style = require('style-loader!css-loader!./style.css');

class Spinner  extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="circle" style="width:{{radius*2}};height:{{radius*2}};border-radius:{{radius}}">
        <div class="left-wrap" style="width:{{radius}};height:{{radius*2}};left:0;">
          <div class="loader" id="id1" style="left:{{radius}};width:{{radius}};height:{{radius*2}};border-top-left-radius:0;border-bottom-left-radius:0;background-color:{{color}};"></div>
        </div>
        <div class="right-wrap" style="width:{{radius}};height:{{radius*2}};left:{{radius}};">
          <div class="loader" id="id2"  style="left:{{-radius}};width:{{radius}};height:{{radius*2}};border-top-right-radius:0;border-bottom-right-radius:0;background-color:{{color}};"></div>
        </div>
        <div class="inner-circle" style="width:{{(radius - borderWidth)*2}};height:{{(radius - borderWidth)*2}};border-radius:{{radius - borderWidth}};background-color: #fff;">
        {this.props.children ? this.props.children :
<Text style={[styles.text, this.state.textStyle]}>{this.props.percent}%</Text>}
        </div>
      </div>
    )
  }
}

PercentageCircle.propTypes = {
  color: React.PropTypes.string,
  bgcolor: React.PropTypes.string,
  innerColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  percent: React.PropTypes.number,
  borderWidth: React.Proptypes.number,
  textStyle: React.Proptypes.array,
  disabled: React.PropTypes.bool,
}

PercentageCircle.defaultProps = {
  bgcolor: '#e3e3e3',
  innerColor: '#fff'
};

export default Spinner;
