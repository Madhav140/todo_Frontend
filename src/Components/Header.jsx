import React from 'react'

function Header() {
  return (
    <>
     <div style={{height:'90px',backgroundColor:'beige'}}>
   <div className='d-flex align-items-center justify-content-center p-3'> 
   <div><h1><i class="fa-solid fa-clipboard-check me-2"></i> To-Do List</h1></div>
   </div>
    </div>
    </>
  )
}

export default Header