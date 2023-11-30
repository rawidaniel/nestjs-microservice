import { Injectable } from '@nestjs/common';
import { User } from '@nestjs-microservices/shared/entities';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [
    { id: 100, name: 'test', email: 'test@gmail' },
  ];

  save(user: User) {
    this.users.push({ ...user, id: this.users.length + 1 });
    console.log(this.users.find((u) => u.name === user.name));
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}
