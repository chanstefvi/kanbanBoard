import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import Navbar from './pageComponents/navbar'
import Board from './pageComponents/board'
import './dashboard.css'
import Editable from './pageComponents/EditableNewCard/editable';

const Dashboard = ()=>{
    const navigate = useNavigate()
    let [userName,setName] = useState('');
    
    const showUserData = async ()=>{

        const req = await fetch('http://localhost:1337/api/userdata',{
            method: 'GET',
            headers:{
                'x-access-token' : localStorage.getItem('token')
                
            }
        })
        const data = await req.json()
        if(data.status === 'ok'){
            setName(data.name)
        }else{
            alert(data.error)
        }

    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login', {replace : true})
            }else{
                showUserData()
            }
        
        }
        
      
      },[]);



    return (<>
    <div className="app">
       
            <Navbar userName={userName}/>
     
       <div className='outer-board'>
         <div className='inner-board custom-scroll'>
           <Board />
           <Board />
           <div className='add_new_list'>
           <Editable displayClass="add_new_list_add" text="Add List" placeholder="Enter List Title"/>
           </div>
           
        </div>
    </div>
    
    </div>
    
    </>)
}

export default Dashboard