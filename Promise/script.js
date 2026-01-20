// create a promise version of eventListner

const btn = document.querySelector("#button");

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

addEventListenerPromise(btn, "click").then((e) => {
  console.log("got clicked");
});

//shoft hand promise
Promise.resolve("value").then((message) => {
  console.log(message);
});

/* promise all its return array of all the promise when they success 
- to get the first one that success promise.any or race 
-allsettled wait all the promise to finished
*/

Promise.all([Promise.resolve("1"), Promise.resolve("2"), Promise.resolve("3")])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
