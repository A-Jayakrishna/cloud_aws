import React, { Component } from 'react'

class Employee extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             em_nam:'',
             qual:'',
             desig:'',
             sal:'',
             errors:'false'
             
        }
        this.handleidchange = this.handleidchange.bind(this);
        this.handlenamechange = this.handlenamechange.bind(this);
       // this.handlequalchange = this.handlequalchange.bind(this);
        this.handlesalchange = this.handlesalchange.bind(this);
    }
    
    handleidchange(props){

        /*this.setState({
            id:props.target.value
        });*/
    
        if (props.target.value == '' || !(props.target.value.match(/^[a-zA-Z]+$/))) {
           this.setState({id: props.target.value})
        }

    }

    handlenamechange(props)
    {
        /*this.setState({
            em_nam:props.target.value
        });*/
    
        if (props.target.value == '' || props.target.value.match(/^[a-zA-Z]+$/)) {
           this.setState({em_nam: props.target.value})
           this.setState({errors: 'true'})
        }

    }

    handlequalChange= (props) =>{

        this.setState({
            qual:props.target.value
        });
    }

    handlesalchange(props){

        /*this.setState({
            sal:props.target.value
        });*/
    
        if (props.target.value == '' || !(props.target.value.match(/^[a-zA-Z]+$/))) {
           this.setState({sal: props.target.value})
        }
    }
    handleaddclick(event){
        
    }

    handleexitclick(event){

        event.preventDefault();
        console.log("handle request ");
    }


    render(){
        return(
            <div className="begin">
                
                <body className ="body1">
                    <form action="http://google.com/" onSubmit={() => this.handleaddclick()} >
                    <label className ="lable1">Employee Id     </label> <input className ='input1' type='number' name='emp_id' value={this.state.id} onChange={this.handleidchange}  /><br/>
                    <label className ="lable1">Employee Name   </label> <input className ='input1' type='text' name='emp_name' value={this.state.em_nam} onChange={this.handlenamechange}  /><br/>
                    <label className ="lable1">Qualification   </label> <input className ='input1' type='text' name='emp_qual' value={this.state.qual} onChange={this.handlequalChange}  /><br/>
                    <label className ="lable1">Designation     </label> 
                    <select className ='input1' name="emp_desig" >
					<option>--select--</option>
					<option>Sales boy</option>
					<option>Software developer</option>
					<option>Hr manager</option>
					<option>Ceo</option>
				    </select><br/>
                    <label className ="lable1">Salary</label> <input className ='input1' type='number' name='emp_sal' value={this.state.sal} onChange={this.handlesalchange}  /><br/>
                    <input type="submit" value="Add Record" /><button onClick={(event) => this.handleexitclick(event)}>Exit</button>
                    </form>
                </body>
            </div>
        );
    }
}

export default Employee