import { Injectable } from "@nestjs/common"

import { CreateTodoDto } from "./dto/create-todo.dto"
import { Todo } from "./todo.types"

@Injectable()
export class TodosService {
    private todos: Todo[] = []
    private nextId = 1

    findAll(): Todo[] {
        return this.todos
    }

    create(dto: CreateTodoDto): void {
        const todo: Todo = {
            id: this.nextId++,
            title: dto.title,
            done: dto.done ?? false
        }

        this.todos.push(todo)
    }
}
