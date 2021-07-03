import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getAllEmployee, updateEmployee } from '../actions/counterActions';

let EmployeeForm = styled.div`
    margin-top: 30px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid black;
    overflow: hidden;
    .title {
        padding: 10px 0px;
        align-self: flex-start;
        padding-left: 35px;
        font-size: 20px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid black;
        background: #dddbdb;
        margin-bottom: 10px;
    }
    .middle {
        margin: 15px;
    }
    input {
        margin-bottom: 10px;
        height: 20px;
        width: 100%;
        padding-left: 5px;
    }
    button {
        padding: 3px 20px;
        font-size: 16px;
        background: rgb(236,237,236);
        border: 1px solid gray;
        border-radius: 5px;
        cursor : pointer;
        /* padding: 5px */
    }
    select {
        display: block;
        margin: 5px 0px;
        margin-bottom: 10px;
        padding:  2px;
        padding-right: 60%;
        font-size: 17px;
        outline: none;
    }
`
export default function AddEmployee() {
    let nameRef = useRef();
    let addressRef = useRef();
    let allCompany = useSelector((state) => Object.keys(state.company));
    let [company, setCompany] = useState("");
    let dispatch = useDispatch();
    let loading = useSelector(state => state.loading);
    useEffect(() => {
        console.log("useEffect", loading);
        loading === false && dispatch(getAllEmployee(allCompany));
        // eslint-disable-next-line
    }, [loading])
    useEffect(() => {
        console.log(allCompany);
        setCompany(allCompany[0]);
        // eslint-disable-next-line
    }, [allCompany.length]);
    return (
        <EmployeeForm>
            <div className="title">Create New Person</div>
            <div className="middle">
                <div className="field">
                    <div className="field-title">
                        Name:
                    </div>
                    <input type="text" ref={nameRef} />
                </div>
                <div className="field">
                    <div className="field-title">
                        Address:
                    </div>
                    <input type="text" ref={addressRef} />
                    <select value={company} onChange={(e) => {
                        console.log(e.target.value);
                        setCompany(e.target.value);
                    }}>
                        {allCompany.map(elem => <option value={elem}>{elem}</option>)}
                    </select>
                </div>
                <button onClick={saveEmployee}>Save</button>
            </div>
        </EmployeeForm>
    )
    async function saveEmployee() {
        // console.log(nameRef.current.value, addressRef.current.value, company);
        if (nameRef.current.value === "" || addressRef.current.value === "" || company === "") return;
        // console.log(nameRef.current.value, addressRef.current.value, company);
        let newEmployee = { companyName: company, name: nameRef.current.value, address: addressRef.current.value };
        console.log("going inside");
        await dispatch(updateEmployee(newEmployee));
        console.log("outside");
        nameRef.current.value = "";
        addressRef.current.value = "";
        setCompany(allCompany[0]);
    }
}
