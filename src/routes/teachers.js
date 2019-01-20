const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function loadTeacher(ctx, next) {
  ctx.state.teacher = await ctx.orm.teacher.findOne({
    where: { id: ctx.params.id },
  });
  return next();
}

router.get('courseTeachers', '/', async (ctx) => {
  const { course } = ctx.state;
  const teachers = { id: 1 };
  ctx.body = teachers;
});

router.get('/:id', loadTeacher, async (ctx) => {
  const { teacher } = ctx.state;
  ctx.body = teacher.toJSON();
});

router.get('/:id/stats', loadTeacher, async (ctx) => {
  const { teacher, currentUser } = ctx.state;
  const [res] = await teacher.getStats(currentUser);
  ctx.body = res;
});

module.exports = router;
