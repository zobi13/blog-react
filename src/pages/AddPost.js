import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostsService from '../services/PostsService';

export default function AddPost()
{
    const [newPost, setNewPost] = useState({
        title: '',
        text: ''
    })

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await PostsService.add(newPost);

        history.push('/posts');
    }

    return (
        <div>
            <h2> Add new post: </h2>

            <form 
                onSubmit = {handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 200,
                    marginLeft: 15,}}
            >
                <input type='text' value={newPost.title} placeholder='Title' onChange={({target}) => setNewPost({...newPost, title: target.value})} />
                <textarea rows = '10' columns='30' value={newPost.text} placeholder='Text' onChange={({target}) => setNewPost({...newPost, text: target.value})} />
                <button> Add </button>
            </form>
        </div>
    );
}