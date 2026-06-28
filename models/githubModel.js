const db = require("../config/db");

// Save or Update Profile
const saveProfile = async (profile) => {
  const query = `
    INSERT INTO github_profiles (
      username,
      name,
      bio,
      avatar_url,
      followers,
      following,
      public_repos,
      public_gists,
      company,
      location,
      blog,
      twitter_username,
      profile_url,
      github_age,
      follower_repo_ratio,
      developer_level,
      popularity_score,
      profile_completeness,
      created_at,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      bio = VALUES(bio),
      avatar_url = VALUES(avatar_url),
      followers = VALUES(followers),
      following = VALUES(following),
      public_repos = VALUES(public_repos),
      public_gists = VALUES(public_gists),
      company = VALUES(company),
      location = VALUES(location),
      blog = VALUES(blog),
      twitter_username = VALUES(twitter_username),
      profile_url = VALUES(profile_url),
      github_age = VALUES(github_age),
      follower_repo_ratio = VALUES(follower_repo_ratio),
      developer_level = VALUES(developer_level),
      popularity_score = VALUES(popularity_score),
      profile_completeness = VALUES(profile_completeness),
      created_at = VALUES(created_at),
      updated_at = VALUES(updated_at)
  `;

  const values = [
    profile.username,
    profile.name,
    profile.bio,
    profile.avatar_url,
    profile.followers,
    profile.following,
    profile.public_repos,
    profile.public_gists,
    profile.company,
    profile.location,
    profile.blog,
    profile.twitter_username,
    profile.profile_url,
    profile.github_age,
    profile.follower_repo_ratio,
    profile.developer_level,
    profile.popularity_score,
    profile.profile_completeness,
    profile.created_at,
    profile.updated_at,
  ];

  const [result] = await db.promise().execute(query, values);

  return result;
};

const getAllProfiles = async () => {
  const query = `
    SELECT *
    FROM github_profiles
    ORDER BY id DESC
  `;

  const [rows] = await db.promise().query(query);

  return rows;
};

const getProfileByUsername = async (username) => {
  const query = `
    SELECT *
    FROM github_profiles
    WHERE username = ?
  `;

  const [rows] = await db.promise().execute(query, [username]);

  return rows[0];
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfileByUsername,
};