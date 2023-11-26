export const followerHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
        ? {
            ...profile,
            followers_count: profile.followers_count + 1,
            recent_followers_count: profile.recent_followers_count + 1,
            following_id,
        }
        : profile.is_owner
            ? {
                ...profile,
                following_count: profile.following_count + 1
            }
            : profile;
};