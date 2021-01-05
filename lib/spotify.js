import querystring from "querystring";

// const {
//   SPOTIFY_CLIENT_ID: client_id,
//   SPOTIFY_CLIENT_SECRET: client_secret,
//   SPOTIFY_REFRESH_TOKEN: refresh_token,
// } = process.env;

const client_id = "8b4020801e4e4d979728b08c040cd58f";
const client_secret = "91f67593bf2e4a0385b3d0e1342b900f";
const refresh_token = "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  console.log(`Access token is: ${access_token}`);

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
