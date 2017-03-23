import React from 'react';
import ReactjsPercentageCircle from '../../index';

const Contents = React.createClass({
  getInitialState () {
    return {
      show: false,
      btnState: false,
    };
  },

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  },

  handleTimeout() {
    var self = this;
    this.setState({
      btnState: true
    });
    setTimeout(() => {
      this.setState({
        btnState: false,
      });
    },5000);
  },

  render() {
    return(
      <div className="contents">
        <h3 className="content-subhead">Get Started</h3>
        <div className="content pure-u-4-5">
          <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              
            </div>
          </div>

        </div>

      </div>
    );
  },

});

export default Contents;
