import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us"

//This exports our api call so that TableContainer can use it
export default {
    searchName: function() {
        return axios.get(BASEURL);
    }
}