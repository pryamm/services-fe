import axios from "axios";
import { useEffect, useState } from "react";

const Tender = () => {
    const [data, sedivata] = useState()

    useEffect(() => {
        try{
            axios.get('http://localhost:8080/tender/')
            .then(res=>{
                sedivata(res.data)
                console.log(res.data)
            })  
            .catch(err=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    

    return ( 
        <>
        {data && data.map(value=>(

            <div className="h-72 box overflow-hidden" key={value.id}>
                <p className="h-20 overflow-hidden font-medium text-lg text-center">{value.title}</p>
                <div className="grid grid-cols-1 gap-2 mt-2">

                    
                <div className="w-full font-medium text-white text-center bg-gradient-to-r from-green-400 to-blue-500">{value.category}</div>
                <div className="font-medium">{value.method}</div>
                    
                <div className="flex justify-between">
                    <div className="font-medium">Value : </div>
                    <div className="font-medium text-green-400">{value.value}</div>
                </div>
                    <div className="font-medium">Location</div>
                    <div>{value.location}</div>
                </div>
            
            </div>
        ))}
        </>
     );
}
 
export default Tender;