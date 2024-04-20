const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }

  req.app.locals.username = req.session.user.username;
  next();
};

const checkNotAuth = (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/");
  }

  next();
};

export { checkAuth, checkNotAuth };
