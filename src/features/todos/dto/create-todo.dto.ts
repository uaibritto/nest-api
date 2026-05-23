import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength
} from "class-validator"

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string = ""

    @IsBoolean()
    @IsOptional()
    completed?: boolean
}
