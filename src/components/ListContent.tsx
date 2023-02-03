import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./ListContent.module.css";
import { ListItem } from "./ListItem";
import { TaskProps } from "./NewTask";

export interface ListContentProps {
  task: TaskProps[];
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}


export function ListContent({ task, onDelete, onSelect }: ListContentProps) {
  const createdTasksCounter = task.length;
  const doneTaskCounter = task.filter((task: TaskProps) => task.isDone === true).length;
  
  function onDeleteTask(id: string) {
    onDelete(id)
  }
  
  function onSelectedTask(id: string) {
    onSelect(id)
  }
  return (
    <div className={styles.container}>      
      <header className={styles.containerHeader}>
        <div className={styles.createdTaskCounter}>
          Tarefas Criadas <span>{createdTasksCounter}</span>
        </div>
        <div className={styles.doneTaskCounter}>
          Concluidas
          <span>{doneTaskCounter} de {createdTasksCounter}</span>
        </div>
      </header>

    {task.length === 0 ? (
      <div className={styles.emptyList}>
        <ClipboardText size={72}></ClipboardText>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      ) : (
      <main className={styles.listItemsContainer}>
        {task.map((item: TaskProps) => (
          <ListItem 
            id={item.id}
            content={item.content}
            isDone={item.isDone}
            onSelect={onSelectedTask}
            onDelete={onDeleteTask}
            key={`${item.id}-${item.content}`}
          />
        ))}
      </main>
        )
      }
    </div>
  );
}
