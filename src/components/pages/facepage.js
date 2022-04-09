import { Link } from 'react-router-dom'

const facepage = ()=>{
    return (<>
    <h1>front page</h1>
    <button><Link to="/login">SignIn</Link></button>
    <button><Link to="/signup">SignUp</Link></button>
    </>)
}
export default facepage