import React, { Component } from 'react'
import Channel from '../../components/Channel/Channel'

class ChannelList extends Component {

  // we can have data within class comp -- in states
  // states - are editable
  // you can change state using setState() method
  // changing state will re-render the comp and child comp's also.
  // changing state will merge with existing properties
  // changing state is okay in a simple react app.
  // but not okay in an enterprise app
  // changing the state will result in unwanted behaviours in child comp tree
  state = {
    tvChannelList: [
      { name: 'Star Sports', info: '#1 Sports Channel', imageUrl: 'http://placehold.it/280x160'},
      { name: 'Discovery', info: '#1 Infotainment Channel', imageUrl: 'http://placehold.it/280x160'},
      { name: 'NatGeo', info: 'Infotainment Channel', imageUrl: 'http://placehold.it/280x160'}
    ],
    totalTvChannels: 3
  };

  changeNameHandler = () => {
    console.log(this);
    this.setState( {
      tvChannelList: [
        { name: 'Star Sports 1', info: '#1 Sports Channel', imageUrl: 'http://placehold.it/280x160'},
        { name: 'Discovery', info: '#1 Infotainment Channel', imageUrl: 'http://placehold.it/280x160'},
        { name: 'NatGeo', info: 'Infotainment Channel', imageUrl: 'http://placehold.it/280x160'}
      ]
    });
  }

  addToFavHandler = () => {
    console.log('clicked add to fav');
    this.setState( {
      tvChannelList: [
        { name: 'Star Sports [Added]', info: '#1 Sports Channel', imageUrl: 'http://placehold.it/280x160'},
        { name: 'Discovery', info: '#1 Infotainment Channel', imageUrl: 'http://placehold.it/280x160'},
        { name: 'NatGeo', info: 'Infotainment Channel', imageUrl: 'http://placehold.it/280x160'}
      ]
    });
  }

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Channel List | States Demo </h2>
        <p>Total TV Channels {this.state.totalTvChannels}</p>
        <div className='row'>
          <Channel 
            name={this.state.tvChannelList[0].name}
            info={this.state.tvChannelList[0].info} 
            imageURL={this.state.tvChannelList[0].imageUrl}
            addToFav={this.addToFavHandler}/>

          <Channel 
            name={this.state.tvChannelList[1].name}
            info={this.state.tvChannelList[1].info} 
            imageURL={this.state.tvChannelList[1].imageUrl} />

          <Channel 
            name={this.state.tvChannelList[2].name}
            info={this.state.tvChannelList[2].info} 
            imageURL={this.state.tvChannelList[2].imageUrl}/>
        </div>

        <button className='btn btn-danger' onClick={this.changeNameHandler}>Change Channel Name</button>
      </div>
    )
  }
}

export default ChannelList;