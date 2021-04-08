import TenderItems from "./TenderItems"

const TenderList = () => {
    return (
        <section className="section has-background-primary">
            <div className="container has-background-sucess">
                <div className="columns is-flex-wrap-wrap is-variable">
                    <TenderItems/>                         
                </div>
            </div>
        </section>
    );
}
 
export default TenderList;