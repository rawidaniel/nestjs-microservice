import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  CreateUse(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    this.authService.createUser(createUserDto);
  }
}
