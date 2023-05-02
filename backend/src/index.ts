import { Hono } from 'hono'
import { User } from './user'

interface Env {
    DB: D1Database
  }
  
const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))
app.get('/v1/users/:id', async c => {
    const id = Number.parseInt(c.req.param('id'));

    console.log(id);
    const user = await c.env.database.prepare('SELECT * FROM Customers WHERE CustomerID = ? LIMIT 1').bind(id).first<User>();
    console.log(user);
    return c.json(user);
});

export default app
