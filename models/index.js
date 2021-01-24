const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Dog = require('./Dog');
const Match = require('./Match');

User.hasMany(Post, { foreignKey: 'user_id' });

User.hasMany(Match, { foreignKey: 'characteristic' })

Match.hasMany(User, { foreignKey: 'characteristic' })

Dog.belongsTo(User, { foreignKey: 'user_id' });

Post.belongsTo(User, { foreignKey: 'user_id' });

Comment.belongsTo(User, { foreignKey: 'user_id' });

Comment.belongsTo(Post, { foreignKey: 'post_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });

Post.hasMany(Comment, { foreignKey: 'post_id' });

module.exports = { User, Post, Comment, Dog, Match };