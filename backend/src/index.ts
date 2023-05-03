import { Hono } from 'hono'
import { User } from './user'

interface Env {
    database: D1Database
  }
  
const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => c.json(await c.env.database.prepare('SELECT * FROM users;').all<User>()))
app.get('/v1/users/:id', async c => {
    const id = Number.parseInt(c.req.param('id'));
    console.log(id);
    const user = await c.env.database.prepare('SELECT * FROM users WHERE id = ? LIMIT 1').bind(id).first<User>();
    console.log(JSON.stringify(user));
    return c.json(user);
});

export default app
