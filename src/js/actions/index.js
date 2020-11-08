import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

//"Error: Actions must be plain objects. Use custom middleware 
//for async actions". We cannot call Fetch from within an action 
//creator in Redux.
// export function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(json => {
//             return { type: "DATA_LOADED", payload: json }
//         });
// }

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }

// export function getData() {
//     return { type: "DATA_REQUESTED" };
// }