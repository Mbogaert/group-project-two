<<<<<<< HEAD
// const withAuth = (req, res, next) => {
//   if (!req.session.user_id) {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };

// module.exports = withAuth;
=======
// rework this path /login as needed
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
>>>>>>> auth
