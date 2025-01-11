import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);


        /*in functional components we do like this,
        const [count setCout] = useState(0); but in,
         class based components we do like this...*/
         this.state={
            count1:0,
            count2:0
         }
        console.log("constructor");
        }
         /*in fn components we have setCount, in class components we have setState({
         count1=10;
          })
          */
         /* we use useEffect hook to make API calls in functional 
         components, because it renders only once or when its dependencies changes.
         the same thing we can achieve in class base components using
         componentDidMonut, because it renders once after the whole component renders
         */
     
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        // we can also destructure the this.state--JS thing like this...
        const {count1} = this.state;
        console.log("render");
        return(
            <>
                <h1>Hi my name is {this.props.name}</h1>
                <h1>{count1}</h1>
                <h1>{this.state.count2}</h1>
                <button onClick={()=>{
                    //we do not mutate state directly,
                    //like this.state.count1=100-X-X-X-X-X-X
                    this.setState({
                         count1:100,
                         count2:1000

                    })
                }}>click</button>
                <button onClick={()=>{
                    this.setState({
                         count1:1000,
                         count2:100

                    })
                }}>meeee</button>
            </>
        )
    }
}
export default Profile;