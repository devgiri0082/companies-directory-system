import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import EachEmployee from './EachEmployee';
let Container = styled.div`
    width: 80vh;
    margin: 0 auto;
    margin-top: 50px;
    .companyCard {
        border: 1px solid black;
        /* min-width: 90%; */
        margin-top: 20px;
        border-radius: 5px;
        overflow: hidden;
        height: 250px;
    }
    .header {
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
        padding : 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap;
        height: 150px;

    }
    span {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
   .employeeCard {
       margin-top: 50px;
       min-height: 100px;
       width: 90%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
        padding-bottom: 20px;
   }
   button {
       padding: 3px 15px;
       font-size: 16px;
       border: 1px solid gray;
       border-radius: 5px;
       cursor: pointer;
   }
`
export default function DetailsPage() {
    let history = useHistory();
    let { id } = useParams();
    let company = useSelector(state => state.company[id]);
    let employee = useSelector(state => state.employee[id]);
    if (!employee) employee = [];
    else employee = Object.values(employee);
    // console.log(company, employee);
    return (
        <Container>
            <button onClick={() => history.push("/")}>back</button>
            <div className="companyCard">
                <div className="header">Profile Overview</div>
                <div className="middle">
                    <div className="address">
                        <span>address:</span> {company.address}
                    </div>
                    <div className="revenue">
                        <span>Revenue:</span> {company.revenue}
                    </div>
                    <div className="phone">
                        <span>Phone:</span> {company.phone}
                    </div>
                    <div className="total">
                        <span>Total Employee:</span> {employee.length}
                    </div>
                </div>
                <div className="footer"></div>
            </div>
            <div className="employeeCard">
                <div className="header">Employee</div>
                {employee.length === 0 ? <h4 style={{ "margin-top": "20px" }}>There are no employee</h4> : employee.map((elem) => <EachEmployee employee={elem} />)}
            </div>
        </Container>
    )
}
