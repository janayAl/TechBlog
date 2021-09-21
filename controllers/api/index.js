const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;


// const userRoutes = require('./dashboardRoutes');
// const projectRoutes = require('./homeRoutes');

// router.use('/users', dashboardRoutes);
// router.use('/projects', hometRoutes);


