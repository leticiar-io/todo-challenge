import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

import { ListContent } from "./ListContent";
import styles from "./NewTask.module.css";

export interface TaskProps {
  id: string;
  isDone: boolean;
  content: string;
}

const mockTask: TaskProps[] = [
  {
    id: uuidv4(),
    content: "Estudar Programação",
    isDone: true,
  },
  {
    id: uuidv4(),
    content: "Ir caminhar",
    isDone: false,
  },
];

export function NewTask() {
  const [task, setTask] = useState<TaskProps[]>(mockTask);
  const [newTaskText, setNewTaskText] = useState<string>("");

  function handleRequiredField(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Para adicionar uma nova task, esse item é obrigatório!");
  }

  function handleRemovingTasks(id: string) {
    const newListingTasksAfterDelete = task.filter(
      (task: TaskProps) => task.id !== id
    );

    setTask(newListingTasksAfterDelete);
  }


  function filterByIsDone(newTasks: TaskProps[]) {
    const newTasksArrayFiltered = newTasks.sort((a) => {
      if (a.isDone === false) return -1;
      if (a.isDone === true) return 1;
      return 0;
    });
    return newTasksArrayFiltered;
  }

  function handleTypeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: TaskProps = {
      content: newTaskText,
      id: uuidv4(),
      isDone: false,
    };
    const newTasksArray = [...task, newTask];

    setTask(filterByIsDone(newTasksArray));
    setNewTaskText("  "); //returning to the initial value
  }

  function selectedTasks(id: string) {
    const newTasksArray = task.map((task: TaskProps) => {
      if (task.id === id) task.isDone = !task.isDone;
      return task;
    });
    setTask(filterByIsDone(newTasksArray));
  }

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          id="newTodo"
          required
          onInvalid={handleRequiredField}
          onChange={(e) => handleTypeNewTaskText(e)}
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <ListContent
        task={task}
        onDelete={handleRemovingTasks}
        onSelect={selectedTasks}
      />
    </div>
  );
}
