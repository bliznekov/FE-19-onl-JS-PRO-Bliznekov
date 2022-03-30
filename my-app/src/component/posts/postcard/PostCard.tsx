import React from 'react';
import PostType from '../../../types/postType';
import './PostCard.scss';

type PropsType = {
  data: PostType
}

const PostCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className='post-card-container'>
      <div className="image">
        {data.image
            ?
                <img src={data.image} alt="Server error" className='image'/>
            :
                <div className='image-placeholder'>
                    <div/>
                    <div/>
                </div>
        }        
      </div>
      <div className='title'>
          {data.title}
      </div>
      <div className='text'>
          {data.text}                
      </div>
      <div className='date'>
          {data.date}
      </div>
    </div>

  )
}

export default PostCard;