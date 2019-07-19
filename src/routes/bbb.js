import React, { Component } from 'react';
import { connect } from 'dva';

class BBB extends Component {
  render () {
    return (
      <div>
        <h1>bbb</h1>
      </div>
    )
  }
}

BBB.protoType = {}
export default connect()(BBB)
