module.exports = function sendExampleEmail(ctx, data) {
  // you can get all the additional data needed by using the provided one plus ctx
  return ctx.sendMail('example', { to: 'andreanthua@gmail.com' }, { data });
};
