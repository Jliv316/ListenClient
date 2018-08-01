import React, { Component } from 'react';
import Playlist from '../playlistComponent/Playlist';
import PartyService from '../partyComponent/partyService';
import PartyButton from '../partyComponent/partyButton';
import { getQueryParams } from '../../utils';
import axios from 'axios';

class Party extends Component {
  constructor(props) {
    super(props);
    const params = getQueryParams();
    this.state = { 
      token: params.token,
      tracks: []
     }
  }

  handleClick = () => {
    axios.post('http://localhost:3166/api/v1/party', {
      client_token: this.props.token
    })
      .then(response => {
        console.log(response)
        this.setState({ tracks: response.data.tracks })
      })
      .catch(error => console.log(error))
  }

  render() {
    const tracks = this.state.tracks.map((track) => (
      <div>
        <h1>{track.name}</h1>
      </div>
    ));
    return (
      <div className="homeContainer">
        <div className="pimg1">
          <div className="ptext">
            <span className="border trans">
              Dynamic Tracks... 
              </span>
          </div>
        </div>

        <section className="section section-light">
          <p>
            <Button onClick={this.handleClick}>
              Start a Party!
             </Button>
            <div id="layout-content" className="layout-content-wrapper">
              <div className="panel-list">{tracks}</div>
            </div>
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Frank's the man.. :/
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Party;
