import React,{Component} from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'
import ShowWords from './ShowWords';
class Words extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            info:[]
        }
    }

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

    show = ()=>{
        var x = Math.floor(Math.random()*317)
        var info = this.state.data.slice(x,x+5)
        this.setState({
            info : info
        })
    }

    render()
    {
        var flags=[false,false,false,false,false]
        return(
            <div>
                <Button onClick={this.show} color="info">Show More</Button>
                <br/>
                <br/>
                <ShowWords data={this.state.info} flag="AllWords" flags={flags} userid={this.props.userid}/>
            </div>
        )
    }
}

export default Words;