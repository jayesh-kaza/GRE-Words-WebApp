import React,{Component} from 'react'
import axios from 'axios';

import ShowWords from './ShowWords';

class WordsForUser extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            length:0
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:8080/users/words/'+this.props.userid)
        .then(
            response => {
                this.setState(
                    {
                     data:response.data,
                     length:response.data.length
                    })
            }
        )
        .catch(error =>{
            alert('Unable to fetch data')
        })
    }

    componentDidUpdate()
    {
        axios.get('http://localhost:8080/users/words/'+this.props.userid)
        .then(
            response => {
                this.setState(
                    {
                     data:response.data,
                     length:response.data.length
                    })
            }
        )
        .catch(error =>{
            alert('Unable to fetch data')
        })
    }


    render()
    {
        var flags=[false,false,false,false,false]
        return(
            <div>
            <h1>You have learnt {this.state.data.length} word(s).</h1>
            <br/>
                <ShowWords data={this.state.data} len={this.state.length} flag="UserWords" flags={flags} userid={this.props.userid}/>
            </div>
        )
    }
}

export default WordsForUser;