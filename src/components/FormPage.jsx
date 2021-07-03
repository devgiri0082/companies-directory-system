import React from 'react'
import styled from "styled-components";
import AddCompany from './AddCompany';
import AddEmployee from './AddEmployee';
import ShowAllCompanies from "./showAllCompanies";
let Components = styled.div`
    /* height: 100vh; */
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding-top: 10vh;
`
export default function FormPage() {
    return (
        <Components>
            <ShowAllCompanies />
            <div className="right">
                <AddCompany />
                <AddEmployee />
            </div>

        </Components >
    )
}
