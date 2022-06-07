const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (id) => ({ type: 'REMOVE', id });
const initialState = [];

const updateBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default updateBooks;
export { addBook, removeBook };
