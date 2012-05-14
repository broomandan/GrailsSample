/**
 * Created with IntelliJ IDEA.
 * User: Robert Broomandan
 * Date: 5/11/12
 * Time: 10:56 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Weather.web.view.LocationList', {
    extend:'Ext.view.View',
    alias:'widget.locationList',
    title:'All Locations',

    initComponent:function () {
        this.store = Ext.create('Weather.web.store.Locations');
        this.callParent();
    },

    tpl:new Ext.XTemplate(
        '<tpl for=".">',
            '<div style="margin-bottom: 10px;" class="thumb-wrap">',
                '<br/><span>{city},{state} {zip}</span>',
            '</div>',
        '</tpl>'
    ),
    itemSelector:'div.thumb-wrap',
    emptyText:'No locations are available',
    renderTo:Ext.getBody()
});
