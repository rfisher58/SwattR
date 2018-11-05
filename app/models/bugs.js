module.exports = function(sequelize, DataTypes) {

    const openBugs = sequelize.define('openBugs', {
    
       title : {
          type: DataTypes.STRING,
          allowNull: false
        },
    
       description : {
          type: DataTypes.STRING,
          allowNull: false
        },
    
       link : {
          type: DataTypes.STRING,
          allowNull: false
        },
    
        pay: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      });
  
      return openBugs;

    }