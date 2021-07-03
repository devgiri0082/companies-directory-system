import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import EachCompany from './EachCompany';

let AllCompanies = styled.div`
    width: 60%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 20px;
    .title {
        padding: 20px 0px;
        align-self: flex-start;
        padding-left: 35px;
        font-size: 23px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid black;
        background: #dddbdb;
    }
    /* hr {
        border: none;
        background: black;
        height: 1px;
        position: relative;
        left: -4.5%;
        top:10px;
    } */
`
export default function ShowAllCompanies() {
    let allCompany = useSelector(state => Object.values(state.company));
    let loading = useSelector(state => state.loading);
    return (
        <AllCompanies>
            <div className="title">
                Companies
            </div>
            {loading ? <h2 style={{ marginTop: "20px" }}>Loading...</h2> : allCompany.length > 0 ? allCompany.map((elem) => <EachCompany company={elem} />) :
                <h3>There are no company to show </h3>}
        </AllCompanies >
    )
}
