import { Injectable } from '@nestjs/common';
import { Task } from '../task.model';

@Injectable()
export class TasksService {
  //primeiro criar uma lista de tasks, pq não temos um banco de dados.
  private tasks: Task[] = [];

  createTask(titulo: string, descricao: string): Task {
    const newTask = new Task(titulo, descricao);
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
