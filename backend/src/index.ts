import { Hono } from 'hono'
import { User } from './user'

const app = new Hono()

const userMap = new Map<number, User>();
userMap.set(1, new User('Conor Fennell', 30, 'johndoe@example.com'));
userMap.set(2, new User('Jim Fennell', 30, 'johndoe@example.com'));

function getUser(id: number) {
    return userMap.get(id);
}

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))
app.get('/v1/users/:id', (c) => {
    const id = Number.parseInt(c.req.param('id'));
    return c.json(getUser(id));
});

export default app
