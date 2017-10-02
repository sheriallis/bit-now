const usd = document.getElementById("usd"),
  gbp = document.getElementById("gbp"),
  eur = document.getElementById("eur"),
  btn = document.getElementById("btn");

const loadData = function() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      const usdRate = data.bpi.USD.rate;
      const gbpRate = data.bpi.GBP.rate;
      const eurRate = data.bpi.EUR.rate;

      usd.innerHTML = "&dollar; " + usdRate;
      gbp.innerHTML = "&pound; " + gbpRate;
      eur.innerHTML = "&euro; " + eurRate;
    }
  };

  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  xhr.send();
};

window.onload = loadData;

btn.addEventListener("click", loadData);
