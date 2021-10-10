fetch("http://localhost:3000/book")
  .then((response) => {
    return response.json();
  })
  .then((book) => {
    const root = document.getElementById("root");
    var htmls = book.map((books) => {
      return `
    <tr ><th scope="row">${books.id}</th>
    <td>${books.name}</td>
    <td>${books.author}</td>
  </tr>`;
    });
    var html = htmls.join("\n");
    root.innerHTML = html;
  });
