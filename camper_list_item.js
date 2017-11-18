/*import React from 'react';

const CamperListItem = ({ camper, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td><a href={`https://www.freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</td>
      <td>{campers.recent}</td>
      <td>{campers.allTime}</td>
    </tr>
  );
}


export default CamperListItem
*/



import React from 'react';

const CamperListItem = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td><img src={props.camper.img} style={{height: "4em", width: "4em"}}></img></td>
      <td>{props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
};

export default CamperListItem;
