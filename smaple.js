// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET/PUT/POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: {

//     }
// })
//Async operation with promises
fetch("someURL")
  .then((response) => console.log(`inside response`))
  .catch((err) => console.log(err));

async function fetchAPI() {
  try {
    const response = await fetch("https://example.org/products.json");
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}
fetchAPI().then((res) => console.log(res));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => console.log(response))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
