// BEGIN: 2d1f8c4d8c4d
import { Injectable } from '@nestjs/common';
import { Cat } from './stubs/cat/v1alpha/cat';
@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];
  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }
  findAll(): Cat[] {
    return this.cats;
  }
  findById(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }
  findByName(name: string): Cat {
    return this.cats.find((cat) => cat.name === name);
  }
  updateById(id: number, cat: Cat): Cat {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.cats[index] = cat;
      return cat;
    }
    return null;
  }
  updateByName(name: string, cat: Cat): Cat {
    const index = this.cats.findIndex((cat) => cat.name === name);
    if (index !== -1) {
      this.cats[index] = cat;
      return cat;
    }
    return null;
  }
  deleteById(id: number): void {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.cats.splice(index, 1);
    }
  }
  deleteByName(name: string): void {
    const index = this.cats.findIndex((cat) => cat.name === name);
    if (index !== -1) {
      this.cats.splice(index, 1);
    }
  }
}
// END: 2d1f8c4d8c4d// Filename : app.service.ts
// import { Injectable } from '@nestjs/common';
// import { Cat } from './stubs/cat/v1alpha/cat';
// import { PrismaService } from './prisma.service';
// import { Prisma } from '@prisma/client';
// @Injectable()
// export class AppService {
//   constructor(private prisma: PrismaService) {}
//   create(data: Prisma.CatCreateInput): Promise<Cat> {
//     return this.prisma.cat.create({ data });
//   }
//   findAll(): Promise<Cat[]> {
//     return this.prisma.cat.findMany();
//   }
//   findById(id: number): Promise<Cat> {
//     return this.prisma.cat.findUnique({
//       where: { id },
//     });
//   }
//   findByName(name: string): Promise<Cat> {
//     return this.prisma.cat.findUnique({
//       where: { name },
//     });
//   }
//   delete(id: number): Promise<Cat> {
//     return this.prisma.cat.delete({
//       where: { id },
//     });
//   }
//   async update(id: number, data: Prisma.CatUpdateInput): Promise<Cat> {
//     return this.prisma.cat.update({
//       where: { id },
//       data,
//     });
//   }
  
// }