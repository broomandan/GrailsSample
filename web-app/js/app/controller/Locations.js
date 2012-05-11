Ext.define('Weather.web.controller.Locations', {
    extend:'Ext.app.Controller',
    refs:[
        {ref:'locationList', selector:'viewport > [ref=locationList]'}
    ],
    models:['Location'],
    views:['locationList'],
    stores:['Locations'],
    init:function () {
        console.log('Location controller was initialized');
        var locationList=this.refs[0].selector;
        var selectors = {}
        selectors[locationList]={render: this.onPanelRendered};
        this.control(selectors );
        this.callParent();
    },
    onPanelRendered:function () {
        console.log('The panel was rendered');
    }
});