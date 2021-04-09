const Profile = () => {
    const DD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const MM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentYear = (new Date()).getFullYear();
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const YYYY = range(currentYear, currentYear - 70, -1)

    return ( 
        <div className="container box">
            <div className="columns">
                <div className="column has-text-xl">
                    Profil
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun
                </div>
            </div>
            <div className="columns">           
                    <form className="column is-8">
                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Username</label>
                            <div className="control column is-8">
                                <input className="input" type="text" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Name</label>
                            <div className="control column is-8">
                                <input className="input" type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Email</label>
                            <div className="control column is-8">
                                <input className="input" type="email" placeholder="e.g. name@example.com"/>
                            </div>
                        </div>
                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Phone Number</label>
                            <div className="control column is-8">
                                <input className="input" type="number" placeholder="e.g. 08123456789"/>
                            </div>
                        </div>

                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Gender</label>
                            <div className="control column is-8">
                                <label class="radio">
                                    <input type="radio" name="gender"/>
                                    Male
                                </label>
                                <label class="radio">
                                    <input type="radio" name="gender"/>
                                    Female
                                </label>
                                <label class="radio">
                                    <input type="radio" name="gender" checked/>
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className="field is-horizontal columns">
                            <label className="field-label column is-4">Date of Birth</label>
                            <div className="control column is-8 is-flex is-justify-content-space-between">
                                <div class="select is-primary">
                                    <select>
                                        <option>Date</option>
                                        {
                                            DD.map(value=>(<option>{value}</option>))
                                        }
                                    </select>
                                </div>
                                <div class="select is-primary">
                                    <select>
                                        <option>Month</option>
                                        {
                                            MM.map(value=>(<option>{value}</option>))
                                        }
                                    </select>
                                </div>
                                <div class="select is-primary">
                                    <select>
                                        <option>Year</option>
                                        {
                                            YYYY.map(value=>(<option>{value}</option>))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        
                    </form>
               
                    <div className="column ml-4 is-flex is-justify-content-center is-align-items-center">
                        <div>
                            <div className="is-flex is-justify-content-center">

                                <div className="image is-128x128 ">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" className=""/>
                                </div>
                            </div>
                            <div class="file mt-2">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume"/>
                                    <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div className="columns">
                <div className="column has-text-xl">
                    <button className="button is-primary">Save</button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Profile;