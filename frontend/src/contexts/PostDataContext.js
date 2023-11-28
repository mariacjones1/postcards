import { createContext, useContext, useState } from 'react';
import { axiosRes } from '../api/axiosDefaults';

export const PostDataContext = createContext();
export const SetPostDataContext = createContext();
export const usePostData = () => useContext(PostDataContext);
export const useSetPostData = () => useContext(SetPostDataContext);

export const PostDataProvider = ({ children }) => {
    const [postData, setPostData] = useState({});

    const handleLike = async (id, setPosts) => {
        try {
            const { data } = await axiosRes.post("/likes/", {
                post: id
            });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                })
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async (like_id, id, setPosts) => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                })
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <PostDataContext.Provider value={postData}>
            <SetPostDataContext.Provider value={{ setPostData, handleLike, handleUnlike }}>
                {children}
            </SetPostDataContext.Provider>
        </PostDataContext.Provider>
    );
};