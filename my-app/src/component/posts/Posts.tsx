import React from 'react';
import data from './Data';
import PostsCard from './postcard/PostCard';

import './Posts.scss';


type PropsType = {}

const Posts: React.FC<PropsType> = () => {

    return (
        <div className='posts-container'>
            {data.map((item) => <PostsCard key={item.id} data={item}/>)}
        </div>
    )
}

export default Posts;