import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { addCompany, getAllCompany, loading, updateCompany } from '../actions/counterActions';
import db from "../firebaseConfig";
let CompanyForm = styled.div`
    width: 250px;
    height:300px;
    border: 1px solid black;
    overflow: hidden;
    border-radius: 5px;
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
`
export default function AddCompany() {
    let nameRef = useRef();
    let addressRef = useRef();
    let revenueRef = useRef();
    let phoneRef = useRef();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCompany());
    })
    return (
        <CompanyForm>
            <div className="title">Create New Company</div>
            <div className="middle">
                <div className="field">
                    <div className="field-title">
                        Name
                    </div>
                    <input type="text" ref={nameRef} />
                </div>
                <div className="field">
                    <div className="field-title">
                        Address
                    </div>
                    <input type="text" ref={addressRef} />
                </div>
                <div className="field">
                    <div className="field-title">
                        Revenue
                    </div>
                    <input type="number" ref={revenueRef} />
                </div>
                <div className="field">
                    <div className="field-title">
                        Phone
                    </div>
                    <input type="number" ref={phoneRef} />
                </div>
                <button onClick={addData}>save</button>
            </div>
        </CompanyForm>
    )
    async function addData() {
        if (nameRef.current.value === "" ||
            addressRef.current.value === "" ||
            revenueRef.current.value === "" ||
            phoneRef.current.value === "") return;
        let newCompany = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            revenue: revenueRef.current.value,
            phone: phoneRef.current.value
        };
        try {
            await dispatch(updateCompany(newCompany));
            nameRef.current.value = "";
            addressRef.current.value = "";
            revenueRef.current.value = "";
            phoneRef.current.value = "";
        }
        catch (err) {
            console.log(err);
        }
    }
}
