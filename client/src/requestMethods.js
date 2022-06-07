import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTc0NzRjNTE3MmQxODA3Y2M5OGQ4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDI2MjAwNywiZXhwIjoxNjU0NTIxMjA3fQ.qP-AjtvHSkzgLyqg3tH7ga79J3LI_b4gI6NQ0N4eh7c";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser?.accessToken;


  export const publicRequest = axios.create({
      baseURL:BASE_URL,
  });

  
  export const userRequest = axios.create({
      baseURL:BASE_URL,
      headers: {token: `Bearer ${TOKEN}`}
  });

