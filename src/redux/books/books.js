const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (payload) => ({ type: 'REMOVE', payload });
const initialState = [];

const updateBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state];
    default:
      return state;
  }
};

export default updateBooks;
export { addBook, removeBook };
