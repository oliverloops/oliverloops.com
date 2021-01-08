import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

// const client_id = "8b4020801e4e4d979728b08c040cd58f";
// const client_secret = "91f67593bf2e4a0385b3d0e1342b900f";
// const refresh_token =
//   "AQCLRb47EsX1CdMj2rl3wWwcMT49iqScOwsDjoUrM09_aKl2fSZu6vGY17a99Vvm0kciS9DuhRw-_0oQW-PJ3JDK2-2UgylZrF3tEtSnawghuFtfH7P0g3fE977PBosFOa0";

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

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// https://accounts.spotify.com/authorize?client_id=8b402080
// 1e4e4d979728b08c040cd58f&response_type=code&redirect_uri=http
// %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing

// curl -H "Authorization: Basic OGI0MDIwODAxZTRlNGQ5Nzk3MjhiMDhjMDQwY2Q1OGY6OTFmNjc1OTNiZjJlNGEwMzg1YjNkMGUxMzQyYjkwMGY=" -d grant_type=authorization_code -d code=AQASCpc50-DQKtNv7909iBE5vQNr7fe5Fo3wUpv-pB1eazCSuLtjqbQgY0Rl8n3x3th7T7k1FmAr3dJLXljw8fAhL93kvyH4eGV4X-iTLq-K4Zswmaho5-AKtUyCfSUuitMKXXvZ6kTYgcqJFJ7llhfDHKEoXSz9UGk8w3AHJfNW8gr7UlvhWnUjZDzbNYbiIVFrCJiE -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
