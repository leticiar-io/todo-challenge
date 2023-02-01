import { ClipboardText } from "phosphor-react";
import styles from "./ListContent.module.css";
import { ListItem } from "./ListItem";

export function ListContent() {
  return (
    <div className={styles.container}>
      <header className={styles.containerHeader}>
        <div className={styles.createdTaskCounter}>
          Tarefas Criadas <span>0</span>
        </div>
        <div className={styles.doneTaskCounter}>
          Concluidas 
          <span>
            0 de 0
          </span>
        </div>
      </header>

      
      <div className={styles.emptyList}>
        <ClipboardText size={72}></ClipboardText>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <main className={styles.listItemsContainer}>
        <ListItem />
      </main>
    </div>
  );
}
