import React, { Component } from 'react';
import Playlist from '../playlistComponent/Playlist';
import PartyService from '../partyComponent/partyService';
import { getQueryParams } from '../../utils';

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
            <PartyButton onClick={this.handleClick()} />
            <PartyService tracks={this.state.tracks} />
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
