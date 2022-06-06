const checkStatus = () => ({ type: 'CHECK_STATUS' });
const initialState = [];

const updateBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default:
      return state;
  }
};

export default updateBooks;
export { checkStatus };
