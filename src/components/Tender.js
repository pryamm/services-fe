import axios from "axios";
import { useEffect, useState } from "react";

const Tender = () => {
    const [data, setData] = useState()

    useEffect(() => {
        try{
            axios.get('http://localhost:8080/tender/')
            .then(res=>{
                setData(res.data)
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
                <p className="h-24 title is-5 overflow-hidden">{value.title}</p>
         
                <table class="table-fixed w-full">
                    <tbody>
                        <tr>
                            <td className="w-1/3">Category</td>
                            <td>: {value.category}</td>
                        </tr>
                        <tr>
                            <td>Method</td>
                            <td>: {value.method}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>: {value.location}</td>
                        </tr>
                        <tr>
                            <td>Value</td>
                            <td>: {value.value}</td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        ))}
        </>
     );
}
 
export default Tender;