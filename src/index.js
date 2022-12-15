import setup from "./setup";
import "./style.css";

async function getCity(name) {
  try {
    const API_KEY = "787a40f37ca087115dfe83b8d11ddfc6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;

    const res = await fetch(url, { mode: "cors" });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

const DOM = function () {
  const form = document.querySelector("form");
  const input = document.querySelector("#search");
  const dataBox = document.querySelector(".data");

  function render(data) {
    let markup = "";
    if (data.cod === "404") {
      markup = `<h3>${data.message}</h3>`;
    } else {
      markup = `
        <div class="temp-container">
            <div class="temp">
                ${Math.floor(data.main.temp - 273.15)}°
                <span class="after-temp">C</span>
            </div>
        </div>

        <div class="temp-detail">
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Feels Like: ${Math.floor(
              ((data.main.feels_like - 273.15) * 9) / 5 + 32
            )}F</p>
            <p>wind: ${data.wind.speed}</p>
            <p>humudity: ${data.main.humidity}%</p>
        </div>`;
    }

    dataBox.textContent = "";
    dataBox.insertAdjacentHTML("beforeend", markup);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    getCity(input.value).then((city) => {
      render(city);
    });

    input.value = "";
  });
};

setup();
DOM();
