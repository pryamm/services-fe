import axios from "axios";
import { useEffect, useState } from "react";

const TenderItems = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        try{
            axios.get('http://localhost:9000/user/', {withCredentials: true})
            .then(res=>{
                console.log(res)
            })  
            .catch(err=>{
                console.log(err.response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    

    return ( 
        <div className="column is-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt ab dolorum. Eum dolorem deleniti ipsam magni. Eum dignissimos cumque modi laboriosam, iure voluptate ad quis molestiae, expedita tempora non!</p>
        </div>
     );
}
 
export default TenderItems;