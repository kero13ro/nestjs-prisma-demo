import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signup(name: string) {
    const user = await this.prisma.user.create({
      data: {
        firstName: name || 'user',
      },
    });
    return user;
  }
}
