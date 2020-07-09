 import axios from 'axios';
 import React, { useState } from "react";

 
//  const [show, setShow] = useState(null);
//   const [seasons, setSeasons] = useState([]);
//   const [selectedSeason, setSelectedSeason] = useState("");
//   const episodes = seasons[selectedSeason] || [];
 
//  useEffect(() => {
export const fetchShow = () => {
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res =>{
            console.log(res.data);
            console.log(res);
            return res;
        })
        .catch(err =>{
            console.log(err);
        });
    };
