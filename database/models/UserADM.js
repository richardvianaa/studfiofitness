module.exports = (Sequelize, DataType) => {
    const UserADM = Sequelize.define('UserADM', {
        id_userADM: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeADM: DataType.STRING,
        codeNomeADM: DataType.STRING,
        emailADM: {
            type: DataType.STRING,
            allowNull: false
        },
        passwordADM: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'useradm',
        timestamps: true
    });

    return UserADM;
};