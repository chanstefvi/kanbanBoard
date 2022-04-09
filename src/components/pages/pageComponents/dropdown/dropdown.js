import { useEffect, useRef } from "react";


const Dropdown = (props)=>{
      const dropdownRef = useRef();
    const handleClick = (evt) =>{
      if(dropdownRef && !dropdownRef.current.contains(evt.target))
      {
          if(props.onClose){
            props.onClose()
          }
          
    }
      
    }
     
   useEffect(()=>{
       document.addEventListener('click',handleClick);

       return ()=>{
           document.removeEventListener('click',handleClick)
       }
   })

    return (<div ref={dropdownRef} className="dropdown">
        {props.children}

    </div>)
}

export default Dropdown;