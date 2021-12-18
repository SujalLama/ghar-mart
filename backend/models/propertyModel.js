module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('properties', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
     title: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     address: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     price: {
       type: DataTypes.INTEGER,
     },
     bed: {
      type: DataTypes.INTEGER
     },
     bath: {
      type: DataTypes.INTEGER
     },
     area: {
      type: DataTypes.STRING
     },
     road: {
      type: DataTypes.STRING
     },
     direction: {
      type: DataTypes.STRING
     },
     isVerrified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
     },
     onSale: {
       type: DataTypes.BOOLEAN,
       defaultValue: false,
     },
     categoryId: {
       type: DataTypes.INTEGER
     },
     attachments: {
      type: DataTypes.ARRAY(DataTypes.STRING)
     },
     createdAt: {
       type: DataTypes.DATE,
       defaultValue: Date
     },
     updatedAt: {
       type: DataTypes.DATE,
       defaultValue: Date
     }
  },
    {timestamps: false});

  Property.associate = (models) => {
    Property.belongsTo(models.Category, {foreignKey: 'categoryId'});
  };

  return Property;
};