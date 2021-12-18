module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('categories', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
     name: {
       type: DataTypes.STRING,
       allowNull: false,
     }
  },
    {timestamps: false});

  Category.associate = (models) => {
    Category.hasMany(models.Property, {foreignKey: 'categoryId'});
  };

  return Category;
};