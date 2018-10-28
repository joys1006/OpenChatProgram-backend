const Router = require('koa-router')
const posts = require('./posts')

const api = new Router()

api.use('/posts', posts.routes())
api.get('/users', (ctx) => {
	ctx.body = '유저목록'
})
api.get('/chat-room', (ctx) => {
	ctx.body = '대화방목록'
})
api.get('/chat-room/:room_no', (ctx) => {
	ctx.body = `${room_no}의 방`
})

module.exports = api