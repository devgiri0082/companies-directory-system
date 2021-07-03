import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
let Card = styled.div`
    border: 1px solid black;
    width: 90%;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
    .header, .footer {
        padding: 10px;
        align-self: flex-start;
        font-size: 23px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid black;
        background: #dddbdb;
        color: #429cf0;
    }
    .middle {
        padding : 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
     .footer {
        font-size: 16px;
        text-decoration: none;
    } 
    span {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
`
export default function EachCompany({ company }) {
    return (
        <Card>
            <div className="header">{company.name}</div>
            <div className="middle">
                <div className="address"> <span>Address:</span> {company.address}</div>
                <div className="Revenue"><span>Revenue:</span> {company.revenue}</div>
                <div className="phone"><span>Phone:</span> {company.phone}</div>
            </div>
            <Link to={`/company/${company.name}`}>
                <div className="footer" >company overview</div>
            </Link>

        </Card>
    )
}
