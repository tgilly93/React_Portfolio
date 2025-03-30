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
}