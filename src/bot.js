const Bot = () => {

const axios = require('axios');
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

// Function Get Balance from account
function getBalance() {
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

// Function get market price
async function getMarketPrice(epic, resolution = 'MINUTE', max = 10, from, to, securityToken, cst) {
  const url = `https://api-capital.backend-capital.com/api/v1/prices/${epic}`;
  const params = {
    resolution,
    max,
    from,
    to
  };
  const headers = {
    'Content-Type': 'application/json',
    'X-SECURITY-TOKEN': securityToken,
    'CST': cst
  };

  try {
    const response = await axios.get(url, { params, headers });
    console.log('Solicitare reușită');
    console.log(response.data);
    // Poți adăuga aici codul pentru a procesa răspunsul și a utiliza prețurile de piață istorice
  } catch (error) {
    console.error('A apărut o eroare în solicitare:', error.response.data);
  }
}
const epic = 'AAPL'; // Epopeea instrumentului
const resolution = 'MINUTE'; // Rezoluție (opțional)
const max = 10; // Numărul maxim de valori (opțional)
const from = '2022-02-24T00:00:00'; // Data de începere (opțional)
const to = '2022-02-24T01:00:00'; // Data de încheiere (opțional)
const securityToken = 'uoc42qCfeL7c0C21'; // Token de cont
const cst = 'ENTER_OBTAINED_CST_TOKEN'; // Token de acces

getMarketPrice(epic, resolution, max, from, to, securityToken, cst);
// Example usage
getBalance();
}
//export function Bot
module.exports = Bot;