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
      <div class="circle" style="{{width:this.props.radius*2;height:this.props.radius*2;border-radius:this.props.radius;}}">
        <div class="left-wrap" style={{width:this.props.radius;height:this.props.radius*2;left:0;}}>
          <div class="loader" id="id1" style={{left:this.props.radius;width:this.props.radius;height:this.props.radius*2;border-top-left-radius:0;border-bottom-left-radius:0;background-color:this.props.color;}}></div>
        </div>
        <div class="right-wrap" style={{width:this.props.radius;height:this.props.radius*2;left:this.props.radius;}}>
          <div class="loader" id="id2"  style={{left:-this.props.radius;width:this.props.radius;height:this.props.radius*2;border-top-right-radius:0;border-bottom-right-radius:0;background-color:this.props.color;}}></div>
        </div>
        <div class="inner-circle" style={{width:(this.props.radius - this.props.borderWidth)*2}};height:(this.props.radius - this.props.borderWidth)*2;border-radius:this.props.radius - this.props.borderWidth;background-color: #fff;}}>
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
