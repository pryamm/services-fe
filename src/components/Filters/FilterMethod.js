import { useState } from "react";

const FilterMethod = () => {
    const [click, setClick] = useState(false)
    const method = ['Tender', 'Tender Cepat', 'Langsung']

    return ( 
        <div className={`dropdown ${click?'is-active':''}`}> 
            <div className="dropdown-trigger">
                <a onClick={()=>setClick(!click)} className="flex items-center justify-between h-10 w-28 p-2 focus:outline-none focus:bg-gray-200" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span>Method</span>
                    <span className="icon is-small">        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>       
                    </span>
                </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    {method && method.map(value=>(
                        <div className="dropdown-item flex flex-col">
                            <label className="checkbox" key={value}>
                                <input type="checkbox" className="mr-2"/> {value}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default FilterMethod;