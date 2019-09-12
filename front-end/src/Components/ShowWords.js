import React,{Component} from 'react';
import { Table } from 'reactstrap'
import {Button} from 'reactstrap'
import axios from 'axios'

class ShowWords extends Component
{

    constructor(props){
        super(props)
        this.state={
            flag:this.props.flags
        }
    }

    handleClick =(id,index)=>
    {
        var payload = {
            "w_id" : id,
            "u_id" : this.props.userid
        }
        if(this.props.flag==="AllWords")
        {
            axios.post('http://localhost:8080/users/addWord',payload)
            .then(response => {
                var flag= this.state.flag
                flag[index] = true
                this.setState({
                    flag:flag
                })
                // this.props.flag[index]=true;
                console.log(response.data)
            }
            )
            .catch(error=>{
                console.log(error)
                alert('cannot add word')
                console.log('cannot add word')
            });
        }
        else{
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