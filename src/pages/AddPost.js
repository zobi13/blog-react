import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PostsService from '../services/PostsService';

export default function AddPost()
{
    const { id } = useParams();
    const [newPost, setNewPost] = useState({
        title: '',
        text: ''
    })

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
          await PostsService.edit(id, newPost);
        } else {
          await PostsService.add(newPost);
        }
    
        history.push('/posts');
      };

    const handleReset = () => {
        setNewPost({
            title: '',
            text: ''
        });
    }

    useEffect(() => {
        const fetchPost = async () => {
          const { id: _, ...restData } = await PostsService.get(id);
    
          setNewPost({ ...restData });
        };
    
        if (id) {
          fetchPost();
        }
      }, [id]);

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add new'} post: </h2>

            <form 
                onSubmit = {handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 200,
                    marginLeft: 15,}}
            >
                <input required type='text' value={newPost.title} placeholder='Title' onChange={({target}) => setNewPost({...newPost, title: target.value})} />
                <textarea required rows = '10' columns='30' value={newPost.text} placeholder='Text' onChange={({target}) => setNewPost({...newPost, text: target.value})} />
                <button>{id ? 'Edit' : 'Add'}</button>
                <buttton onClick={handleReset}> Reset form </buttton>
            </form>
        </div>
    );
}