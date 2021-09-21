const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./BlogPost');

router.use('/userRoutes', userRoutes);
router.use('/BlogPost', blogPostRoutes);

module.exports = router;


// const userRoutes = require('./dashboardRoutes');
// const projectRoutes = require('./homeRoutes');

// router.use('/users', dashboardRoutes);
// router.use('/projects', hometRoutes);


