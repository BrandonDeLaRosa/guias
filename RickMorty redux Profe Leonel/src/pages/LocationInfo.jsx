import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLocationInfoThunk } from '../store/slices/locations.slice';
import { useDispatch, useSelector } from 'react-redux';
import ChracatersHidden from '../Components/ChracatersHidden';

const LocationInfo = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const locationInfo = useSelector(state => state.locations)
    
   
    useEffect(() => {  
        dispatch(getLocationInfoThunk(id))
    },[id])
    
    const nextNum = () => {
        navigate(`/locationInfo/${Number(id) + 1}`)
    }
    const prevNum = () => {
        navigate(`/locationInfo/${Number(id) - 1}`)
    }
    console.log(locationInfo);
    // console.log(userSearch);

    return (
        <div>
            <h1>Location info</h1>
            {/* <input type="text" placeholder='Set a number' value={userSearch} onChange={e => setSearch(e.target.value)} />
            <button onClick={userIdSearch}>Search</button> */}
            <h3><b>Id: </b>{locationInfo.id}</h3>
            <h3><b>Name: </b>{locationInfo.name}</h3>
            <h3><b>Type: </b>{locationInfo.type}</h3>
            <h3><b>Locations: </b>{locationInfo.dimension}</h3>
            <h3><b>Population: </b>{locationInfo.residents?.length}</h3>

            <div>
               {
                    locationInfo.residents?.map(resident => (
                        <ChracatersHidden key={resident} url={resident}/>
                    ))
               }
            </div>

            <div>
                <button onClick={prevNum} disabled={id === "1"}>PrevPage</button>
                <button onClick={nextNum} disabled={id === "126"}>NextPage</button> 
            </div>
        </div>
    );
};

export default LocationInfo;


/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const LocationInfo = () => {

    const [locationInfo, setLocationInfo] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const nextNum = () => {
        navigate(`/locationInfo/${(locationInfo.id) + 1}`)
    }
    const prevNum = () => {
        navigate(`/locationInfo/${(locationInfo.id) - 1}`)
    }

    useEffect(() => {  
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then(res => setLocationInfo(res.data))
    },[id])

    console.log(locationInfo);

    return (
        <div>
            <h1>Location info</h1>
            <h3><b>Id: </b>{locationInfo.id}</h3>
            <h3><b>Name: </b>{locationInfo.name}</h3>
            <h3><b>Type: </b>{locationInfo.type}</h3>
            <h3><b>Locations: </b>{locationInfo.dimension}</h3>
            <h3><b>Population: </b>{locationInfo.residents?.length}</h3>
            <div>
                <button onClick={prevNum}>PrevPage</button>
                <button onClick={nextNum}>NextPage</button>
            </div>
        </div>
    );
};

export default LocationInfo;

*/