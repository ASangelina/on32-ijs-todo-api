import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post('criar')
  createTask(@Body() body: { titulo: string; descricao: string }) {
    const task = this.taskService.createTask(body.titulo, body.descricao);
    return {
      statusCode: HttpStatus.CREATED,
      message: `Task criada com sucesso`,
      data: task,
    };
  }

  @Get()
  getAllTasks() {
    const tasks = this.taskService.getAllTasks();
    return {
      statusCode: HttpStatus.OK,
      message: `Todas as tasks retornadas com sucesso`,
      data: tasks,
    };
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    const task = this.taskService.getTaskById(id);
    if (!task) {
      throw new HttpException('Não encontrado', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Task encontrada com sucesso',
      data: task,
    };
  }
}
