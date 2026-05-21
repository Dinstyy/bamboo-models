import { DataTypes } from "sequelize";
import sequelize from '../../../config/db.config.js';

const SalesQuotationDetail = sequelize.define('sales_quotation_detail', {
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accurate_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING
    },
    transDate: {
        type: DataTypes.DATEONLY
    },
    name: {
        type: DataTypes.STRING
    },
    raw_data: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    branch_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    export_status: {
        type: DataTypes.ENUM('PENDING', 'IN_PROGRESS', 'SUCCESS', 'FAILED'),
        defaultValue: 'PENDING'
    },
    export_error_message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    export_response: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    exported_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default SalesQuotationDetail;