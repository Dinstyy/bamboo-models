import { DataTypes } from "sequelize";
import sequelize from '../../../config/db.config.js';

const CustomerDetail = sequelize.define('customer_detail', {
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accurate_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerNo: {
        type: DataTypes.STRING
    },
    customerName: {
        type: DataTypes.STRING
    },
    customerId: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    raw_data: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default CustomerDetail;