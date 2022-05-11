import React, { useState } from "react";
import Button from "../ui/button/Button";
import PostsServer from "./PostServer";
import PostsFront from "./PostsFront";

import "./PostsPage.scss";

type PropsType = {};

const PostsPage: React.FC<PropsType> = () => {
    const [isServerMode, setIsServerMode] = useState(true);

    const handleToggleMode = () => setIsServerMode((prev) => !prev);

    return (
        <div className="posts-container">
            <Button onClick={handleToggleMode}>Toggle</Button>
            <div className="mode-container">
                {isServerMode ? <PostsServer /> : <PostsFront />}
            </div>
        </div>
    );
};

export default PostsPage;
