/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('eAuthorityApp.view.personnel.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnel',

    onPersonnelEdit: function (record) {
        var mainlist = this.getView();
        var editor = Ext.create('eAuthorityApp.view.personnel.Editor', {
            mainlistRef: mainlist,
        });
        if (record) editor.loadRecord(record);
        editor.show();
    },

    onPersonnelSave: function () {
        var editor = this.getView();
        var store;
        if(editor.mainlistRef){
            store = editor.mainlistRef.getStore();
        } else {
            store = Ext.app.Application.instance.down('mainlist').getStore();
        }
        editor.getForm().submit({
            waitMsg: 'Saving...',
            success: function () {
                store.load({
                    callback: function (records, op, success) {
                        if (success) {
                            Ext.toast('Save success');
                            editor.destroy();
                        }
                    }
                });
            },
            failure: function (form, action) {
                var resp = action.response;
                Ext.toast({
                    html: resp.responseText,
                    bodyStyle: { color: 'red' }
                });
            }
        });
    },

    onPersonnelDelete: function (record) {
        Ext.Msg.confirm('Delete Personnel', 'Are you sure you want to delete this user?', function (id) {
            if (id === 'yes') {
                var data = {
                    personnel_id: record.data.personnel_id
                };
                Ext.Ajax.request({
                    url: window.URL_BASE+'/personnel',
                    method: 'DELETE',
                    jsonData: data,
                    success: function () {
                        var store = Ext.ComponentQuery.query('#mainlistclassic')[0].getStore();
                        store.load({
                            callback: function (records, op, success) {
                                if (success) {
                                    Ext.toast('Record successfully deleted');
                                }
                            }
                        });
                    },
                    failure: function () {
                        Ext.toast({
                            html: 'Record deletion failed',
                        });
                    },
                });
            }
        });
    },
});
