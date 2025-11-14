import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
       <div className='mygal grid grid-cols-4 gap-4'>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         <div>
            <img src="https://opensource.fb.com/img/projects/react.jpg" alt="" />
         </div>
         
       </div>
    </div>
  )
}

export default Gallery;
