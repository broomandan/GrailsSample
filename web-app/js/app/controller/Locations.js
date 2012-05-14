Ext.define('Weather.web.controller.Locations', {
    extend:'Ext.app.Controller',
    refs:[
        {ref:'locationList', selector:'[ref=location-list]'},
        {ref:'location-form', selector:'viewport > [ref=location-form]'}
    ],
    models:['Location'],
    views:['LocationList'],
    stores:['Locations'],
    init:function () {
        var locationList = this.refs[0].selector;
        var locationForm = this.refs[1].selector;
        var selectors = {};
        selectors[locationList] = {
            beforerender:function () {
                console.log('render-list');
            } };

        selectors[locationForm] = {
            click:function () {
                console.log('click');
            },

            addlocation:Ext.bind(this.addLocation, this)
        };
        this.control(selectors);
        this.callParent();
    },
    addLocation:function (location) {
        console.log(location);
        var store = this.getLocationList().store;
        store.add(location);
        store.sync();
    }
});