import React, {useState,useEffect} from 'react'
import ReactTable from 'react-table'
import { Button } from 'semantic-ui-react'
import 'react-table/react-table.css'
import{useHistory} from 'react-router-dom'
import Apis from '../utils/Apis'
import LoaderSpinner from './loader'

function ContactListTable(props)  {

    const[data,setData]  = useState([]);
    const[error,setError]  = useState(false);
    const[isLoading,setIsLoading] = useState(false)
    const history =useHistory()
    
    const columns =[
        { 
            Header:'First Name',
            accessor:'firstName'
        },
        { 
            Header:'Last Name',
            accessor:'lastName'
        },
        { 
            Header:'Email',
            accessor:'email'
        },
        { 
            Header:'Phone Number',
            accessor:'phoneNumber'
        },
        { 
            Header:'Status',
            accessor:'status',
            Cell :(props) => renderStatusCell(props.value)
        },
        { 
            Header:'Action',
            accessor:'id',
            Cell :(props) => renderActionCell(props.value)
        }

    ]

    useEffect(()=>{
        requestData()
    },[])


    function renderActionCell(cellInfo) {
        const obj = data.find(f=> f.id ===cellInfo)
        if(obj.status === 'Active'){
            return (
            
                <div>
                    <Button onClick={()=>updateContact(cellInfo)} primary>Edit</Button>
                    <span> / </span>
                    <Button onClick={()=>deleteContact(cellInfo)} >Delete</Button>
                </div>
            )
        } else return <span style= {{color:"gray"}}>Not Applicable</span>
         
    }

    function renderStatusCell(cellInfo){

        if(cellInfo === "Active"){
            return <b style ={{color:"green"}} >{cellInfo}</b>
        } else return <b style ={{color:"red"}} >{cellInfo}</b>
    }

    function updateContact(id) {
        const state = data.find(f=> f.id ===id)
        history.push({ 
            pathname: '/add-or-update-contact',
            state: state
        });
    }

    
    function requestData(){
        setIsLoading(true)
        const getList =async()=>{
            const {response, error} = await Apis.getContactList()
            setIsLoading(false)
            setData(response? response:[])
            setError(error? true:false)
        }
        getList()
        
    }

    function deleteContact(id) {
        setIsLoading(true)
        const delContact =async()=>{
            const {response, error} = await Apis.deleteContact(id)
            setIsLoading(false)
            if(!error){
                requestData()
            }
            setError(error? true:false)
        }
        delContact()
    }

    function addContact() {
       history.push('/add-or-update-contact')
    }
    
    
  return (
        <div className="paddingAll">
            <h2>Contact List</h2>
            <div className= "container" >
            <div className="marginBottom">
              <Button onClick={()=>addContact()} primary >Add Contact</Button>
            </div>

            <div>
            <ReactTable
                data={data}
                columns={columns}
                sortable={false}
                showPagination={false}
                minRows ={1}
            />
            </div>
          </div>
          {error && <div className="error"> Something went wrong! Please try later. </div>}
            {isLoading && <LoaderSpinner text={'Loading'}/>}
      </div>
    
  )
}

export default ContactListTable;
