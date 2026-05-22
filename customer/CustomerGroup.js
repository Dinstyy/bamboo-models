import { DataTypes } from "sequelize";
import sequelize from '../../../config/db.config.js';

const CustomerGroup = sequelize.define('customer_group', {
    no_setting: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED'),
        defaultValue: 'PENDING'
    },
    total_data: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    error_message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    total_pages: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    total_records: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default CustomerGroup;