import React, { Component } from 'react';
import { connect } from 'dva';

class AAA extends Component {
  render () {
    return (
      <div>
        <h1>aaa</h1>
      </div>
    )
  }
}

AAA.propsType = {}
export default connect()(AAA)
