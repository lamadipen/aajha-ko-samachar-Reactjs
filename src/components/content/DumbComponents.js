import React from 'react';

const Post = (props) => {
    const {id, title, author} = props.post;
    console.log("Title inside the child", title);
    return (
         <div>
             <label>{id}</label>
             <label>{title}</label>
             <label>{author}</label>
         </div>
    )
};

Post.defaultProps = {id:1, title:"Dumb Child", author: "Dipen"};

export default Post;