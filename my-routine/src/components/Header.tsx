import { useState } from "react";

export default function Header() {
    // Estado para armazenar o título
    const [title, setTitle] = useState('Daily Planner');
  
    // Função para lidar com mudanças no conteúdo editável
    const handleBlur = (event: React.FocusEvent<HTMLHeadingElement>) => {
      setTitle(event.currentTarget.innerText);
    };
  
    return (
      <>
        <h1
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={handleBlur}
        >
          {title}
        </h1>
      </>
    );
  }