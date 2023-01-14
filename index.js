https://github.com/sudo-riham/phase-1-fetch-lab.gitfunction fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => { return resp.json() })
    // .then((json) => console.log(json))
    .then((json) => { return renderBooks(json) })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});