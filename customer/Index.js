import CustomerGroup from './CustomerGroup.js';
import CustomerDetail from './CustomerDetail.js';

CustomerGroup.hasMany(CustomerDetail, { foreignKey: 'group_id', as: 'details' });
CustomerDetail.belongsTo(CustomerGroup, { foreignKey: 'group_id', as: 'group' });

export {
    CustomerGroup,
    CustomerDetail
};