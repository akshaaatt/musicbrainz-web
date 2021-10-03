import './SearchOverlay.css';

const SearchOverlay = props => {
    let headerBg;
    if (props.isDarkThemeActive) {
        headerBg = "box-collapse navbar-ok";
    }
    else {
        headerBg = "box-collapse";
    }
        return(
            <div className={headerBg}>
                <div className="title-box-d">
                    <h3 className="title-d">Search</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x" onClick={remove}/>
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" htmlFor="Type">Keywords</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Query"/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="Type">Type</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>Artist</option>
                                        <option>Release</option>
                                        <option>Recording</option>
                                        <option>Label</option>
                                        <option>Work</option>
                                        <option>Release Group</option>
                                        <option>Area</option>
                                        <option>Place</option>
                                        <option>Annotation</option>
                                        <option>CD Stud</option>
                                        <option>Editor</option>
                                        <option>Tag</option>
                                        <option>Instrument</option>
                                        <option>Series</option>
                                        <option>Event</option>
                                        <option>Documentation</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="results">Result per Page</label>
                                    <select className="form-control form-select form-control-a" id="results">
                                        <option>Upto 25</option>
                                        <option>Upto 50</option>
                                        <option>Upto 100</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2" htmlFor="method">Method</label>
                                    <select className="form-control form-select form-control-a" id="method">
                                        <option>Indexed Search</option>
                                        <option>Indexed Search with advanced query syntax</option>
                                        <option>Direct database search</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-grid col-md-12">
                                <button type="submit" className="btn btn-b">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}

const remove = e => {
    e.preventDefault()
    document.body.classList.remove('box-collapse-open')
    document.body.classList.add('box-collapse-closed')
}

export default SearchOverlay;