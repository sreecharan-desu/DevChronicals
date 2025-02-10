import { Elysia } from 'elysia'

const app = new Elysia()

app.post('/', (ctx) => {
    console.log(ctx.headers.authorization)
    // ctx.set.status = 200
    app.state({
        id : 1
    })
  return 'Hello, Elysia!'
})

app.get('/charan',({store})=>{
    console.log(store)

    return "Store check"
})




















app.listen(3000)
console.log('Server running at http://localhost:3000')
