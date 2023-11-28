import React from 'react';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import postStyles from "../../styles/Post.module.css";
import styles from "../../styles/PostPreview.module.css";
import { useSetPostData } from '../../contexts/PostDataContext';

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        image,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const { handleLike, handleUnlike } = useSetPostData();

    return (
        <Card className={postStyles.Post}>
            <Card.Body className={postStyles.Title}>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && postPage && "..."}
                    </div>
                </Media>
            </Card.Body>
            <Card.Body>
                <Link to={`/posts/${id}`}>
                    <Card.Img className={styles.ImagePreview} src={image} alt={title} />
                </Link>
            </Card.Body>
            <Card.Body className={postStyles.Title}>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
            </Card.Body>
            <Card.Body>
                <div className={postStyles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip className={postStyles.NoWrap}>
                                    You can't like your own post :&#40;
                                </Tooltip>
                            }
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={() => handleUnlike(like_id, id, setPosts)}>
                            <i className={`fas fa-heart ${postStyles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => handleLike(id, setPosts)}>
                            <i className={`far fa-heart ${postStyles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip className={postStyles.NoWrap}>
                                    Log in to like posts :&#41;
                                </Tooltip>
                            }
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;