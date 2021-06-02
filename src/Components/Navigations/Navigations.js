import React, { useContext} from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { userContext } from './../../App';

const Navigations = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(userContext);
    

    return (
        <div style={{backgroundColor: '#143633'}}>
            <div className="container">
            <Navbar expand="lg">
            <Navbar.Brand href="#">
             <h2 style={{color: '#f7f7f7'}}>My Diary</h2>
            </Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor: 'white'}}               aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/postData">My Post</Link>
                    
                    {/* Dynamically change login button to user image */}
                    {
                        loggedInUser.email ? <Image src={loggedInUser.photo} alt={loggedInUser.name} style={{width:'40px', height:'40px', marginRight:'60px'}} roundedCircle/> : <Link className="link" to="/login"><button id="login-btn" >Login</button></Link>
                    }
                    {/* Dynamically change logOut button */}
                    {
                        loggedInUser.email && <button id="login-btn" onClick={() => setLoggedInUser({})}>Logout</button> 
                    }
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigations;