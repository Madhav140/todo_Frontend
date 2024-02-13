import React, { useEffect, useState } from 'react'
import Add from './Add'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getItem, getItemApi } from '../Services/allApi';

function Home() {
    const[list,setlist] = useState([])
     
    const getlist = async()=>{
          const result = await getItemApi()
          setlist(result.data)
    }

    useEffect(()=>{
getlist()
    },[])

    console.log(list);

  return (
    <>
     
      { list?.length>0?
      <div className='row'>
         <div className='col-6 d-flex align-items-center justify-content-center '>
          
         <div style={{width:'500px',height:'500px',backgroundColor:'lightgreen',borderRadius:"50px"}}>
            <h2 className='text-center mt-1'>Pending List</h2>

                <div className='d-flex flex-column align-items-center justify-content-center p-1'>
              { list?.map((item)=>(
               <Card style={{ width: '25rem',borderRadius:'30px',backgroundColor:'lightpink'}} className='mb-2'>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="danger" className='me-2'>Delete</Button>
        <Button variant="success">Edit</Button>

      </Card.Body>
    </Card>))}

    
                </div>
            
          

         </div>
        
         </div>

         <div className='col-6 p-5'>

         <div style={{width:'500px',height:'500px',backgroundColor:'skyblue',borderRadius:"50px"}}>
            <h2 className='text-center mt-1'>Completed Ones</h2>

           </div>
         </div>
       </div>:


       <Add/>}

      
    
    </>
  )
}

export default Home