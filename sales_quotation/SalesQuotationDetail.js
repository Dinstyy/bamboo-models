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
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default SalesQuotationDetail;