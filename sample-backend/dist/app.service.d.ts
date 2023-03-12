import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
export declare class AppService {
    private readonly communicationClient;
    private readonly users;
    getHello(): string;
    constructor(communicationClient: ClientProxy);
    createUser(createUserRequest: CreateUserRequest): void;
}
