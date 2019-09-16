import React,{Component} from 'react';
import { Table } from 'reactstrap'
import {Button} from 'reactstrap'
import axios from 'axios'

//This Component shows words from the data sent by 
//WordsForUsers Component or Words Component
class ShowWords extends Component
{

    constructor(props){
        super(props)
        this.state={
            flag:this.props.flags
        }
    }

    //Handler when Add-to-learnt or Remove Button is clicked
    handleClick =(id,index)=>
    {
        var payload = {
            "w_id" : id,
            "u_id" : this.props.userid
        }

        //When Add-to-Learnt is Clicked
        if(this.props.flag==="AllWords")
        {
            //post request to back-end is sent to add the word to the user
            axios.post('http://localhost:8080/users/addWord',payload)
            .then(response => {
                //flags are set to disable the specific button
                //to prevent them for duplicate adding
                var flag= this.state.flag
                flag[index] = true
                this.setState({
                    flag:flag
                })
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
                alert('cannot add ')
                console.log('cannot add word')
            });
        }
        //When remove is clicked
        else{
            //post request is sent to delete the word from the user
            axios.post('http://localhost:8080/users/removeWord',payload)
            .then(response =>{
                this.props.len = 0
                console.log(response.data)
            })
            .catch(error=>{
                console.log('cannot remove word')
            });
        }
        
    }

    //The data is shown in the form of a table
    render()
    {
        var ButtonColor = "info"
        var text = "Add to learnt"
        if(this.props.flag==="UserWords")
        {
            ButtonColor = "danger" 
            text = "Remove"
        }
        return(
            <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Word</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map(
                        (abc,index) => 
                        <tr key={abc.id}>
                            <td>{abc.id}</td>
                            <td>{abc.word}</td>
                            <td>{abc.meaning}</td>
                            <td><Button disabled={this.props.flags[index]} color={ButtonColor} onClick={()=>this.handleClick(abc.id,index) }>{text}</Button></td>
                        </tr>
                        )
                    }
                    </tbody>
                </Table>
        )
    }
}

export default ShowWords;