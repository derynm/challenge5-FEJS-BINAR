import { FETCH_DATA } from "./types";

const axios = require("axios");

var config = {
  method: "get",
  url: "https://rent-cars-api.herokuapp.com/admin/car",
  headers: {},
};

function fetchCar() {
  return (dispatch) => {
    axios(config)
      .then(function (response) {
        dispatch({
          type: FETCH_DATA,
          carData: response,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export { fetchCar };
