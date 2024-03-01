import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacters(res.data))
    },[])

    console.log(characters);

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;