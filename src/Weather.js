import React from "react";

import "./weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="row row-1">
            <span className="col-6">
              <h1 id="cityName">Stockholm</h1>
              <ul>
                <li id="date"></li>
                <li id="description">Partly cloudy</li>
              </ul>
            </span>
            <span className="col-4">
              {" "}
              <form id="search-form">
                <input
                  type="search"
                  className="search-box form-control"
                  placeholder="Enter a city..."
                  id="city-input"
                  autoComplete="off"
                />{" "}
              </form>
            </span>
            <span className="col-2">
              {" "}
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-80"
                id="search-btn"
              />
            </span>
          </div>

          <div className="row row-2">
            {" "}
            <div className="col-6">
              {" "}
              <div className="d-flex weather-temperature align-items-center">
                <i className="fa-solid fa-sun fontawesome-icon"></i>
                <strong id="cur-temp-nr">2°C</strong>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>20%
                </li>
                <li>
                  Wind: <span id="windSpeed"></span> 5m/s
                </li>
              </ul>
            </div>
            <div className="row row-3 weather-forecast-section" id="forecast">
              <span className="col-2">Monday</span>
              <span className="col-2">Tuesday</span>
              <span className="col-2">Wednesday</span>
              <span className="col-2">Thursday</span>
              <span className="col-2">Friday</span>
              <span className="col-2">Saturday</span>
            </div>
            <div className="row row-4">
              <span className="col-2">
                <i className="fa-solid fa-sun fontawesome-icon"></i>
              </span>
              <span className="col-2">
                <i className="fa-solid fa-snowflake fontawesome-icon"></i>
              </span>
              <span className="col-2">
                <i className="fa-solid fa-sun fontawesome-icon"></i>
              </span>
              <span className="col-2">
                <i className="fa-solid fa-snowflake fontawesome-icon"></i>
              </span>
              <span className="col-2">
                <i className="fa-solid fa-sun fontawesome-icon"></i>
              </span>
              <span className="col-2">
                <i className="fa-solid fa-cloud fontawesome-icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="open-source">
        <small>
          <a
            href="https://github.com/ChiaoH/React-w4-weather-app-homework"
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
  );
}
