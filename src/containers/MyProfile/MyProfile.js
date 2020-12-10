import React, { Component } from 'react';

class MyProfile extends Component {

  state = {
    userName: 'Arun',
    accountCreated: '1/1/2020'
  }

  profileNameChangeHandler = (e) => {
    console.log(`Typed: ${e.target.value}`);
    this.setState({
      userName: e.target.value,
    }) 
  }

  render() {
    // we use fragment to return multiple child elements
    return (
      <>
        <h2>Update Profile | Two Way Binding</h2>
        {/* the following input field without onChange will show error in console. 
          it will be immutable. if you want to edit this field have onChange */}
        <input type="text" value={this.state.userName} onChange={this.profileNameChangeHandler}/>
        <p>User Name is: {this.state.userName}</p>
        <p>Account Created On: {this.state.accountCreated}</p>
        <br />

        {/* The following will work and it would be mutable. */}
        <input type="text" defaultValue='Testing' />
      </>
    )
  }
}

export default MyProfile;
