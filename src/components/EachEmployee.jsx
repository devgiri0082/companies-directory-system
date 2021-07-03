import React from 'react'
import styled from "styled-components";
let Card = styled.div`
    border: 1px solid black;
    overflow: hidden;
    margin: 20px;
    border-radius: 5px;
    height: 140px;
    width: 70%;
    span {
        display: block;
        margin-bottom: 10px;
    }
    .middle {
        margin-top: -10px;
    }
`
export default function EachEmployee({ employee }) {
    return (
        <Card>
            <div className="header">{employee.name}</div>
            <div className="middle">
                <div className="address"> <span>Address:</span>{employee.address}</div>
            </div>
            <div className="footer"></div>
        </Card>
    )
}
