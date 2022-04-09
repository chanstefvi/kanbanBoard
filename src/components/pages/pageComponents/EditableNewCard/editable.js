import { useState } from "react";
import { X } from "react-feather"
import './editable.css'

const Editable = (props)=>{
    const [showEdit,setShowEdit] = useState(false)
    return (<div className="editable">
        
        {showEdit ?  
        <form className={`editable_edit ${props.editClass || ""}`} 
        onSubmit={(evt)=>{
            evt.preventDefault();
            if(props.onSubmit)props.onSubmit()
        }}>
            <input autoFocus defaultValue={props.text} type="text" placeholder={props.placeholder || "Enter Item"}/>
            <div className="editable_edit_footer">
                <button type="submit">{props.buttonText || "Add"}</button>
                <X onClick={()=>{
                    setShowEdit(false)
                }}/>
            </div>
        </form> :
        <p className={`editable_display ${props.diaplayClass || ""}`} onClick={()=>{setShowEdit(true)}}>{props.text || "Add item"}</p>}
       

        
        

    </div>)
}
export default Editable