import { useState } from 'react';

export default function PriorityCard() {
  // Estado para armazenar a lista de itens
  const [items, setItems] = useState<string[]>(['um', 'doi']);

  // Função para adicionar um novo item à lista
  const addItem = () => setItems((prevItems) => [...prevItems, 'Novo Item']);

  // Função para lidar com mudanças nos itens editáveis
  const handleBlur = (index: number, event: React.FocusEvent<HTMLLIElement>) => {
    const updatedItems = [...items];
    updatedItems[index] = event.currentTarget.innerText;
    setItems(updatedItems);
  };

  return (
    <section>
      <h2>Priorities</h2>
      <button type="button" onClick={addItem}>+</button>
      <ol>
        {items.map((item, index) => (
          <li
            key={index}
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={(event) => handleBlur(index, event)}
          >
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
