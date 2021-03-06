import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inventory:[]
    }
  }
  componentDidMount(){
    this.getInventory()
  };

  getInventory = () => {
    axios.get('/api/inventory').then(res =>{
      this.setState({inventory: res.data}).catch(err=>console.log(err))
    })
  }
  render(){
    console.log(this.inventory)
  return (
    <div>
      <Header/>
      <Dashboard inventory={this.state.inventory}/>
      <Form/>
    </div>
    );
  }
}

export default App;
