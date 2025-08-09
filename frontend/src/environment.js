let IS_PROD = true;
const server = IS_PROD ?
    "https://echomeetba.onrender.com" :

    "http://localhost:8000"


export default server;

// const environment = {
//   API_BASE_URL: "http://localhost:8000/api/v1",
//   SOCKET_URL: "http://localhost:5000"
// };

// export default environment;
