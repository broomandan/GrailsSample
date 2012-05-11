/**
 * Created with IntelliJ IDEA.
 * User: BroomandRo01
 * Date: 5/11/12
 * Time: 10:25 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Weather.web.store.Locations', {
    extend:'Ext.data.Store',
//    alias : 'Weather.web.store.locations',
//    id:'locationStore',
//    requires:['Weather.web.Location'],
    model:'Weather.web.model.Location',
    proxy: {
        type: 'ajax',
        url : '/users.json',
        reader: {
            type: 'json',
            root: 'users'
        }
    },
    autoLoad: true,
    data:[
        { city:'Sherman Oaks', state:'CA', zip:'91403' },
        { city:'Los Angeles', state:'CA', zip:'90025' }
    ]
});