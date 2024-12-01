import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { userRouter } from './user/user';

export const prisma = new PrismaClient().$extends(withAccelerate());
const app = new Hono();

// Use `route` instead of `use` to integrate the userRouter
app.route('/api/v1', userRouter);

// Define a simple root route for testing
app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
