import Filter from "./Filter";
import PAginations from "./Paginations";
import Tender from "./Tender"

const Tenders = () => {
    return (
        <>
        <section className="section container">
            <Filter/>
            <div className=" has-background-sucess">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
                    <Tender/>                         
                </div>
            </div>
        </section>
        <section className="section container">
            <PAginations/>
        </section>
        </>
    );
}
 
export default Tenders;