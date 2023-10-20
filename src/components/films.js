import React, { useEffect, useState } from "react";
import "./films.css";

export default function Films() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(movies(1))
    console.log(data)
  }, [])

  async function movies(page) {
    try {
      const fetch = require("node-fetch");
      const url =
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWFiM2RiZDM1NmQ5ZjMzMTYwNmVkMWFjY2EyYzc0ZSIsInN1YiI6IjY1MmU1MmYzZWE4NGM3MDE0ZTA2YWRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Z4slwiIAo2at6K-ABmpTMNb8H0k_L1VbBQ5JNTJBGU",
        },
      };

      fetch(url, options)
        .then((res) => {
          //console.log(res.json());
          setData(res.json())
        })
        .catch((err) => console.error("error:" + err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="filmsBody">
      <h1>Films</h1>

      <form>
        <input />
        <button>Search</button>
      </form>

      <div>{}</div>
      <div></div>
    </div>
  );
}
