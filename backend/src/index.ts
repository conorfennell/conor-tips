import { Hono } from 'hono'
import { User } from './user'

interface Env {
    database: D1Database
  }
  
const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))
app.get('/v1/users/:id', async c => {
    const id = Number.parseInt(c.req.param('id'));

    const user = await c.env.database.prepare('SELECT * FROM users WHERE id = ? LIMIT 1').bind(id).first<User>();
    return c.json(user);
});

export default app
