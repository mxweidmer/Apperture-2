module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        imgLink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    // Post.associate = function (models) {
    //     Post.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Post.belongsTo(models.Location, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // };

    return Post;
};
