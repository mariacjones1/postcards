import React from 'react';
import { Col, Media, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Comment.module.css';
import postStyles from "../../styles/Post.module.css";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        comment_likes_count,
        comment_like_id
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div>
            <hr />
            <Media>
                <Link className={styles.Avatar} to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <Row>
                        <span className={styles.Owner}>{owner}</span>
                        <span className={styles.Date}>{updated_at}</span>
                    </Row>
                    <Row>
                        <p>{content}</p>
                    </Row>
                </Media.Body>
                <Col xs={2} className={styles.Like}>
                    {is_owner ? (
                        <OverlayTrigger placement="top" overlay={<Tooltip className={postStyles.NoWrap}>You can't like your own comment :&#40;</Tooltip>}>
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
                        <OverlayTrigger placement="top" overlay={<Tooltip className={postStyles.NoWrap}>Log in to like comments :&#41;</Tooltip>}>
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {comment_likes_count}
                </Col>
            </Media>
        </div>
    );
};

export default Comment;