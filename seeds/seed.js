const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

// const userData = require('./userData.json');
const BlogPostData = require('./BlogPosttData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const BlogPost of BlogPostData) {
    await BlogPost.create({
      ...BlogPost,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
