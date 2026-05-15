class Books{
    book_id;
    book_name;
    book_title;

    show() {
        console.log("Book Id = " + this.book_id);
        console.log("Book name = " + this.book_name);
        console.log("Book title = " + this.book_title );
    }
}
let book = new Books()
book.book_id = 1;
book.book_name = "C++";
book.book_title = "English";
book.show();
