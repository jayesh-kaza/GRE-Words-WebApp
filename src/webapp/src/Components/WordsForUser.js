import React,{Component} from 'react'
import axios from 'axios';
import ShowWords from './ShowWords';

//This component gets all the words for a user
//and displays them using ShowWords Component
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

    //At the start, the data is collected from the database
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

    //Whenever a learnt word is removed or added
    //the state is updated, and this method gathers the data again
    async componentDidUpdate()
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