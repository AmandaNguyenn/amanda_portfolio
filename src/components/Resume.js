import React, { useState } from 'react';
import { capitalizeFirstLetter } from './utils/helpers';
import ResumeImg from "../assets/images/Resume.ViNguyen.pdf";

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />

                        <p className="text-center">
                            Download my <a href={ResumeImg} className="text-faded" download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;