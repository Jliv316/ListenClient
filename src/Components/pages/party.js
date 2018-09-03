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
