import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { followHelper, unfollowHelper } from '../utils/utils';
import { useCurrentUser } from './CurrentUserContext';

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
        trendingProfiles: { results: [] }
    });

    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id))
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id))
                },
                trendingProfiles: {
                    ...prevState.trendingProfiles,
                    results: prevState.trendingProfiles.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id))
                }
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnfollow = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile))
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile))
                },
                trendingProfiles: {
                    ...prevState.trendingProfiles,
                    results: prevState.trendingProfiles.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile))
                }
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: popular }, { data: trending }] = await Promise.all([
                    axiosReq.get("/profiles/?ordering=-followers_count"),
                    axiosReq.get("/profiles/?ordering=-recent_followers_count")
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: popular,
                    trendingProfiles: trending
                }));
            } catch (err) {
                // console.log(err);
            }
        };
        handleMount();
    }, [currentUser]);

    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={{ setProfileData, handleFollow, handleUnfollow }}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};