import React from 'react';
import axios from 'axios';

class PartyService extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
  }

  componentDidMount() {
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
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{tracks}</div>
      </div>
    );
  }
}


export default PartyService;