import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Navigations from '../Navigations/Navigations';


const EditPost = () => {
    const { register, handleSubmit } = useForm();
   
    const {id} = useParams();
    const [post, setPost] = useState({});
    // Get post from database when user want to edit post
    useEffect( () => {
        fetch(`https://shielded-gorge-13680.herokuapp.com/post/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id]);

    // form data after editing
    const onSubmit = data => {
        const editedPostData = {
            title: data.title,
            description: data.description,
        };
        
        // update editing post
        fetch(`https://shielded-gorge-13680.herokuapp.com/updatePost/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedPostData)
        })
        .then (res => {
            alert('post updated successfully')
        })

       
    };


    return (
        <div>
            <Navigations/>
            <div className="text-center mb-3 mt-4">
                <h3>Make Change where you want</h3>
            </div>
             <div className="container text-center">
                 <div className="bg-white p-4" style={{border:'2px solid lightgray', borderRadius:'5px'}}>
                 <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="title" defaultValue={post.title} type="text" {...register("title")} placeholder="title" />
                        <br/><br/>
                            <input className="form-control" name="description" defaultValue={post.description} type="text" {...register("description") } placeholder="description" />
                        <br/><br/>
                        <button className="btn btn-primary" type="submit">Submit edited version</button>
                 </form>
                 </div>
                
            </div>
        </div>
    );
};

export default EditPost;