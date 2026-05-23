import { Injectable } from "@nestjs/common"

import { CreateTodoDto } from "./dto/create-todo.dto"

export interface Todo {
    id: number
    title: string
    completed: boolean
}

@Injectable()
export class TodosService {
    private todos: Todo[] = []
    private nextId = 1

    findAll(): Todo[] {
        return this.todos
    }

    create(dto: CreateTodoDto): Todo {
        const todo: Todo = { id: this.nextId++, ...dto, completed: false }
        this.todos.push(todo)
        return todo
    }
}
