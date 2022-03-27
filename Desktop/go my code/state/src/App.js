import React, { Component } from 'react'
import photoss from './component/picture'; 

class App extends Component {
  

  
  
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Brahim Kharmachi",
      bio: "I say  ",
      img:<photo/>,
      profession: "developper " }
    
  }
  state={
    divcontainer:false}
  render() {
    var Handlechange = e => {
      this.setState({divcontainer:!this.state.divcontainer})
    }
    const x=this.state.divcontainer;

    return (
      <div> 
        <button onClick={Handlechange}>{x?'Hide':'Show'}</button>
          {x &&(<div>
              
          <center>
          
          <h1 >My name is {this.state.fullname}</h1>
          <p>something i want to say {this.state.bio}</p>
          <p>I want to be {this.state.profession}</p>
          <p>here is a picture . {this.state.img}</p>
           </center>
      </div>)}
      </div>
    )
  }
}

export default App;
