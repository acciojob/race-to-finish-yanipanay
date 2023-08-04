let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 2);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4");
  }, 4);
});

let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 5");
  }, 5);
});

window.promises = [p2, p3, p4, p1, p5];

Promise.any(promises).then((value) => {
  const div = document.getElementById("output");
  div.innerHTML = value;
});