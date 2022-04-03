import React, { useEffect, useState } from 'react';
import PostType from '../../types/postType';
import PostsCard from './postcard/PostCard';

import './Posts.scss';

type PropsRype = {};

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=50&offset=0";

const Posts: React.FC<PropsRype> = () => {

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    useEffect(() => {
        setLoading(true);
        fetchData();   
    }, []);

    const fetchData = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const posts = data.results as PostType[];
                setPosts(posts);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='posts-container'>
            {posts.map((item) => <PostsCard key={item.id} data={item}/>)}
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    )
}

export default Posts;