import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {playlists: []};
  }

  componentDidMount(){
    axios.post('http://localhost:3166/api/v1/playlists', {
      client_token: this.props.token
    })
    .then(response => {
      console.log(response)
      this.setState({ playlists: response.data })
    })
    .catch(error => console.log(error))
  }

  render() {
    const playlists = this.state.playlists.map((playlist) => (
      <div>
        <h1>{playlist.name}</h1>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{playlists}</div>
      </div>
    );
  }
}


export default Playlist;