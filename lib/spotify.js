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

/* Spotify development Authorization */

// https://accounts.spotify.com/authorize?client_id=8b402080
// 1e4e4d979728b08c040cd58f&response_type=code&redirect_uri=http
// %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing

// curl -H "Authorization: Basic OGI0MDIwODAxZTRlNGQ5Nzk3MjhiMDhjMDQwY2Q1OGY6OTFmNjc1OTNiZjJlNGEwMzg1YjNkMGUxMzQyYjkwMGY=" -d grant_type=authorization_code -d code=AQASCpc50-DQKtNv7909iBE5vQNr7fe5Fo3wUpv-pB1eazCSuLtjqbQgY0Rl8n3x3th7T7k1FmAr3dJLXljw8fAhL93kvyH4eGV4X-iTLq-K4Zswmaho5-AKtUyCfSUuitMKXXvZ6kTYgcqJFJ7llhfDHKEoXSz9UGk8w3AHJfNW8gr7UlvhWnUjZDzbNYbiIVFrCJiE -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

/* Spotify Vercel production Authorization */

// https://accounts.spotify.com/authorize?client_id=8b402080
// 1e4e4d979728b08c040cd58f&response_type=code&redirect_uri=https
// %3A%2F%2Foliverloops.com/&scope=user-read-currently-playing

// curl -H "Authorization: Basic OGI0MDIwODAxZTRlNGQ5Nzk3MjhiMDhjMDQwY2Q1OGY6OTFmNjc1OTNiZjJlNGEwMzg1YjNkMGUxMzQyYjkwMGY=" -d grant_type=authorization_code -d code=AQB7yjRjGdMXt8gbr4pegahZ9C00On_iLBbqvqon_HmBHLpdFLFJZyzxYgbAhIGIcUnppTgh0B0epRlXDYIfHmF3JLwd1G6ftSMTaWcRhRUNNlRGB9WHOY0E_NyTibSAIwHdebRew3faxb27NlNmFLS4_xacPcJjunD429mVsRhUmqxUBC2mjhEs374fCB9DmXt1a85SlIeQ -d redirect_uri=https%3A%2F%2Foliverloops.com/ https://accounts.spotify.com/api/token

//{"access_token":"BQC_nKmSsuENK8IEdKC7EdJfQGiNPpz6xDR8GfofXHcFjWs68zdBl0DgV9MW4Vr7sxNRwmRbXdZq319YKyxpvWgYrlG_PiApze5oWzQKp3sA1r6CcmLeG2i1taLb2Umo3AM3zwPy_1desLKuH0GDiAZ9tT0eP-HKpXNYWQJukaI","token_type":"Bearer","expires_in":3600,"refresh_token":"AQBb1Cb7olt-9GMMN7tETlszJyDFXlH7-_zxpkxQX6uKTbbP0qIbwSSzxtKwaoldn116EKUGCQrWbenLbSREJJM7POA4276CkUL8vbhUeQyIffXrUhOSrvyjNSO-9ZuLbGg","scope":"user-read-currently-playing"}
