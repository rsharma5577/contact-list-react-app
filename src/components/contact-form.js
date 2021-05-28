import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {Input, Button,Dropdown ,Loader} from 'semantic-ui-react'


 function ContactForm(props) {
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[phoneNumber,setPhoneNumber] = useState('')
    const[status,setStatus] = useState('')
    const[isLoading,setIsLoading] = useState(false)
    const options = [{text:'Active',value:'Active', key:'Active'},{text:'InActive',value:'InActive',key:'InActive'}]
    const history = useHistory()
    const {location} =history
    const {state}=location
    

    function onSubmit(){
        const payLoad = {
            firstName :firstName,
            lastName:lastName,
            email:email,
            phoneNumber:phoneNumber,
            status:status
        }
        console.log(payLoad)
    }

    function onCancel(){
        history.push('/')
    }
    

    return(
        <div className ="paddingAll100px">
            <h2>Add / Edit Contact</h2>
            <div className = "container">
                
                {state && (<h3>Your Email : {state.email}</h3>)}
                <div className="row">
                    <span className="fieldLabel">First Name :</span>
                    <span><Input 
                        onChange = {(e)=>setFirstName(e.target.value)}
                        value={state? state.firstName:''}
                    /></span>
                </div>
                <div className="row">
                    <span className="fieldLabel">Last Name :</span>
                    <span><Input onChange = {(e)=>setLastName(e.target.value)} value={state? state.lastName:''}/></span>
                </div>
                <div className="row">
                    <span className="fieldLabel">Email :</span>
                    <span><Input onChange = {(e)=>setEmail(e.target.value)} value={state? state.email:''}/></span>
                </div>
                <div className="row">
                    <span className="fieldLabel">Phone Number :</span>
                    <span><Input onChange = {(e)=>setPhoneNumber(e.target.value)} value={state? state.phoneNumber:''}/></span>
                </div>
                <div className="row">
                    <span className="fieldLabel">Status :</span>
                    <span>
                        <Dropdown 
                        onChange = {(e,data)=>setStatus(data.value)}
                        placeholder='Set Status'
                        options={options}
                        selection
                        value={state? state.status:null}
                        />
                    </span>
                </div>
                <div>
                    <span className = "marginRight50px"><Button onClick={()=>onSubmit()} primary>Submit</Button></span>
                    <span><Button onClick={()=>onCancel()}>Cancel</Button></span>
                </div>


            </div>
        </div>
    )
}

export default withRouter(ContactForm)