const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";
const commentsURL = "https://jsonplaceholder.typicode.com/comments?postId=1";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((responce) => {
//     return responce.json();
//   })
//   .then((value) => {
//     const names = value.map((name) => name.name);
//     console.log(names);
//   });

// fetch all the data from the users api
async function fetchUsers() {
  try {
    const data = await fetch(usersURL);
    const name = await data.json();
    const usersNames = name.map((user) => user.name);
    console.log(usersNames);
  } catch (error) {
    console.log("the error is :", error);
  }
}

fetchUsers();

// post a data to the api
async function Post() {
  try {
    const post = fetch(postsURL, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    const responce = await post;
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.log("the error is :", error);
  }
}

Post();

async function fetchComments() {
  try {
    const fetchData = await fetch(commentsURL);
    const comments = await fetchData.json();
    console.log(comments);
  } catch (error) {
    console.log("the error is :", error);
  }
}

fetchComments();
