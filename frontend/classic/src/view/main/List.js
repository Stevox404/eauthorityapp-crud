/**
 * This view is an example list of people.
 */
Ext.define('eAuthorityApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    selModel: 'rowmodel',
    itemId: "mainlistclassic",

    requires: [
        'eAuthorityApp.view.personnel.Controller',
        'eAuthorityApp.store.Personnel'
    ],

    controller: 'personnel',

    header: {
        title: 'Personnel',
        items: [{
            xtype: 'button',
            text: 'Add New',
            iconCls: 'x-fa fa-user-plus',
            handler: function(){
                this.up('mainlist').fireEvent('onRowEdit', undefined);
            }
        }]
    },

    store: {type: 'personnel'},

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            dataIndex: 'action', 
            xtype: 'actioncolumn',
            text: 'Action',
            sortable: false,
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            align: 'center',
            items:[{
                tooltip: 'Edit',
                iconCls: 'x-fa fa-edit',
                handler: function(_tbl, rIdx, _cIdx, _el, _e, record){
                    this.up('mainlist').fireEvent('onRowEdit', record);
                },
            },{
                xtype: 'spacer'
            },{
                tooltip: 'Delete',
                iconCls: 'x-fa fa-trash',
                handler: function(_tbl, _rIdx, _cIdx, _el, _e, record){
                    this.up('mainlist').fireEvent('onRowDelete', record);
                },
            }]
        }
    ],

    listeners: {
        activate: function () {
            this.getStore().reload();
        },
        rowdblclick: function (_tbl, record, _el, idx, _e) {
            this.fireEvent('onRowEdit', record);
        },
        onRowEdit: 'onPersonnelEdit',
        onRowDelete: 'onPersonnelDelete',
    }
});
