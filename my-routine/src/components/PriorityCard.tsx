import { useState } from 'react';

export default function PriorityCard() {
  // Estado para armazenar a lista de itens
  const [items, setItems] = useState<string[]>(['um', 'dois']);
  const [newItem, setNewItem] = useState<string>('');

  // Função para adicionar um novo item à lista
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  }

  const handleInput = (index: number, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    return updatedItems;
  };

  return (
    <section>
      <h2>Priorities</h2>
      <ol>
        {items.map((item, index) => (
          <li
            key={index}
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={(e) => handleInput(index, e.currentTarget.innerText)}
          >
            {item}
          </li>
        ))}
      </ol>
      <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='Novo Item'/>
      <button type="button" onClick={addItem}>Adicionar Items</button>
    </section>
  );
}
