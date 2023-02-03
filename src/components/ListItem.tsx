import { Check, Trash } from "phosphor-react";
import styles from "./ListItem.module.css";

interface ListItemProps {
  isDone: boolean;
  content: string;
}

export function ListItem({ isDone, content }: ListItemProps) {
  return (
    <div className={styles.container}>
      <button className={isDone ? styles.toggleSelected : styles.toggle}>
        {isDone ? <Check size={18} /> : null}
      </button>

      <p className={isDone ? styles.textSelected : styles.textItem}>{content}</p>
      <button className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
