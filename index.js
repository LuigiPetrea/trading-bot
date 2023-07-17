const axios = require('axios');

//Config API

const baseURL = 'https://demo-api-capital.backend-capital.com';
const endpoint = '/api/v1/session';

const data = {
  identifier: 'EMAIL',
  password: 'PASSWORD',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-CAP-API-KEY': 'APIKEY'
  },
};

//Function Get Ballance from account
function getBalance(){
axios.post(`${baseURL}${endpoint}`, data, config)
  .then(response => {
    console.log(response.data.accountInfo.balance);
    return response.data.accountInfo.balance;
  })
  .catch(error => {
    console.error(error);
    return error;
});

}
getBalance()