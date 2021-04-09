const FilterValue = () => {
    return ( 
        <div className="dropdown"> 
            <div className="dropdown-trigger">
                <button className="flex items-center justify-between h-10 w-28 p-2 focus:outline-none focus:bg-gray-200" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span>Value</span>
                    <span className="icon is-small">        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>       
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                    </div>
                    <hr className="dropdown-divider"/>
                    <div className="dropdown-item">
                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FilterValue;