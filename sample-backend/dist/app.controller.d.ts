import { CreateUserRequest } from './create-user-request.dto';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(createUserRequest: CreateUserRequest): void;
}
