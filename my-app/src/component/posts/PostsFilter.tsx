import React from "react";
import Pagination from "@mui/material/Pagination";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import PostsFilterType from "./PostsFilterType";

import "./Posts.scss";

type PropsType = {
    count: number;
    filter: PostsFilterType;
    setFilter: (callback: (v: PostsFilterType) => PostsFilterType) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {
    const handleChangeLimit = (event: SelectChangeEvent) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: 1,
            limit: +event.target.value,
        }));
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: value,
        }));
    };

    const handleChangeAuthor: any = (
        event: React.ChangeEvent<HTMLInputElement>,
        value: number
    ) => {
        setFilter((prevValue) => ({
            ...prevValue,
            author: +event.target.value,
        }));
    };

    const handleChangelessonNum: any = (
        event: React.ChangeEvent<HTMLInputElement>,
        value: number
    ) => {
        setFilter((prevValue) => ({
            ...prevValue,
            lessonNum: +event.target.value,
        }));
    };

    return (
        <div className="posts-container">
            <TextField
                id="outlined-number"
                label="Author"
                type="number"
                onChange={handleChangeAuthor}
            />
            <TextField
                id="outlined-number"
                label="Lesson Num"
                type="number"
                onChange={handleChangelessonNum}
            />
            <Select
                label="Items per page"
                value={filter.limit.toString()}
                onChange={handleChangeLimit}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <Pagination
                className="pagination"
                page={filter.page}
                onChange={handleChangePage}
                count={Math.ceil(count / filter.limit)}
            />
        </div>
    );
};

export default PostsFilter;
