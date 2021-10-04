import React from "react";
import './Facts.css';

function Facts() {
    return(
        <section id="counts" className="counts">
            <div className="container">

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"/>
                        <p>Artists</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"/>
                        <p>Releases</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"/>
                        <p>Users</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"/>
                        <p>Lines of Code</p>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Facts;