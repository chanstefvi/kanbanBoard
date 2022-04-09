// import { Children } from 'react'
import { useState } from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import './cards.css'
import Chip from '../chips/chip'
import Dropdown from '../dropdown/dropdown'
const Card  = ()=>{

    const [showDropdown,setShowDropdown] = useState(false);
    const [showMoreButton,setShowMoreButton] = useState(true);

    return (
    <div className='card'>
           <div className='card_top'>
               <div className='card_top_labels'>
                     <Chip text='Frontend' color='green' />
                     {/* <Chip close text='Frontend' color='green' /> */}
               </div>
               

               <div className='card_top_more' onClick={()=>{setShowDropdown(true);setShowMoreButton(false)}}>
            {showMoreButton && (<MoreHorizontal />)
           }
             
             { showDropdown && (
                  <Dropdown onClose={()=>{setShowDropdown(false);setShowMoreButton(true)}}>
                      <div className='card_dropdown'>
                      <p>Delete</p>
                      </div>
                 
              </Dropdown>
             )

             }

           
            </div>
               

           </div>
           <div className='card_title'>
                 efwefewf
           </div>
           <div className='card_footer'>
               <p><Clock/>14 march</p>
               <p><CheckSquare/>1/4</p>
           </div>
    </div>)
}

export default Card