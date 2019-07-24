import React, { Component } from 'react';
import { connect } from 'dva';
import { List } from 'antd';

const data = [
  {name: 111},
  {name: 222},
];

class AAA extends Component {
  render () {
    return (
      <div>
        <h1>aaa</h1>
        <List
          header="header"
          footer="footer"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div>{item.name}</div>
            </List.Item>
          )}
        >
        </List>
      </div>
    )
  }
}

AAA.propsType = {}
export default connect()(AAA)
