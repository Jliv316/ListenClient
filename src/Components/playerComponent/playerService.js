import React from 'react';
import axios from 'axios';
import SpotifyPlayer from 'react-spotify-player';

class PlayerService extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      playlist_id: "1JrqK3hJAZYKC53UuKYv23",
      user_id: "1263322089"
     };
     this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state.playlist_id)
    console.log(this.state.user_id)
  }

  componentDidMount() {
    axios.post('http://localhost:3166/api/v1/party', {
      client_token: this.props.token
    })
      .then(response => {
        console.log(response)
        this.setState({ playlist_id: response.data.playlist_id })
        this.setState({ user_id: response.data.user_id })
      })
      .catch(error => console.log(error))
      console.log(this.state.playlist_id)
  }

  render() {
    const size = {
      width: '100%',
      height: 1000,
    };
    debugger;
    let user_id = this.state.user_id
    let playlist_id = this.state.playlist_id
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    return (
      <div className="container-fluid">
        <SpotifyPlayer
          uri={`spotify:user:${user_id}:playlist:${playlist_id}`}
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default PlayerService;