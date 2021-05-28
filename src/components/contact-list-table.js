import React, {useState,useEffect} from 'react'
import ReactTable from 'react-table'
import { Button } from 'semantic-ui-react'
import 'react-table/react-table.css'
import{useHistory} from 'react-router-dom'

function ContactListTable(props)  {

    const[data,setData]  = useState(null);
    const history =useHistory()
    const dummyData  =[
        {
            firstName:'Rahul',
            lastName:'Sharma',
            email:'rs@gmail.com',
            phoneNumber:'9988776622',
            status:'Active'
        },
        {
            firstName:'Rohit',
            lastName:'Sharma',
            email:'rohit@gmail.com',
            phoneNumber:'9988776622',
            status:'Active'
        },
        {
            firstName:'Raj',
            lastName:'Sharma',
            email:'raj@gmail.com',
            phoneNumber:'9988776622',
            status:'Active'
        }
    ]

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
            accessor:'status'
        },
        { 
            Header:'Action',
            accessor:'email',
            Cell :(props) => renderActionCell(props.value)
        }

    ]

    useEffect(()=>{

    },[])


    function renderActionCell(cellInfo) {
        return (
            <div>
                <Button onClick={()=>updateContact(cellInfo)} primary>Edit</Button>
                <span> / </span>
              
                <Button onClick={()=>deleteContact(cellInfo)} >Delete</Button>
            </div>
        )
    }

    function updateContact(email) {
        const data = dummyData.find(f=> f.email ===email)
        history.push({ 
            pathname: '/add-or-update-contact',
            state: data
           });
       
    }

    function deleteContact(email) {
        
    }

    function addContact() {
       history.push('/add-or-update-contact')
        
    }
    
    
  return (
        <div className="paddingAll100px">
            <h2>Contact List</h2>
            <div className= "container" >
            <div className="addContactButton">
              <Button onClick={()=>addContact()} primary >Add Contact</Button>
            </div>

            <div>
            <ReactTable
                data={dummyData}
                columns={columns}
                sortable={false}
                showPagination={false}
                minRows ={1}
            />
            </div>
           

            </div>
          


      </div>
    
  )
}

export default ContactListTable;
