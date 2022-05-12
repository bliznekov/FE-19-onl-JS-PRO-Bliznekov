import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PostCard from "./card/PostCard";
import PostType from "../../types/postType";
import { PostGrade } from "../../enums/PostGrade";

enum Mode {
    LIKED,
    DISLIKED,
    MARKED,
}

const PostsFront: React.FC = () => {
    const [mode, setMode] = useState(Mode.LIKED);
    const { fetchAllPosts } = useActions();
    const data = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);
    const error = useSelector((state) => state.posts.error);

    const grades = useSelector((state) => state.posts.grades);

    const marks = useSelector((state) => state.posts.marks);

    let filterdData = data.filter((item) => {
        if (mode === Mode.LIKED) {
            return grades[item.id] === PostGrade.LIKE;
        } else if (mode === Mode.DISLIKED) {
            return grades[item.id] === PostGrade.DISLIKE;
        }
        if (mode === Mode.MARKED) {
            return marks.includes(item.id);
        }
        return false;
    });

    useEffect(() => {
        fetchAllPosts();
    }, []);

    const handleToggleMode = (
        _: React.MouseEvent<HTMLElement>,
        newMode: Mode
    ) => {
        setMode(newMode);
    };

    return (
        <div className="posts-container">
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleToggleMode}
                aria-label="text alignment"
            >
                <ToggleButton value={Mode.LIKED}>Like</ToggleButton>
                <ToggleButton value={Mode.DISLIKED}>Dislike</ToggleButton>
                <ToggleButton value={Mode.MARKED}>Marked</ToggleButton>
            </ToggleButtonGroup>
            <div className="cards">
                {filterdData.map((item) => (
                    <PostCard key={item.id} data={item} />
                ))}
            </div>
            {loading && "Loading..."}
            {error}
        </div>
    );
};

export default PostsFront;
