const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'غير مصرح: هذه العملية للمدير فقط' });
  }
};

module.exports = isAdmin; 