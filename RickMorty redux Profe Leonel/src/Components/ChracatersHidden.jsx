import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ChracatersHidden = ({url}) => {

    const[resident, setresident] = useState([])
    
    useEffect(() =>{
        axios.get(url)
        .then(res => setresident(res.data))
    },[])

    console.log(resident);

    return (
        <div>
            <Link to={`/characterInfo/${resident.id}`}>
                <h5>{resident.name}</h5>
                <img src={resident.image} alt="" />
            </Link>
        </div>
    );
};

export default ChracatersHidden;