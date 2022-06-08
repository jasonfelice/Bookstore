import axios from 'axios';

const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (id) => ({ type: 'REMOVE', id });
const getBooks = (payload) => ({ type: 'GET_BOOKS', payload });
const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yUzxVpO3xgGUOTpWEsIb/books';

const fetchBooks = () => async (dispatch) => {
  const res = await axios.get(url);
  const keys = Object.keys(res.data);
  const books = [];
  keys.forEach((key) => {
    books.push({ id: key, ...res.data[key][0] });
  });
  dispatch(getBooks(books));
};

const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`)
    .then(() => dispatch(removeBook(id)))
    .catch((error) => { throw new Error(error); });
};

const postBook = (payload) => async (dispatch) => {
  await axios.post(url, { ...payload, item_id: payload.id })
    .then(() => dispatch(addBook(payload)))
    .catch((error) => { throw new Error(error); });
};

const updateBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((book) => book.id !== action.id);
    case 'GET_BOOKS':
      return action.payload;
    default:
      return state;
  }
};

export default updateBooks;
export {
  fetchBooks, deleteBook, postBook,
};
