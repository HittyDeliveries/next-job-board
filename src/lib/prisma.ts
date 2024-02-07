//initial lize prisma client

import { PrismaClient } from '@prisma/client';
import { Return } from '@prisma/client/runtime/library';
import exp from 'constants';

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | Return<typeof PrismaClientSingleton>;
}

const prisma = global.prisma ?? PrismaClientSingleton();

export default prisma;

if(process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
