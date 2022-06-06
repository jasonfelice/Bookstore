const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (payload) => ({ type: 'REMOVE', payload });
const initialState = [{
  id: 1,
  title: 'test',
  author: 'test',
}];

const updateBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default updateBooks;
export { addBook, removeBook };
