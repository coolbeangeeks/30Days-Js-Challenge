const library = {
    name: "City Central Library",
    address: "123 Library St, Booktown",
    established: 1950,
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        genres: ["Fiction", "Classic", "Historical"],
        availableCopies: 4,
      },
      {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        genres: ["Dystopian", "Science Fiction", "Political Fiction"],
        availableCopies: 6,
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        genres: ["Fiction", "Classic", "Tragedy"],
        availableCopies: 3,
      }]
}
// console.log(library)
library['books'].forEach((book_title)=>{
    console.log(book_title.title)
})