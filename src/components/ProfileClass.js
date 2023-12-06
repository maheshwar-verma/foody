import React, { useContext } from "react"
import UserContext from "../utils/userContext";
class Profile extends React.Component{
    constructor(props){
        super(props);
        //Create State
        this.state={
            count: 0,
            count2: 99,
        }
    }
    componentDidMount(){
       this.interval= setInterval(()=>{
            console.log("interval");
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
        
    }
    render(){

        return <div>
        <UserContext.Consumer>
         {({name})=><h1>{name}</h1>}
        </UserContext.Consumer>
        <h2>{this.state.count2}</h2>
        <h2>{this.state.count}</h2>
        <h2>Profile Class component</h2>
        <h3>pirop: {this.props.name}</h3>
        <button onClick={()=>this.setState({
            count: 1,
            count2: 4,
        })}>Count</button>
        </div>;
    }
}
export default Profile;