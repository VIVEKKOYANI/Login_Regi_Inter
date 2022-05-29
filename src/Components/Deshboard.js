import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';
import Table from './Table.js';
import { useNavigate } from 'react-router-dom';

function Deshboard() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.setItem('isAuthenticated', false);
        navigate('/deshboard');
    }
    return (
        <div className="App">
            <div class="heading">
                <div style={{width: '50%'}}>Campaign List</div>
                <div onClick={logout}>LogOut</div>
            </div>
            <Table />
        </div>
    )
}

export default Deshboard