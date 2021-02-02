Ext.define('eAuthorityApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    
    model: 'eAuthorityApp.model.Personnel',
    
    proxy: {
        type: 'ajax',
        url: '/eAuthorityApp/personnel',
        reader: {
            type: 'json',
        },
    },
    autoLoad: true,
});
