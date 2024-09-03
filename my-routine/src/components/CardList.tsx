import { useState } from "react";

type CardListProps = {
    title: string;
  };
  
  export default function CardList({ title }: CardListProps) {
    const [items, setItems] = useState<string[]>(['Um', 'Dois', 'Três']);
    const [newItem, setNewItem] = useState<string>('');
  
    const addItem = () => {
      if (newItem.trim() !== '') {
        setItems([...items, newItem]);
        setNewItem('');
      }
    };
  
    const handleInput = (index: number, value: string) => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index] = value;
        return updatedItems;
      });
    };
  
    return (
      <section className="row-span-3">
        <h2>{title}</h2>
        <ul>
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
        </ul>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Novo item"
        />
        <button onClick={addItem}>Adicionar Item</button>
      </section>
    );
  }