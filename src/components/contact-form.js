import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {Input, Button,Dropdown } from 'semantic-ui-react'
import Apis from '../utils/Apis'
import LoaderSpinner from '../components/loader'


 function ContactForm(props) {
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[phoneNumber,setPhoneNumber] = useState('')
    const[status,setStatus] = useState('')
    const[isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const[isValidAddContactForm,setIsValidAddContactForm] = useState(true)
    const[isValidUpdateContactForm,setIsValidUpdateContactForm] = useState(true)
    const[success,setSuccess] = useState(false)
    const history = useHistory()
    const {location} =history
    const {state}=location
    const options = [{text:'Active',value:'Active', key:'Active'},{text:'InActive',value:'InActive',key:'InActive'}]
    
    function onSubmit(){
        
        const payLoad = {
            firstName :firstName,
            lastName:lastName,
            email:email,
            phoneNumber:phoneNumber,
            status:status
        }
        
        setIsValidUpdateContactForm(validateUpdateContactForm(payLoad))
        setIsValidAddContactForm(validateAddContactForm(payLoad))

        if(state && validateUpdateContactForm(payLoad)){
            setIsLoading(true)
            const updateContact =async()=>{
               const {response, error} = await Apis.updateContact(payLoad, state.id)
                setIsLoading(false)
                setSuccess(!error && response ? true: false)
                setError(error? true:false)
                }
            updateContact()
        
        } else if(validateAddContactForm(payLoad)) {
            setIsLoading(true)
            const addContact =async()=>{
                const {response, error} = await Apis.addContact(payLoad)
                setIsLoading(false)
                setSuccess(!error && response ? true: false)
                setError(error? true:false)
            }
            addContact()
        }
    }

    function onCancel(){
        history.push('/')
    }

    function validateAddContactForm(data){
        if(data.firstName &&  data.lastName && data.email && data.phoneNumber && data.status){
            return true
        } else
            return false
    }
    
    function validateUpdateContactForm(data){
        if(data.firstName || data.lastName || data.email || data.phoneNumber || data.status){
            return true
        } else
            return false
    }

    return(
        <div className ="paddingAll">
            <h2>Add / Edit Contact</h2>
            <div className = "container">
            
            <span className="floatRight">
                <Button  primary onClick={()=>onCancel() }> Contact List</Button>
            </span>

            {state && (
                <div>
                    <h3>Your Email : {state.email}</h3>
                    <div className="marginBottom">
                        <span className="note">Note:&nbsp; &nbsp;</span>
                        <b>
                            Please enter the only field that you want to update.
                        </b>
                    </div>
                </div>
            )}

            <div>
                <div>
                    <span className="fieldLabel">First Name :</span>
                    <span><Input 
                        onChange = {(e)=>setFirstName(e.target.value)}
                    /></span>
                </div>

                <div>
                    <span className="fieldLabel">Last Name :</span>
                    <span><Input  onChange = {(e)=>setLastName(e.target.value)} /></span>
                </div>

                <div>
                    <span className="fieldLabel">Email :</span>
                    <span><Input onChange = {(e)=>setEmail(e.target.value)} /></span>
                </div>

                <div>
                    <span className="fieldLabel">Phone Number :</span>
                    <span><Input onChange = {(e)=>setPhoneNumber(e.target.value)} /></span>
                </div>

                <div>
                    <span className="fieldLabel">Status :</span>
                    <span>
                        <Dropdown 
                        onChange = {(e,data)=>setStatus(data.value)}
                        placeholder='Set Status'
                        options={options}
                        selection
                        />
                    </span>
                </div>

                <div>
                    <span className = "marginRight50px">
                        <Button onClick={()=>onSubmit()} primary>Submit</Button>
                    </span>
                    
                    <span>
                        <Button onClick={()=>onCancel()}>Cancel</Button>
                    </span>
                </div>
            </div>
            
            {!isValidAddContactForm && !state && <div className="error"> Please enter all the fields. </div>}

            {!isValidUpdateContactForm && state && <div className="error"> Please enter atleast one field. </div>}
            
            {error && <div className="error"> Something went wrong! Please try later. </div>}
            
            {success && <div  className="success"> Data saved succesfully! </div>}
                
            {isLoading && <LoaderSpinner text={'Loading'}/>}

            </div>
        </div>
    )
}

export default withRouter(ContactForm)