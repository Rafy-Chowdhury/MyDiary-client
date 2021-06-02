import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PostCard.css';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ posts, handleDelete, handleEdit }) => {
   const {_id, title, description} = posts;
    return (
      
            <div className="col-md-4 text-center mt-5">
           
           <div>
           <Card style={{ width: '18rem', backgroundColor: '#143633', color: 'white'}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button className="mr-3" onClick={() => handleEdit(_id)}><FontAwesomeIcon icon={faEdit} /> Edit</Button>
                        <Button className="ml-3 btn btn-danger" onClick={ () => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
                    </Card.Body>
            </Card>
           </div>

       </div>
      
    );
};

export default PostCard;