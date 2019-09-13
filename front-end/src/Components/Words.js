import React,{Component} from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'
import ShowWords from './ShowWords';

//This component gets all the words and 
//displays (5 of them ) using ShowWords Component
class Words extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            info:[],
            flags:[false,false,false,false,false]
        }
    }

    //At the start, get the data from the back-end
    componentDidMount(){
        axios.get('http://172.16.18.66:8080/words/all')
        .then(
            response => {
                var x = Math.floor(Math.random()*317)
                this.setState(
                    {
                     data:response.data,
                     info:response.data.slice(x,x+5)
                    })
            }
        )
        .catch(error =>{
            alert('Unable to fetch data')
        })
    }

    //handler for showMore button. Randomizes data and displays it
    //flags are used to disable a button when clicked
    show = ()=>{
        var x = Math.floor(Math.random()*317)
        var info = this.state.data.slice(x,x+5)
        var flags = [false,false,false,false,false]
        this.setState({
            info : info,
            flags:flags
        })
    }

    render()
    {
        // var flags=[false,false,false,false,false]
        return(
            <div>
                <Button onClick={this.show} color="info">Show More</Button>
                <br/>
                <br/>
                <ShowWords data={this.state.info} flag="AllWords" flags={this.state.flags} userid={this.props.userid}/>
            </div>
        )
    }
}

export default Words;