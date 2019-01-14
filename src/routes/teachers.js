const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function loadTeacher(ctx, next) {
  ctx.state.teacher = await ctx.orm.Teachers.findOne({
    where: { id: ctx.params.id },
  });
  return next();
}

router.get('/:id', loadTeacher, async (ctx) => {
  const { teacher } = ctx.state;
  ctx.body = teacher;
});

module.exports = router;
