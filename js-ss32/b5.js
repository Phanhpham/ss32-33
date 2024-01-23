
function Book(author, name) {
    this.author = author;
    this.name = name;
}

let books = [
    new Book("Author 1", "Book 1"),
    new Book("Author 2", "Book 2"),
    new Book("Author 3", "Book 3"),

];

let searchAuthor = prompt("Nhập tên tác giả:");

let foundBooks = books.filter(book => book.author === searchAuthor);

if (foundBooks.length > 0) {
    
    console.log("Thông tin sách của tác giả " + searchAuthor + ":");
    foundBooks.forEach(book => {
        console.log("Tên sách: " + book.name);
        console.log("Tác giả: " + book.author);
    });
} else {
   
    console.log("Không tìm thấy sách của tác giả " + searchAuthor);
}
