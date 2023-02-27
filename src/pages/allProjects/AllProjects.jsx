import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CardProjects from "../../components/common/cardProject/CardProjects";
import { Link } from "react-router-dom";

import './allProjects.css'
// import Projects from "../../components/common/cardProject/projects"
import { FaSearch } from 'react-icons/fa'
// import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx'

import { getProjects } from "../../service/api";
import CircularGraphic from "../../components/common/graphic/CircularGraphic";

function AllProjects() {

    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState([]);

    /* updates the list of projects each time the component is rendered */
    useEffect(() => {
        getAllProjects();
    }, [projects]);

    /* use the getProjects API service to retrieve the list of projects from the database */
    const getAllProjects = async () => {
        let response = await getProjects();
        setProjects(response.data);
    };

    console.log(projects)

    const searchedProject = projects.filter((item) => {
        if (search.value === "") return item;

        if (item.project_title.toLowerCase().includes(search.toLowerCase())) return item;
    });

    // const [category, setCategory] = useState("All");

    // Pagination
    const [pageNumber, setPageNumber] = useState(0);

    const projectPerPage = 6;

    const visitedPage = pageNumber * projectPerPage;

    const displayPage = searchedProject.slice(
        visitedPage,
        visitedPage + projectPerPage
    );

    const pageCount = Math.ceil(searchedProject.length / projectPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const data = {
        labels: ['Valor', 'Resto'],
        datasets: [
            {
                data: [15, 100 - 15],
                backgroundColor: ['#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };


    return (
        <section className="all-project">

            {/* <div className="circular-graphic"><CircularGraphic data={data} options={options}/></div> */}

            {/* <h1>Proyectos</h1> */}

            <section className="filters">
                <div className='search'>
                    <input
                        placeholder='Busca por el nombre'
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='search_icon' />
                </div>
            </section>

            <section>
                <div className='projects-cards'>
                    {displayPage.map((item) => (
                        <Link to={`/admin-projects/${item._id}`}>
                        <CardProjects
                            key={item.id}
                            item={item}
                        /></Link>
                    ))}
                </div>

                <div className="container_paginate">
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                        previousLabel="Anterior"
                        previousClassName="previousBttns"
                        nextLabel="Siguiente"
                        nextClassName="previousBttns"
                        containerClassName="paginationBttns"
                        activeClassName={"active_pagination"}
                    />
                </div>
            </section>
        </section>
    );
}

export default AllProjects;