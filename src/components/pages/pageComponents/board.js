import { useState } from 'react'
import './board.css'
import {MoreHorizontal} from 'react-feather'
import Card from './cards/card'
import Editable from './EditableNewCard/editable'
import Dropdown from './dropdown/dropdown'


const Board = ()=>{
    const [showDropdown,setShowDropdown] = useState(false);
    const [showMoreButton,setShowMoreButton] = useState(true);

    return (<div className='board'>
        <div className='board_top'>
            <p className='board_top_title'>To Do </p>
            <div className='board_top_more' onClick={()=>{setShowDropdown(true);setShowMoreButton(false)}}>
            {showMoreButton && (<MoreHorizontal />)
           }
             
             { showDropdown && (
                  <Dropdown onClose={()=>{setShowDropdown(false);setShowMoreButton(true)}}>
                      <div className='board_dropdown'>
                      <p>Delete Board</p>
                      </div>
                 
              </Dropdown>
             )

             }

           
            </div>
        </div>
        <div className='board_cards'>
             <Card />
             <Card />
             
             
             <Editable 
             displayClass="board_cards_add"
             text="Add Card"
             placeholder="Enter Card Title"
             />
        </div>

    </div>)
}

export default Board