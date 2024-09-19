async function getCurrencies() {
  const url = "https://www.cbr-xml-daily.ru/daily_json.js";
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log("ОШИБКА НАХУЙ - ", error);
    return;
  }

  console.log(data);
  getDeployValue(data);
}
const getDeployValue = (data) => {
  let usd = data.Valute.USD.Value.toFixed(2);
  let eur = data.Valute.EUR.Value.toFixed(2);
  let aed = data.Valute.AED.Value.toFixed(2);
  const usdElement = document.getElementById("usd");
  const eurElement = document.getElementById("eur");
  const aedElement = document.getElementById("aed");
  usdElement.innerText = usd;
  eurElement.innerText = eur;
  aedElement.innerText = aed;
};
getCurrencies();
