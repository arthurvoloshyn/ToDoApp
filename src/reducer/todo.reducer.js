import uuid from 'uuid';

const reducer = (state, { type, task, id }) => {
  switch (type) {
    case 'ADD':
      return [...state, { id: uuid(), task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo => (todo.id === id ? { ...todo, task } : todo));
    default:
      return state;
  }
};

export default reducer;
