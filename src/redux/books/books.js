const addBook = () => ({ type: 'ADD' });
const removeBook = () => ({ type: 'REMOVE' });
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
