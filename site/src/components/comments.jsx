// Create an comments section component using react-comments-section

import React from 'react';
import Comments from 'react-comments-section';

const CommentsSection = () => {
    return (
        <Comments
            siteKey="site-key"
            pageKey="page-key"
            />
    );
}

export default CommentsSection;

