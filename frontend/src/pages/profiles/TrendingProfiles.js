import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from './Profile';

const TrendingProfiles = () => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        trendingProfiles: { results: [] },
    });
    const { trendingProfiles } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/profiles/?ordering=-recent_followers_count"
                );
                setProfileData((prevState) => ({
                    ...prevState,
                    trendingProfiles: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);

    return (
        <Container className={appStyles.Content}>
            {trendingProfiles.results.length ? (
                <>
                    <p>Trending profiles</p>
                    {trendingProfiles.results.slice(0, 5).map((profile) => (
                        <Profile key={profile.id} profile={profile} />
                    ))}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default TrendingProfiles;