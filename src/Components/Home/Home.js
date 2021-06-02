import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Navigations from './../Navigations/Navigations';
import { userContext } from './../../App';

const Home = () => {
    const [ loggedInUser ] = useContext(userContext);
 
    return (
        <div>
            <Navigations/>
            <div className="container mt-5">
            <div className="text-center">
                <h1>Hello <span style={{color: '#bf971f'}}>{loggedInUser.name}</span> </h1>
                <h3>Welcome to your diary</h3>
            </div>
                <div className="text-center">
                    <Link className="btn btn-primary mt-4" to ="/createPost">Create Post</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;