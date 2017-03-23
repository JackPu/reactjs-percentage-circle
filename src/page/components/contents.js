import React from 'react';
import ReactjsPercentageCircle from '../../index';

const Contents = React.createClass({
  getInitialState() {
    return {
      show: false,
      btnState: false,
    };
  },
  
  handleTimeout() {
    setTimeout(() => {
      this.setState({
        btnState: false,
      });
    }, 5000);
  },

  render() {
    return(
      <div className="contents">
        <h3 className="content-subhead">Get Started</h3>
        <div className="content pure-u-4-5">
          <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <div className="circle-item">
                <ReactjsPercentageCircle radius={60} percent={80} color={"#3498db"}></ReactjsPercentageCircle> 
                <p> a simple circle</p>
              </div>
              <div className="circle-item">
                <ReactjsPercentageCircle radius={60} borderWidth={4} percent={30} color={"#2ecc71"}></ReactjsPercentageCircle> 
                <p>change color and percent</p>
              </div>
              <div className="circle-item">
                <ReactjsPercentageCircle radius={80} borderWidth={5} percent={40} color={"#34495e"}>
                  <img width="32" src="http://img1.vued.vanthink.cn/vued916ce2f38608d228cece71baa1c15437.png"/>
                  <p>20000步</p>
                </ReactjsPercentageCircle> 
                <p>specify child component</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  },

});

export default Contents;
