const UserAccount = () => {
    return ( 
        <div className="container">
            <div className="columns">
                <div className="column is-2 has-background-primary">
                <aside className="menu">
                            <p className="menu-label">
                                My Account
                            </p>
                            <ul className="menu-list">
                                <li><a className="is-active">Profile</a></li>
                                <li><a>Address</a></li>
                                <li><a>Change Password</a></li>
                            </ul>
                            <p className="menu-label">
                                Tenders
                            </p>
                            <ul className="menu-list">
                                <li><a>My Tenders</a></li>
                                <li>
                                <a>Tenders Taken</a>
                                <ul>
                                    <li><a>Tender process</a></li>
                                    <li><a>Waiting for appraisal</a></li>
                                    <li><a>Recent takens</a></li>
                                </ul>
                                </li>
                            </ul>
                            <p class="menu-label">
                                Auctions
                            </p>
                            <ul className="menu-list">
                                <li><a>My Auctions</a></li>
                                <li>
                                <a className="">Auctions Taken</a>
                                <ul>
                                    <li><a>Auction process</a></li>
                                    <li><a>Waiting for payment</a></li>
                                    <li><a>Recent payments</a></li>
                                </ul>
                                </li>
                            </ul>
                        </aside>
                </div>
                <div className="column has-background-primary-dark">
                    <div className="tabs">
                        <ul>
                            <li className="is-active"><a>Profile</a></li>
                            <li className="is-active"><a>Address</a></li>
                            <li className="is-active"><a>Change Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
     );
}
 
export default UserAccount;