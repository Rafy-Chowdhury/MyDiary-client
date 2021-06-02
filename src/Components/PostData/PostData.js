import React, { useEffect, useState, useContext } from 'react';
import PostCard from '../PostCard/PostCard';
import { userContext } from '../../App';
import { useHistory } from 'react-router-dom';
import Navigations from '../Navigations/Navigations';
import { Spinner }  from 'react-bootstrap';

const PostData = () => {
    const [spinner, setSpinner] = useState(false);
    const [postDetails, setPostDetails] = useState([]);
    const [ loggedInUser ] = useContext(userContext);

    useEffect(() => {
        setSpinner(true);
        fetch('https://shielded-gorge-13680.herokuapp.com/posts?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setPostDetails(data);
            setSpinner(false);
        })
    }, [loggedInUser.email])

    // for deleting post by id

    const handleDelete = (id) => {
        const newPost = postDetails.filter(post => post._id !==id);
        setPostDetails(newPost);

        fetch(`https://shielded-gorge-13680.herokuapp.com/deletePost/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res => {
            if(res) {
                alert("post deleted")
            }
        })
    }

    //handle edit
    const history = useHistory();
    const handleEdit = (id) => {
        history.push(`/editPost/post/${id}`)
    }

    return (
        <div>
            <Navigations/>
           
            <div className="container">
             <div className="row">
                {
                postDetails?.map(posts => <PostCard posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} key={posts._id} ></PostCard>)
                }
             </div>
             {
                        spinner && <div className="text-center mt-3"><Spinner animation="grow" /></div>
                    }
                    {
                        !spinner && !postDetails.length && <p className="text-center">No posts found</p>
                    }
            </div>
            
        </div>
    );
};

export default PostData;