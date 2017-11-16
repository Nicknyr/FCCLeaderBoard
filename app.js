/*import React, { Component } from 'react';
import axios from "axios";

import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    };
  }


  componentWillMount() {
    axios.all([this.getRecentCampers(), this.getAllTimeCampers()])
      .then(axios.spread(( recentCampers, allTimeCampers ) => {
        this.setState ({
          recent: recentCampers.data,
          allTime: allTimeCampers.data
         });
      }));
  }


  getRecentCampers(){
   return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
 }

  getAllTimeCampers(){
   return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
 }

  changeView(currentView) {
    // This helper function is created to avoid calling setState in the render function
    this.setState({ currentView });
  }

  render() {
    console.log(this.state.recent);
    console.log(this.state.allTime);
    return (

      <div style={{ backgroundColor: "ghostwhite", marginTop: "3em", height: "30em", boxShadow: "0px 0px 15px black", borderRadius: "5px"}}>

        <h1 style={{ textAlign: "center", paddingTop: ".5em" }}>Free Code Camp Leaderboard</h1>

        <h4 style={{ textAlign: "center", paddingTop: "1em"}}>{`Viewing Top ${this.state.currentView}`}</h4>

        <div id="buttonSection" style={{ textAlign:"center", marginTop:"1em", marginBottom: "1em"}}>

          <button style={{backgroundColor: "#006400", border: "1px solid black", margin: ".5em", boxShadow: "2px 2px 2px grey"}} onClick={() => this.changeView('recentCampers')} className="btn btn-primary">Recent</button>

          <button style={{backgroundColor: "#006400", border: "1px solid black", margin: ".5em", boxShadow: "2px 2px 2px grey"}} onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary">All Time</button>

        </div>

        <CamperList campers={this.state[this.state.currentView]} />
      </div>
    );
  }
}
*/




import React, { Component } from 'react';
import axios from "axios";

import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      allTime: [],
      currentView: 'recent'
    }
  }

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread(( recentCampers, allTimeCampers ) => {
        this.setState ({
          recent: recentCampers.data,
          allTime: allTimeCampers.data
         });
      }));
    }

  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }

  fetchAllTimeCampers() {
   return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  }

  changeView(currentView){
    this.setState({currentView});
  }

  render() {

    return (

          <div style={{ backgroundColor: "ghostwhite", marginTop: "3em", marginBottom:"3em", marginLeft:"auto", marginRight:"auto", height: "auto", width:"70%", boxShadow: "0px 0px 15px black", borderRadius: "5px"}}>

          <h1 style={{ textAlign: "center", paddingTop: ".5em" }}>Free Code Camp Leaderboard</h1>
          <h4 style={{ textAlign: "center", paddingTop: ".5em" }}>{`Viewing Top ${this.state.currentView} Campers`}</h4>


          <div id="buttonSection" style={{ textAlign:"center", marginTop:"1em", marginBottom: "1em"}}>

          <button
            style={{backgroundColor: "#006400", border: "1px solid black", margin: ".5em", boxShadow: "2px 2px 2px grey"}}
            onClick={this.changeView.bind(this, 'recent')}
            className='btn btn-primary'>
              Recent
            </button>
          <button
            style={{backgroundColor: "#006400", border: "1px solid black", margin: ".5em", boxShadow: "2px 2px 2px grey"}} 
            onClick={this.changeView.bind(this, 'allTime')}
            className='btn btn-primary'
          >
            All Time
          </button>

          </div>

          <CamperList campers={this.state[this.state.currentView]} />

        </div>
    );
  }
}
