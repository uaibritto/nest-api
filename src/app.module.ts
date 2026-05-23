import { Module } from "@nestjs/common"

import { TodosModule } from "@/features/todos/todos.module"

@Module({
    imports: [TodosModule]
})
export class AppModule {}
