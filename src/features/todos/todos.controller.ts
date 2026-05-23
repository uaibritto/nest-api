import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common"

import { CreateTodoDto } from "./dto/create-todo.dto"
import { TodosService } from "./todos.service"

@Controller({ path: "/todos" })
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAll() {
        return this.todosService.findAll()
    }

    @Post()
    @HttpCode(204)
    create(@Body() dto: CreateTodoDto) {
        return this.todosService.create(dto)
    }
}
