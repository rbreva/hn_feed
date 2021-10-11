import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ListPosts = ({posts}) => {
    return(
        <>
        {posts.map((post) =>{
            return (
            <a href={post.story_url} target="_blank">
                <div className="row">
                    <div className="row__title">{post.story_title} <span class="row__author">- {post.author} -</span> </div>
                    <div className="row__time">{post.created_at}</div>
                    <FontAwesomeIcon icon={faTrashAlt} className="row__trash"/>
                </div>
            </a>
            )
        })}
        </>
    );
}

export default ListPosts;