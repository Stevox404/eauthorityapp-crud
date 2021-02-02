Ext.define('eAuthorityApp.controller.BaseController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.base',

    init: function () {
        
    },
    
    control: {
        'editor > textfield[name=name]': {
            blur: function (el, e) {
                var newVal = el.value.replace(/(^|\s)([a-z])/g, function(m){return m.toUpperCase()})
                el.setValue(newVal);
            },
            afterrender: function (el) {
                el.focus();
            }
        }
    },
})