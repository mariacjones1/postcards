import React, { useState } from 'react';
import { Col, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import { MoreDropdown } from '../../components/MoreDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Comment.module.css';
import postStyles from "../../styles/Post.module.css";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        comment_likes_count,
        comment_like_id,
        id,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}`);
            setPost(prevPost => ({
                results: [{
                    ...prevPost.results[0],
                    comments_count: prevPost.results[0].comments_count - 1
                }]
            }));

            setComments(prevComments => ({
                prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <hr />
            <Media>
                <Link className={styles.Avatar} to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                <Col xs={2} className={styles.Like}>
                    <div className={styles.Dropdown}>
                        {is_owner && (
                            <MoreDropdown
                                handleEdit={() => setShowEditForm(true)}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                    <div className={postStyles.NoWrap}>
                        {is_owner ? (
                            <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own comment :&#40;</Tooltip>}>
                                <i className="far fa-heart" />
                            </OverlayTrigger>
                        ) : comment_like_id ? (
                            <span onClick={() => { }}>
                                <i className={`fas fa-heart ${postStyles.Heart}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => { }}>
                                <i className={`far fa-heart ${postStyles.HeartOutline}`} />
                            </span>
                        ) : (
                            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like comments :&#41;</Tooltip>}>
                                <i className="far fa-heart" />
                            </OverlayTrigger>
                        )}
                        {comment_likes_count}
                    </div>
                </Col>
            </Media>
        </div>
    );
};

export default Comment;