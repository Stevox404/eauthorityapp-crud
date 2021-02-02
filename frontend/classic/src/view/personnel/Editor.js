Ext.define('eAuthorityApp.view.personnel.Editor', {
    extend: 'Ext.form.Panel',
    xtype: 'editor',
    requires: [
        'eAuthorityApp.view.personnel.Controller',
    ],
    title: 'Edit Personnel',
    controller: 'personnel',

    jsonSubmit: true,
    url: window.URL_BASE+'/personnel',
    method: 'POST',

    width: 400,
    floating: true,
    closable: true,
    modal: true,
    bodyPadding: 10,
    defaults: {
        xtype: 'textfield',
        width: '100%',
        maxLength: 70,
    },


    items: [{
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: false,
        autoFocus: true,
        maxLength: 64,
    }, {
        name: 'email',
        fieldLabel: 'Email',
        allowBlank: false,
        maxLength: 64,
        vtype: 'email'
    }, {
        name: 'phone',
        fieldLabel: 'Phone',
        regex: /^(0|\+)[0-9-() ]{9,17}/,
        maxLength: 24,
        regexText: 'Please enter a valid phone number'
    },{
        xtype: 'hiddenfield',
        name: 'personnel_id',
    }],

    buttons: [{
        text: 'Save',
        formBind: true,
        listeners: {
            click: 'onPersonnelSave',
        }
    }]
});