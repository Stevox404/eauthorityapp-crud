window.URL_BASE = '/eAuthorityApp';
/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('eAuthorityApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'eAuthorityApp',
        
    stores: [],

    controllers: [
        'eAuthorityApp.controller.BaseController',
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.create({
            xtype:'app-main',
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    // listeners: {
    //     grabFocus: 'grabFocus',
    // }
});
