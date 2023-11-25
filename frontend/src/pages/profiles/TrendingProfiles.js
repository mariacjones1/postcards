import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from '../../contexts/ProfileDataContext';
import Profile from './Profile';

const TrendingProfiles = () => {
    const { trendingProfiles } = useProfileData();

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