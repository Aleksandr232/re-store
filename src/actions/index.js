
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested=()=>{
  return{
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksError=(error)=>{
  return{
    try: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

export const bookAddedToCart=(bookid)=>{
  return{
    type: 'BOOK_ADDED_TO_CART',
    payload: bookid
  }
}

export const bookRemovedFromCart=(bookid)=>{
  return{
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookid
  }
}

export const allBooksRemovedFromCart=(bookid)=>{
  return{
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookid
  }
}

 const fetchBooks=(bookstoreService, dispatch)=>()=>{

 
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data)=>dispatch(booksLoaded(data)))
    .catch((err)=>dispatch(booksError(err)));
};


export {
  fetchBooks
};
