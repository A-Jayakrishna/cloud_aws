import React from "react"
//import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class Form2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cntry:'',dateent: '', num: '',stat:'',s1:'',s2:'',s3:'',s4:'',s5:''/*,country: '', region: ''*/ };
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleselect = this.handleselect.bind(this);
        //this.handleselect2 = this.handleselect2.bind(this);
    }
   /* selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }*/

    handleChange(event) {
        if (event.target.name === "entdate") {
            this.setState({ dateent: event.target.value })
        }
        else if (event.target.name === "days") {
            const re = /^[0-9\b]+$/;
            
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({ num: event.target.value })
            }
        }
    }

    handleselect(event){

        this.setState({ cntry: event.target.value })

        switch(event.target.value){
            case "india":
                this.setState({ s1: "ap" })
                this.setState({ s2: "ts" })
                this.setState({ s3: "tn" })
                this.setState({ s4: "up" })
                this.setState({ s5: "j&k" })
                break;
            case "australia":
                this.setState({ s1: "au1" })
                this.setState({ s2: "au2" })
                this.setState({ s3: "au3" })
                this.setState({ s4: "au4" })
                this.setState({ s5: "au5" })  
                break;  
            case "usa":
                this.setState({ s1: "usa1" })
                this.setState({ s2: "usa2" })
                this.setState({ s3: "usa3" })
                this.setState({ s4: "usa4" })
                this.setState({ s5: "usa5" })  
                break;
            case "africa":
                this.setState({ s1: "africa1" })
                this.setState({ s2: "africa2" })
                this.setState({ s3: "africa3" })
                this.setState({ s4: "africa4" })
                this.setState({ s5: "africa5" })  
                break; 
            case "germany":
                this.setState({ s1: "germany1" })
                this.setState({ s2: "germany2" })
                this.setState({ s3: "germany3" })
                this.setState({ s4: "germany4" })
                this.setState({ s5: "germany5" })  
                break;
            default:
                this.setState({ s1: "" })
                this.setState({ s2: "" })
                this.setState({ s3: "" })
                this.setState({ s4: "" })
                this.setState({ s5: "" })
        }
    }

    /*copy code in render to select country and region
    <CountryDropdown
                    value={this.state.country}
                    onChange={(val) => this.selectCountry(val)} />
                    <RegionDropdown
                    country={this.state.country}
                    value={this.state.region}
                    onChange={(val) => this.selectRegion(val)} />
    */




    render() {
        return (
            <div id="si">
                <form action="http://localhost:8081" onSubmit={this.handleSubmit} name="myform" method="GET">
                    DATE : <input type="date" value={this.state.dateent} name="entdate" onChange={this.handleChange} required/> <br/><br/>
                    number of days : <input type="text" value={this.state.num} name="days" onChange={this.handleChange} required/> <br/><br/>
                    carsdata : 
                    


                    <select name="country" onChange={this.handleselect} value={this.state.cntry} required>
                    <option value=""></option>
                    <option value="india">india</option>
                    <option value="australia">australia</option>
                    <option value="usa">usa</option>
                    <option value="africa">africa</option>
                    <option value="germany">germany</option>
                    </select>

                    
                    




                    <select name="sta" required>
                    <option value=""></option>
                    <option value={this.state.s1}>{this.state.s1}</option>
                    <option value={this.state.s2}>{this.state.s2}</option>
                    <option value={this.state.s3}>{this.state.s3}</option>
                    <option value={this.state.s4}>{this.state.s4}</option>
                    <option value={this.state.s5}>{this.state.s5}</option>
                    </select>




                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Form2