Ext.define('eAuthorityApp.model.Personnel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'personnel_id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'string'},
    ],
})