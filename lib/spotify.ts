import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

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

/* Access this URI with spotify signed out and client_id to obtaint auth code */

// https://accounts.spotify.com/authorize?client_id=8b4020801e4e4d979728b08c040cd58f&response_type=code&redirect_uri=http
// %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing

/* Spotify Development Authorization */

// https://accounts.spotify.com/authorize?client_id=8b402080
// 1e4e4d979728b08c040cd58f&response_type=code&redirect_uri=http
// %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing

// curl -H "Authorization: Basic OGI0MDIwODAxZTRlNGQ5Nzk3MjhiMDhjMDQwY2Q1OGY6ZmE3OTY0NTYxODA4NDRkOThlZGJlZDRjZDhlYmRlMTA=" -d grant_type=authorization_code -d code=AQBLvaiU12TwCh5fzCh_G_6uXYoT4wEPPXHYAWVk0eUnfoat7LlJSSqK-1AaArIHMcpO7BZodLpoG0DBTOzs_HedujuBMymO7TpGhZcFsa53WOeb1DUG3FNujE-nmO-94gK1HgwhBln6o4tZUY_4srV4nx66wEME7m7OpwXYjpG9V5YGVfJbs6XK6AYjIDMMQApcaUAk -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

/* Spotify Vercel Production Authorization */

// https://accounts.spotify.com/authorize?client_id=8b402080
// 1e4e4d979728b08c040cd58f&response_type=code&redirect_uri=https
// %3A%2F%2Foliverloops.com/&scope=user-read-currently-playing

// curl -H "Authorization: Basic OGI0MDIwODAxZTRlNGQ5Nzk3MjhiMDhjMDQwY2Q1OGY6OTFmNjc1OTNiZjJlNGEwMzg1YjNkMGUxMzQyYjkwMGY=" -d grant_type=authorization_code -d code=AQB7yjRjGdMXt8gbr4pegahZ9C00On_iLBbqvqon_HmBHLpdFLFJZyzxYgbAhIGIcUnppTgh0B0epRlXDYIfHmF3JLwd1G6ftSMTaWcRhRUNNlRGB9WHOY0E_NyTibSAIwHdebRew3faxb27NlNmFLS4_xacPcJjunD429mVsRhUmqxUBC2mjhEs374fCB9DmXt1a85SlIeQ -d redirect_uri=https%3A%2F%2Foliverloops.com/ https://accounts.spotify.com/api/token

//{refresh_token":"AQA_KwJb8arlfATz_tGrTABvtsS4CDFBA7QxlcD-MeRiyF4nLpXMQLPjk0H16KCvnWZHMAlKxlOD38hzWVZjxHqvvOGtvUUGpX3r6ABK7Rbs1DdJtOHI5_ONCQulErChygk","scope":"user-read-currently-playing"}
