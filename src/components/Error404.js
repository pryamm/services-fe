import { Link } from "react-router-dom"

const Error404 = () => {
    return ( 
        <div>
            <div>Pagen Not Found #404</div>
            <div>Back To <Link to="/">Home</Link></div>
        </div>
     );
}
 
export default Error404;