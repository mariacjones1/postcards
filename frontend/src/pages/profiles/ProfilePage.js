import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Asset from "../../components/Asset";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import TrendingProfiles from './TrendingProfiles';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import { useProfileData, useSetProfileData } from '../../contexts/ProfileDataContext';
import InfiniteScroll from "react-infinite-scroll-component";
import PostPreview from "../posts/PostPreview";
import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profilePosts, setProfilePosts] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] }
                }));
                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.followers_count}</div>
                            <div>followers</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.following_count}</div>
                            <div>following</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {currentUser && !is_owner && (
                        profile?.following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.NavyOutline}`}
                                onClick={() => handleUnfollow(profile)}
                            >
                                unfollow
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Navy}`}
                                onClick={() => handleFollow(profile)}
                            >
                                follow
                            </Button>
                        )
                    )}
                </Col>
                <Col className="p-3">
                    <Row className="justify-content-center no-gutters">
                        {profile?.location &&
                            <Col xs={3} className="my-2">
                                <div><strong>Location</strong></div>
                                <div>{profile.location}</div>
                            </Col>
                        }
                        {profile?.favourite_country &&
                            <Col xs={3} className="my-2">
                                <div><strong>Favourite country</strong></div>
                                <div>{profile.favourite_country}</div>
                            </Col>
                        }
                        <Col xs={3} className="my-2">
                            <div><strong>Travel experience</strong></div>
                            <div>{profile?.travel_experience_display}</div>
                        </Col>
                    </Row>
                    <hr />
                    {profile?.content &&
                        <Row className="justify-content-center no-gutters">
                            {profile.content}
                        </Row>
                    }
                </Col>
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{profile?.owner}'s' posts</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <PostPreview key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResults}
                    message={`No results found, ${profile?.owner} hasn't posted yet.`}
                />
            )}
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
                <TrendingProfiles />
            </Col>
        </Row>
    );
}

export default ProfilePage;