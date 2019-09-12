import React,{Component} from 'react'
import '../App.css';
import { Spinner } from 'reactstrap';
import Words from './Words';
import WordsForUser from './WordsForUser';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';


class Basic extends Component
{
    constructor(props)
    {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state={
            activeTab:'1'
        };
    }

    toggle(tab){
        if(this.state.activeTab!==tab)
        {
            this.setState({
                activeTab:tab
            });
        }
    }


    render()
    {
        return(
            <div>
                <div className='dark'>
                <h3>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="dark" />GRE Words
                </h3>
                <br/>
                </div>
            <div>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({active:this.state.activeTab==='1'})}
                    onClick={()=>{this.toggle('1');}}>
                        All Words
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className = {classnames({active:this.state.activeTab==='2'})}
                    onClick={()=>{this.toggle('2');}}>
                        Learnt Words
                    </NavLink>
                </NavItem>
            </Nav>
            <br/>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Words userid={this.props.userid}/>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <WordsForUser userid = {this.props.userid}/>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
            </div>
        </div>
        )
        
    }
}

export default Basic;