import { Check, Trash } from "phosphor-react";
import styles from "./ListItem.module.css";

export interface ListItemProps {
  isDone: boolean;
  content: string;
  id: string;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ListItem({ isDone, id, content, onSelect, onDelete }: ListItemProps) {
  function handleSelectedTodo() {
    onSelect(id)
  }

  function handleDeleteTodo() {
    onDelete(id)
  }
  
  return (
    <div className={styles.container}>
      <button onClick={handleSelectedTodo} className={isDone ? styles.toggleSelected : styles.toggle}>
        {isDone ? <Check size={18} /> : null}
      </button>

      <p className={isDone ? styles.textSelected : styles.textItem}>{content}</p>
      <button onClick={handleDeleteTodo} className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
