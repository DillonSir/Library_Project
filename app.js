console.log("Hello World!\n==========\n");

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this, (read = read);
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.DOMelements = {
      title: document.querySelector("#title"),
      author: document.querySelector("#author"),
      hasRead: document.querySelector("#read"),
      form: document.querySelector("form"),
      tbody: document.querySelector("#table > tbody"),
    };

    this.DOMelements.form.addEventListener("submit", (event) => {
      event.preventDefault();

      this.addBook(
        this.DOMelements.title.value,
        this.DOMelements.author.value,
        this.DOMelements.hasRead.checked
      );

      this.DOMelements.title.value = "";
      this.DOMelements.author.value = "";
      this.DOMelements.hasRead.checked = false;
    });

    this.bookCount = 1;
    this.books = [new Book("Name of the Wind", "Patruck Rothfuss", true)];

    this.books.forEach((book) => this.updateDOM(book));
  }

  addBook(title, author, read) {
    let newBook = new Book(title, author, read);
    this.books.push(newBook);
    this.bookCount++;

    this.updateDOM(newBook);
  }

  updateDOM(book) {
    let tr = document.createElement("tr");
    let tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;
    let tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;
    let tdRead = document.createElement("td");
    let readCheckbox = document.createElement("input");
    readCheckbox.addEventListener("change", () => {
      book.toggleRead();
      tr.style.backgroundColor = book.read ? "#DDD" : "#FFF";
    });
    readCheckbox.type = "checkbox";
    readCheckbox.checked = book.read;
    tdRead.appendChild(readCheckbox);

    tr.style.backgroundColor = book.read ? "#DDD" : "#FFF";
    tr.append(tdTitle, tdAuthor, tdRead);
    this.DOMelements.tbody.appendChild(tr);
  }
}

new Library();
