import SalesQuotationGroup from './SalesQuotationGroup.js';
import SalesQuotationDetail from './SalesQuotationDetail.js';

SalesQuotationGroup.hasMany(SalesQuotationDetail, { foreignKey: 'group_id', as: 'details' });
SalesQuotationDetail.belongsTo(SalesQuotationGroup, { foreignKey: 'group_id', as: 'group' });

export {
    SalesQuotationGroup,
    SalesQuotationDetail
};