import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+";
const APIKEY = "&key=AIzaSyBsj9UV8OWocfEcXd0k2x2ay5fOJ1IcyYk";

export default {
  signup: function(user) {
    console.log("inside signup " + user);
    //return("signup return")
    return axios.post("/auth/signup",user);
 },
 login: function(user) {
    console.log("inside login " + user);
    //return("signup return")
    return axios.post("/auth/signin",user);
 }

  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }


};