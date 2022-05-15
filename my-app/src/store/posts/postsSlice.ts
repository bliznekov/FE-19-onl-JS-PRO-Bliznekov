import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostGrade } from "../../enums/PostGrade";
import Storage from "../../helpers/Storage";
import PostType from "../../types/postType";
import { fetchAllPosts, fetchMyPosts, fetchPosts } from "./postsThunks";

type GradesType = {
    [prop: number]: PostGrade;
};

type StoreType = {
    data: PostType[];
    count: number;
    grades: GradesType;
    marks: number[];
    loading: boolean;
    error?: string;
};

const initialState: StoreType = {
    data: [],
    count: 0,
    grades: Storage.get("grades", {}),
    marks: Storage.get("marks", []),
    loading: false,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        likePost: (state, { payload: PostId }: PayloadAction<number>) => {
            if (state.grades[PostId] === PostGrade.LIKE) {
                delete state.grades[PostId];
            } else {
                state.grades[PostId] = PostGrade.LIKE;
            }

            Storage.set("grades", state.grades);
        },
        dislikePost: (state, { payload: PostId }: PayloadAction<number>) => {
            if (state.grades[PostId] === PostGrade.DISLIKE) {
                delete state.grades[PostId];
            } else {
                state.grades[PostId] = PostGrade.DISLIKE;
            }

            Storage.set("grades", state.grades);
        },
        markPost: (state, { payload: PostId }: PayloadAction<number>) => {
            if (state.marks.includes(PostId)) {
                state.marks = state.marks.filter((id) => id != PostId);
            } else {
                state.marks.push(PostId);
            }
            Storage.set("marks", state.marks);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchAllPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });

        builder.addCase(fetchMyPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchMyPosts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = "Error";
        });

        builder.addCase(fetchMyPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
    },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
    ...postsSlice.actions,
    fetchPosts,
    fetchAllPosts,
    fetchMyPosts,
};
