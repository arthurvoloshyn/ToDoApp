export const ListItemStyles = { height: '64px' };

export const ListItemTextStyles = completed => {
  const textDecoration = completed ? 'line-through' : 'none';

  return {
    textDecoration,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '7rem'
  };
};
