import React, { Component } from "react";
import Body from "../components/Body/Index";
import API from "../utils/API";
import fire from '../config/fire';
import moment from 'moment';

class Home extends Component {

  state = {
    works: []
  };

  logOut = () => {
    fire.auth().signOut();
  }

  waterPlant = () => {

    this.timeWatered();

    API.waterPlant().catch(err => console.log(err))
  };

  timeWatered = () => {
  
    const obj = {
      title: 'Has watered'
    };

    API
    .timeWatered(obj)
    .then(() =>  console.log('entered'))
    .catch(err => console.log(err));
  };

  getDates = () => {
    API.getDates()
      .then(({ data }) => {
        const _works = [];
        data.forEach(day => {
         const num = moment(day.date).format('MM-DD-YYYY');
         _works.push(num);
        });
        this.setState({ works: _works})
      })
      .catch(err => console.log(err));
  };

  render() {
    let test = this.state.works.length ? this.state.works.join('<br/>') : ""
    return (
        <Body
        buzz= {this.waterPlant}
        out= {this.logOut}
        getDates= {this.getDates}
        true={test}
        />
    );
  }

}

export default Home;