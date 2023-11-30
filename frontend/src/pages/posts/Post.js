import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/Post.module.css";
import stamp from "../../assets/post-stamp.png";
import { useSetPostData } from '../../contexts/PostDataContext';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';

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
        content,
        image,
        continent_display,
        holiday_type_display,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const { handleLike, handleUnlike } = useSetPostData();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body className={styles.Title}>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && postPage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />}
                    </div>
                </Media>
            </Card.Body>
            <Card.Body className={styles.Title}>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
            </Card.Body>
            <Row>
                <Col md={6}>
                    <Card.Body>
                        <Card.Img src={image} alt={title} />
                    </Card.Body>
                </Col>
                <Col md={6}>
                    <Card.Body className={`${styles.Text} align-items-center`}>
                        <Card.Img className={styles.Stamp} src={stamp} alt={stamp} right />
                        {content && <Card.Text>{content}</Card.Text>}
                        <br />
                        {holiday_type_display && continent_display && <Card.Text className={styles.Additional}>{holiday_type_display} holiday in {continent_display}</Card.Text>}
                    </Card.Body>
                </Col>
            </Row>

            <Card.Body>
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger placement="top" overlay={<Tooltip className={styles.NoWrap}>You can't like your own post :&#40;</Tooltip>}>
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={() => handleUnlike(like_id, id, setPosts)}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => handleLike(id, setPosts)}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger placement="top" overlay={<Tooltip className={styles.NoWrap}>Log in to like posts :&#41;</Tooltip>}>
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <i className={`${styles.Comment} far fa-comments`} />
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;