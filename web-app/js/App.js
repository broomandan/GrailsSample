//Ext.Loader.setConfig({
//    enabled:true,
//    paths:{
//        //'Ext.ux': 'Scripts/ux',
//        //'Zynx.ce.Overrides': 'Scripts/Overrides.js',
//        //'Zynx.ux': '../Scripts/Extjs-extensions'
//    }
//});

Ext.application({
    name:'Weather.web',
    appFolder:'app',
    autoCreateViewport:true,
    controllers:['Locations'],
    //requires: ['Zynx.ce.Overrides', 'Zynx.ce.model.Converters', 'Zynx.ce.util.Util'],

    launch:function () {
    }
});
