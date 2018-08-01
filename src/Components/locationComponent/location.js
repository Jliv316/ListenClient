import React, { Component } from 'react';
import axios from 'axios';
import GeoButton from './geoButton';
// import SpotifyIcon from './SpotifyIcon';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
    };
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidUpdate(){
    axios.post('https://evening-river-55715.herokuapp.com/api/v1/location', {
      latitude: this.state.lat,
      longitude: this.state.lng,
      client_token: this.props.token
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  setPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({ lat: latitude, lng: longitude });
    this.setState({ statusText: 'Successfully found you at ' + this.state.lng + ',' + this.state.lat });
  }

  getInitialState() {
    return { longitude: 0, latitude: 0, placeName: '', statusText: 'Locating you....' };
  }

  componentDidMount (){
    if (!navigator.geolocation) {
      this.setState({ statusText: 'Your browser does not support geolocation...' });
    }
    else {
      navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition);
    }
  }

  render() {
    return (
      <div id="out">
      <GeoButton/>
      </div>
    );
  }
}

export default Location;