import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SinglePost from '../components/SinglePost';
import PostsService from '../services/PostsService';

export default function AppPosts()
{
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
          const data = await PostsService.getAll();
    
          setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleEdit = (id) => {
        history.push(`/edit/${id}`)
    }

    const handleView = (id) => {
        history.push(`/posts/${id}`)
    }

    return (
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
                <div>
                    <SinglePost
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        isOnSinglePage = {false}
                        viewCallback={handleView}
                        editCallback={handleEdit}
                    />
                </div>
            ))}
          </ul>
        </div>
      );
}