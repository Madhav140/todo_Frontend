import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addItemAPI } from '../Services/allApi';

function Add() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[item,setitem] = useState({
    title:'',
    description:''
  })

  const handleAdd = async(e)=>{
    e.preventDefault()
    const {title,description} = item
    if(!title && !description){
        alert('please complete the form')
    }
    else{
      const response =  await addItemAPI(item)
      if(response.status>=200&&response.status<300){
        alert("Uploaded successfully")
         handleClose()
        }
    }

  }




  return (

<>
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <h2 className='text-danger'>Your List is Empty!!!!</h2>
       <img height={'400px'} src="https://static.vecteezy.com/system/resources/previews/013/235/898/original/to-do-list-template-illustration-in-winter-design-for-planner-cute-and-trendy-vector.jpg" alt="" />
     <h2>Click <button onClick={handleShow} className='btn btn-outline-success'>Add</button> to add more items </h2>
   </div>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your things to do..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <div className='mb-3 w-75'>
          <input type="text" className='form-control'  placeholder='Title' onChange={(e)=>{setitem({...item,title:e.target.value})}} />
     </div>
     <div className='mb-3 w-75'>
          <input type="text" className='form-control'  placeholder='Description' onChange={(e)=>{setitem({...item,description:e.target.value})}} />
     </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>

      </>
  )
}

export default Add