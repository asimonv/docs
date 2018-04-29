const KoaRouter = require('koa-router');
const linksRouter = require('./links');

const router = new KoaRouter();

async function loadCourse(ctx, next) {
  ctx.state.course = await ctx.orm.Courses.findOne({
    where: { courseNumber: ctx.params.number },
  });
  return next();
}

router.get('/', async (ctx) => {
  ctx.body = await ctx.orm.Courses.findAll();
});

router.get('/:number/files', loadCourse, async (ctx) => {
  const { course } = ctx.state;
  ctx.body = await course.getFiles();
});

router.get('/:number', loadCourse, async (ctx) => {
  const { course } = ctx.state;
  if (course) {
    ctx.body = {
      course,
      currentUser: ctx.state.currentUser,
      usersPath: ctx.state.usersPath,
    };
  } else {
    ctx.status = 404;
  }
});

router.use('/:number/links', loadCourse, async (ctx, next) => {
  console.log('fdfdfdf');
  await next();
}, linksRouter.routes());

module.exports = router;
