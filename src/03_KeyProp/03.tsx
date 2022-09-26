// Review following code snippet and answer questions:
//     1) What’s wrong with this code snippet?
//     2) How can we improve it?
//     3) Are there any cases when this code can be used with no modification?

import { FC } from "react";

export interface Book {
    id: string;
    name: string;
}

// export const BooksList: FC<{ books: Book[] }> = ({books}) => {
//     return (
//         <ul>
//             {books.map((book, i) => <li key={i}>{book.name}</li>}) }
//         </ul>
//     )
// }

// Answers
//     1) We might face following issues when we use index value as key attribute when creating a list:
//         - Performance Issues due to unnecessary re-renders.
//         - Issues in data mapping in case list items are sorted, filtered, or deleted.
//        Unexpected token }
//     2) to choose 'id' param as a key,
//     3) Yes, with no modification array

//whit changes

export const BooksListWithChanges: FC<{ books: Book[] }> = ({books}) => {
    return (
        <ul>
            {books.map((book) => <li key={book.id}>{book.name}</li>)}
        </ul>
    )
}