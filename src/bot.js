const Bot = () => {
const axios = require('axios');

//Config API

const baseURL = 'https://demo-api-capital.backend-capital.com';
const endpoint = '/api/v1/session';

const data = {
  identifier: 'epetrea99@gmail.com',
  password: 'Che7q8q9!?',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    'X-CAP-API-KEY': 'uoc42qCfeL7c0C21'
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
}
//export function Bot
module.exports = Bot;