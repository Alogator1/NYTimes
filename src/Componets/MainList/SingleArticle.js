import React from 'react';
import "./SinglArticle.css";

const Article = ({id, title}) => {
    return ( <div className="arcticle_single">
        <h2>{title}</h2>
    </div> );
}
 
export default Article;