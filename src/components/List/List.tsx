import React from 'react';

interface ListProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItems }: ListProps<T>) {
  return <div className='grow'>{items.map(renderItems)}</div>;
}

export default List;
