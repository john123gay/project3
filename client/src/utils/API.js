import axios from "axios";

export default {
  waterPlant: function() {
   // return axios.get("https://69.120.124.59:5050/buzz");
  },
  timeWatered: function(obj) {
    return axios.post("/api/water", obj);
  },
  getDates: function() {
    return axios.get("/api/water");
  }
};
