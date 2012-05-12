Ext.Loader.setConfig({
    enabled:true,
    paths:{
        //'Ext.ux': 'Scripts/ux',
    }
});

Ext.application({
    name:'Weather.web',
    appFolder:'js/app',
    autoCreateViewport:true,
    controllers:['Locations'],
    launch:function () {
    }
});
