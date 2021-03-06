const KoaRouter = require('koa-router');

const router = new KoaRouter();
const { upload } = require('../utils');

// GET routes
router.get('getPosts', '/', async (ctx) => {
  const posts = await ctx.orm.Posts.findAll();
  await ctx.render('posts/index', { posts });
});

// POST routes
router.post('newPost', '/', async (ctx) => {
  const { body } = ctx.request;
  const { fields, files } = body;
  const { io } = ctx.state;
  ctx.body = ctx.session.userId ? await upload(ctx, files, fields, io) : { error: true, message: 'error uploading file' };
});

module.exports = router;
