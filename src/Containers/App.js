import React, { Component } from 'react'
import Cardlist from '../Components/Cardlist'
/* import {robots} from './robots' */
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'




class App extends Component {
    constructor()
    {
        super()
        this.state={
            robots: [],//robots,
            searchfield: ''
        }

    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}))
    }

    onSearchChange = (event) =>
    {
        this.setState({searchfield: event.target.value})
        /* console.log(event.target.value); */
        
        /* console.log(filteredRobots); */
    }

    render()
    {
        const filteredRobots= this.state.robots.filter(robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0)
        {
            return <h1>LOADING</h1>
        }
        else
        {
        return (
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
                
            </div>
            
                );
        }
    }
    


}

export default App;