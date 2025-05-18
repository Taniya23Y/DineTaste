// class - based component= and at the end it is js class
// for example:- class xyz extends React.Component{}

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Default",
      },
    };
  }

  /**
   //* Why componentDidMount is used?:- 
    * componentDidMount is used to make a api call
   */

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Taniya23Y");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  // The componentDidUpdate() method is a React lifecycle method that is invoked immediately after a component's updates are flushed to the DOM.
  // It is invoked immediately after updating occurs and not before. It receives two arguments: the previous props and the previous state.
  componentDidUpdate() {
    // console.log("component Did Update called");
  }

  // unmounting refers to the process of removing a component from the DOM. This is the opposite of mounting, which is the process of adding a component to the DOM.
  // When a component is unmounted, it is no longer part of the app's UI, and its resources are cleaned up to prevent memory leaks.
  componentWillUnmount() {
    // console.log("component Will Unmount called");
  }

  render() {
    // destructuring
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      <div className="user-card container mx-auto">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact Info: @FairyTaniya</h4>
      </div>
    );
  }
}

export default UserClass;

/***
 *  ---- Mounting life cycle ---- => Mounting => constructor => Render => React Updates DOM and refs => componentDidMount -> Updating
 *
 * constructor (dummy)
 * Render (dummy)
 *     <html Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> state variable is updated
 *
 *
 * //* once the mounting cycle is finished then setState called, it triggers the reconciliation process and updates the cycle
 * ----- update cycle begins ------ => Updating -> Render -> React updates DOM and refs -> componentDidUpdate => Unmounting
 *
 *     render (API data)
 *     <HTML (new API data)>
 *     componentDidUpdate
 *
 * ----- unmounting cycle begins and ends ------
 *
 */
