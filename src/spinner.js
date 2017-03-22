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
    
    if(!this.props.show) {
      return <span></span>;
    }
    const size = this.props.size;
    let ste = this.props.style;
    if(size > 0) {
      ste.fontSize = size;
    }
    let loading = (
      <div className="svg-loader" style={ste}>
        <svg width="1em" height="1em" ><circle style={{stroke:this.props.color}} cx="0.5em" cy="0.5em" r="0.45em"/></svg>
      </div>
    );
    if(this.props.type != 'svg') {
      loading = <Gif size={this.props.size}></Gif>;  
    }
    
    if(this.props.children) {
      loading = this.props.children;
    }
    
    // 返回行内的加载内容
    if(this.props.display == 'inline') {
      return loading;  
    }
    
    return (
      <div className="react-loading-spinner" >
        <div className="loading-inner">
          {loading}
          <div className="alert-text">{this.props.text}</div>
        </div> 
      </div>
    )
  }
}

Spinner.propTypes = {
  type: React.PropTypes.string,
  display: React.PropTypes.string,
  color: React.PropTypes.string,
  style: React.PropTypes.object,
  text: React.PropTypes.string,
  cls: React.PropTypes.string,
  show: React.PropTypes.bool,
};

Spinner.defaultProps = {
  type: 'svg',
  style: {},
  color: '#9b59b6',
  text: '加载中...',
  cls: '',
  show: false,
}

export default Spinner;