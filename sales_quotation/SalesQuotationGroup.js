import { DataTypes } from "sequelize";
import sequelize from '../../../config/db.config.js';

const SalesQuotationGroup = sequelize.define('sales_quotation_group', {
    no_setting: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_mulai: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tanggal_akhir: {
        type: DataTypes.DATEONLY,
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
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default SalesQuotationGroup;