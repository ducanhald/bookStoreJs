const api = "http://localhost:3000/book";

function start() {
  getBooks(renderBooks);
  handleCreate();
}

start();
// getBook
function getBooks(callback) {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}
// Create Book
function createBooks(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(api, options)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function renderBooks(Books) {
  const root = document.getElementById("list-book");
  var htmls = Books.map((books) => {
    return `
    <tr>
        <th scope="row">${books.id}</th>
        <td>${books.name}</td>
        <td>${books.author}</td>
        <td onclick = "handelDeleteCourse(${books.id})">Delete</td>
    </tr>`;
  });
  var html = htmls.join("");
  root.innerHTML = html;
}
function handleCreate() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var author = document.querySelector('input[name="author"]').value;
    var formData = {
      name: name,
      author: author,
    };
    createBooks(formData);
  };
}
function handelDeleteCourse(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(api + "/" + id, options)
    .then((response) => {
      return response.json();
    })
    .then(function () {});
}
