const books={
    title:'How to fight for yourself',
    author:'Abhinav Gupta',
    year:2024,
    book_result:function bookdetail(){
        return `the book detail is ${books.author} and ${books.title}`
    },
    updateYear:function update_year(year){
        return this.year=2025;

    }

}
console.log(books.book_result())
console.log(books.updateYear(books.year))
console.log(books)

