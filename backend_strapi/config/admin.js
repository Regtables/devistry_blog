module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e54005aa5dd42aaa664ce3fe0b2fb9f1'),
  },
});
