module.exports = (Sequelize, DataType) => {
    const UserCliente = Sequelize.define('UserCliente', {
        id_userCliente: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCliente: DataType.STRING,
        codeNomeCliente: DataType.STRING,
        idadeCliente: {
            type: DataType.INTEGER,
            allowNull: false
        },
        emailCliente: {
            type: DataType.STRING,
            allowNull: false
        },
        numeroCliente: {
            type: DataType.STRING,
            allowNull: false
        },
        mensalidadeCliente: {
            type: DataType.STRING,
            allowNull: false
        },
        vencimentoCliente: {
            type: DataType.DATEONLY,
            allowNull: false
        },
        generoCliente: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'userCliente',
        timestamps: true
    });

    return UserCliente;
};