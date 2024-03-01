import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocationsThunk } from '../store/slices/locations.slice';

const Locations = () => {
    const dispatch = useDispatch()
    const locations= useSelector (state => state.locations)

    const [page, setPage] = useState(1)
    

    // const nextNum = () => {
    //     navigate(`/location/${(locationInfo.id) + 1}`)
    // }

    const prevPage = () => {
        setPage(page -1) 
        dispatch(getLocationsThunk(page - 1))
    }

    const nextPage = () => {
        setPage(page +1)
        dispatch(getLocationsThunk(page + 1))
    }

    useEffect(() => {
        dispatch(getLocationsThunk())
    },[])

    console.log(locations);

    return (
        <div>
            <h1>Locations Page</h1>

            {
                locations.map(location => (
                    <Link to={`/locationInfo/${location.id}`} key={location.id}>
                        <h3>{location.name}</h3>
                    </Link>
                ))
            }
        <button onClick={prevPage} disabled={page === 1}>prev</button>
        <button onClick={nextPage} disabled={page === 7}>next</button>
        </div>
    );
};

export default Locations;