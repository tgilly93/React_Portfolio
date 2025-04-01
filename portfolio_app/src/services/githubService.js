const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_API_URL  = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export const fetchRepositories = async () => {
    try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching Github repos:", error);
        return [];
    }
};

export const fetchProfilePic = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!response.ok) {
            throw new Error("Failed to fetch profile picture");
        }
        const data = await response.json();
        return data.avatar_url;
    } catch (error) {
        console.error("Error fetching Github profile picture:", error);
        return null;
    }
};