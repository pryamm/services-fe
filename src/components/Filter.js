import FilterCategory from "./Filters/FilterCategory"
import FilterLocation from "./Filters/FilterLocation"
import FilterMethod from "./Filters/FilterMethod"
import FilterValue from "./Filters/FilterValue"

const Filter = () => {
    return ( 
        <form className="box">
          <div className="field">
            <div className="control flex">
              <input className="input" type="email" placeholder="Search"/>
              <button className="button">Search</button>
            </div>
            <div className="control w-full lg:w-2/3 xl:w-1/3 grid grid-cols-2 sm:grid-cols-4 justify-items-start mt-2">
                <FilterLocation/>
                <FilterCategory/>
                <FilterMethod/>
                <FilterValue/>
            </div>
          </div>
        </form>
     );
}
 
export default Filter;