import fastify from 'fastify'
// console.log("rodandoo")
const server = fastify();

server.get('/', () => {
    return "Ola mundo"
})

server.listen({port : 3333}).then(() =>
    console.log("SERVER RUNNING")
)