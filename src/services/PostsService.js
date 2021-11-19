import axios from 'axios';

class PostsService
{
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:3000/api',
        });
    }

    async getAll() {
        try {
          const { data } = await this.client.get('posts');
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return [];
      }

    async get(id) {
    try {
        const { data } = await this.client.get(`posts/${id}`);

        return data;
    } catch (error) {
        console.log(error);
    }
    
        return {};
      }

    async add(newPost) {
        try {
            const { data } = await this.client.post('posts', newPost);

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async edit(id, newPost) {
        try {
          const { data } = await this.client.put(`posts/${id}`, newPost);
    
          return data;
        } catch (error) {
          console.log(error);
        }
    
        return null;
      }

      async delete(id) {
          try {
            const { data } = await this.client.delete(`posts/${id}`);

            return data;
          } catch(error) {
            console.log(error);
          }
      }
    
}

export default new PostsService();
