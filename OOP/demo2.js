class Books{
    #book_id;
    #book_name;
    #book_title;

    info(id,name,title){
        this.#book_id = id
        this.#book_name = name
        this.#book_title = title 

    }
    show(){
        console.log("Book_id = " + this.#book_id)
        console.log("Book_name = " + this.#book_name)
        console.log("Book_tilte = " + this.#book_title)
    }
    let book = new Books()
    book.info(100,"Khmer coder","khmer angkor")
    book.show()
}