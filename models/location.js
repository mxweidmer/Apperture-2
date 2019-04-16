module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Location.associate = function (models) {
    //     Location.hasMany(models.Post, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Location;
};
