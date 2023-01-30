import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <input  type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
