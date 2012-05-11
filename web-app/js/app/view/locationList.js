/**
 * Created with IntelliJ IDEA.
 * User: BroomandRo01
 * Date: 5/11/12
 * Time: 10:56 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Weather.web.view.locationList', {
    extend:'Ext.view.View',
    alias:'widget.locationList',
//    requires:['Weather.web.store.Locations'],
    title:'All Locations',

    initComponent:function () {
        this.store = Ext.create('Weather.web.store.Locations');
        var imageTpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<div style="margin-bottom: 10px;" class="thumb-wrap">',
            '<br/><span>{city},{state}</span>',
            '</div>',
            '</tpl>'
        );

        this.callParent(arguments);
    },
    tpl:this.imageTpl,
    itemSelector:'div.thumb-wrap',
    emptyText:'No locations are available'
});
