import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <div class="row row-1">
                <span class="col-6">
                  <h1 id="cityName">Stockholm</h1>
                  <ul>
                    <li id="date"></li>
                    <li id="description">Partly cloudy</li>
                  </ul>
                </span>

                <span class="col-4">
                  <form id="search-form" style="display: inline !important">
                    <input
                      type="search"
                      class="search-box form-control"
                      placeholder="Enter a city..."
                      id="city-input"
                      autocomplete="off"
                    />
                  </form>
                </span>
                <span class="col-2">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-info w-80"
                    id="search-btn"
                  />
                </span>
              </div>

              <div class="row row-2">
                <div class="col-6">
                  <div class="d-flex weather-temperature align-items-center">
                    <img src="" alt="" id="icon" />

                    <strong id="cur-temp-nr">2</strong>
                    <span class="units">
                      <a href="#" id="celsius-link" class="active">
                        °C
                      </a>
                      |{" "}
                      <a href="#" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>

                <div class="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind: <span id="windSpeed"></span> m/s
                    </li>
                  </ul>
                </div>
              </div>

              <div class="weather-forecast-section" id="forecast"></div>
            </div>

            <div class="open-source">
              <small>
                <a
                  href="https://github.com/ChiaoH/weather-app-w7-final-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
                by
                <a
                  href="https://www.linkedin.com/in/wu-chiao-huang-642a07255/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wu-chiao Huang
                </a>
                . Photo by
                <a href="https://unsplash.com/@paulberthelon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Paul Berthelon Bravo
                </a>
                on
                <a href="https://unsplash.com/wallpapers/nature/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
                .
              </small>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
