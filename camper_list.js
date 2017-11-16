/*import React from 'react';

import CamperListItem from './camper_list_item';

const CamperList = ({ campers }) => {
  console.log(campers);
  const Items = campers.map((camper, index) => {
    return <CamperListItem key={index} camper={camper} number={index + 1}/>
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Points in the Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>

      <tbody>
        {Items}
      </tbody>

    </table>
  );
}


export default CamperList;
*/



import React, { Component } from 'react';
import CamperListItem from './camper_list_item.js';

export default class List extends Component {

  renderList() {
    return this.props.campers.map((camper, i) => {
      return (
        <CamperListItem
          key={i}
          number={i+1}
          camper={camper}
        />
      )
    })
  }

  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Last 30 days</th>
            <th>All Time Points</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}
