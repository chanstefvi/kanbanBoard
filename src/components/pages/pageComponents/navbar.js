import './navbar.css'
import { ReactComponent as HomeFillIcon} from'./images/home-fill.svg'
import { ReactComponent as PersonFillIcon} from'./images/person-fill.svg'

const navbar = (props)=>{

    return (
     <div className="nav">
       
       <button className='homeButton'><HomeFillIcon size={24} /></button>
       <button className='profile'><i>Welcome ! {props.userName}</i> <PersonFillIcon size={24} /></button>
       
       </div>
    )

}

export default navbar