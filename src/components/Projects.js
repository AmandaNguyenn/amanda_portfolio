import React, { useState } from 'react';
import Card from "./Card";
import { capitalizeFirstLetter } from './utils/helpers';

function Projects() {
    const [pages] = useState([
        {
            name: "projects"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'GearWise',
            description: 'Backpacking app to help track your gear',
            link: "https://gear-wise.herokuapp.com/",
            repo: "https://github.com/AmandaNguyenn/gear-tracker"
        },
        {
            name: 'PawPair',
            description: 'Personality quiz that matches you with a dog or cat',
            link: "https://amandanguyenn.github.io/PawPair/",
            repo: "https://github.com/AmandaNguyenn/PawPair"
        },
        {
            name: 'WorkoutTracker',
            description: 'Track your workouts',
            link: "https://an-workout-tracker.herokuapp.com/",
            repo: "https://github.com/AmandaNguyenn/workout-tracker"
        },
        {
            name: 'EmployeeDirectory',
            description: 'Search for employees',
            link: "https://an-employee-direct.herokuapp.com/",
            repo: "https://github.com/AmandaNguyenn/employee-directory"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">

                    {projects.map((project, id) => (
                        <Card
                            card={project}
                            key={"project" + id}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;