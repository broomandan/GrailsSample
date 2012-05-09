Ext.define('Weather.web.Location',{
    extend:'Ext.app.Controller',
    refs:[
        {ref:'panel',selector:'viewport > panel'}
    ] ,
    init:function(){
        console.log('Location controller was initialized');
        var selectors={}
        selectors[panel]
        this.control(selectors);
        this.callParent();
    }
});