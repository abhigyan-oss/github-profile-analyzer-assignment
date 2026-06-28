const { fetchGitHubProfile } = require("../services/githubService");
const {
  saveProfile,
  getAllProfiles,
  getProfileByUsername,
} = require("../models/githubModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const githubData = await fetchGitHubProfile(username);

    const popularityScore =
      githubData.followers * 2 + githubData.public_repos;

    let completeness = 0;
    if (githubData.bio) completeness += 20;
    if (githubData.company) completeness += 20;
    if (githubData.location) completeness += 20;
    if (githubData.blog) completeness += 20;
    if (githubData.twitter_username) completeness += 20;

    const createdAt = githubData.created_at
      .replace("T", " ")
      .replace("Z", "");

    const updatedAt = githubData.updated_at
      .replace("T", " ")
      .replace("Z", "");

    const githubAge =
      new Date().getFullYear() -
      new Date(githubData.created_at).getFullYear();

    const followerRepoRatio =
      githubData.public_repos > 0
        ? (
            githubData.followers / githubData.public_repos
          ).toFixed(2)
        : 0;

    let developerLevel = "Beginner";

    if (githubData.public_repos >= 50) {
      developerLevel = "Advanced";
    } else if (githubData.public_repos >= 15) {
      developerLevel = "Intermediate";
    }

    const profile = {
      username: githubData.login,
      name: githubData.name,
      bio: githubData.bio,
      avatar_url: githubData.avatar_url,
      company: githubData.company,
      location: githubData.location,
      blog: githubData.blog,
      twitter_username: githubData.twitter_username,
      profile_url: githubData.html_url,

      followers: githubData.followers,
      following: githubData.following,
      public_repos: githubData.public_repos,
      public_gists: githubData.public_gists,

      github_age: githubAge,
      follower_repo_ratio: followerRepoRatio,
      developer_level: developerLevel,

      popularity_score: popularityScore,
      profile_completeness: completeness,

      created_at: createdAt,
      updated_at: updatedAt,
    };

    await saveProfile(profile);

    res.status(201).json({
      success: true,
      message: "Profile analyzed and saved successfully",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getProfileByUsername(username);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeProfile,
  getProfiles,
  getProfile,
};