const { default: axios } = require("axios");

const SendEmail=(data)=>axios.post('http://localhost:3000/app/api/send',data);
// const SendEmail =(data)=>axios.get('/api/send',data)
//   .then(response => {
//     // handle success
//     const SendEmail=(data)=>axios.post('/api/send',data);
//   })
//   .catch(error => {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.error('Error status:', error.response.status);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Error request:', error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error message:', error.message);
//     }
//   });


export default{
    SendEmail
}