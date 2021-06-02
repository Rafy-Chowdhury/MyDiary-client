import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import Navigations from '../Navigations/Navigations';
import { userContext } from './../../App';


const CreatePost = () => {
    const [ loggedInUser ] = useContext(userContext);
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const postData = {
            ...loggedInUser,
            title: data.title,
            description: data.description,
            email: data.email
        };
        
        const url = `https://shielded-gorge-13680.herokuapp.com/addpost`;

          fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(postData)
          })
          .then (res => {
            alert('post created successfully')
          })
          
    }

    return (
        <div>
            <Navigations/>
            <div className="text-center mb-3 mt-4">
                <h3>Please Create a post</h3>
            </div>
           
            <div className="container text-center mt-4" >
              <div className="bg-white p-4" style={{border:'2px solid lightgray', borderRadius:'5px'}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" name="title" type="text" {...register("title")} placeholder="title" />
                <br/><br/>
                <input className="form-control" name="description" type="text" {...register("description")} placeholder="description" />
                <br/><br/>
                <input className="form-control" name="email" defaultValue={loggedInUser.email}  {...register("email")} placeholder="Email" /> <br/> <br/>
                <button className="btn btn-primary" type="submit">Make Post</button>
              </form>
              </div>
              
            </div>
           
        </div>
    );
};

export default CreatePost;