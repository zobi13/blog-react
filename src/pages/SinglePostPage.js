import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import SinglePost from '../components/SinglePost';
import PostsService from '../services/PostsService';


export default function SinglePostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
          const data = await PostsService.get(id);
    
          setPost({ ...data });
        };
    
        if (id) {
          fetchPost();
        }
    }, [id]);

      const handleEdit = (id) => {
        history.push(`/edit/${id}`)
      }

      const handleView = () => {
          console.log(':P');
      }

      const handleDelete = async (postId) => {
        await PostsService.delete(postId);

        history.push(`/posts`);
    }


    return (
        <div>
            <SinglePost
                key={id}
                id={id}
                title={post.title}
                text={post.text}
                isOnSinglePage = {true}
                viewCallback={handleView}
                editCallback={handleEdit}
                deleteCallback={handleDelete}

            />
        </div>
    );
}