import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import SinglePost from '../components/SinglePost';
import PostsService from '../services/PostsService';


export default function SinglePostPage() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
          const { id: _, ...restData } = await PostsService.get(id);
    
          setPost({ ...restData });
        };
    
        if (id) {
          fetchPost();
        }
    }, [id]);

      const handleEdit = (id) => {
        history.push(`edit/${id}`)
      }

      const handleView = () => {
          console.log(':P');
      }


    return (
        <div>
            <SinglePost
                key={post.id}
                id={post.id}
                title={post.title}
                text={post.text}
                isOnSinglePage = {true}
                viewCallback={handleView}
                editCallback={handleEdit}
            />
        </div>
    );
}