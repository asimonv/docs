const KoaRouter = require('koa-router');

const router = new KoaRouter();

// GET routes
router.get('search', '/:q', async (ctx) => {
  const courses = await ctx.orm.Courses.findAll({
    where: {
      $or: [
        {
          courseNumber: {
            $ilike: `%${ctx.params.q}%`,
          },
        },
        {
          name: {
            $ilike: `%${ctx.params.q}%`,
          },
        },
        {
          englishName: {
            $ilike: `%${ctx.params.q}%`,
          },
        },
      ],
    },
    limit: 10,
  });
  ctx.body = courses;
});

module.exports = router;
