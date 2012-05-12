/**
 * Created with IntelliJ IDEA.
 * User: BroomandRo01
 * Date: 5/11/12
 * Time: 10:25 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Weather.web.store.Locations', {
    extend:'Ext.data.Store',
    alias : 'store.locations',
//    id:'locationStore',
//    requires:['Weather.web.Location'],
    model:'Weather.web.model.Location',
//    proxy:{
//        type:'json',
//        url : '/locations.json',
//        reader: {
//            type: 'json',
//            root: 'locations'
//        }
//    },
    autoLoad:true,
    //fields:['city','state','zip'],
    data:[
        { city:'Sherman Oaks', state:'CA', zip:'91403' },
        { city:'Los Angeles', state:'CA', zip:'90025' },
        { city:'Encino', state:'CA', zip:'91346' },
        { city:'Bverly Hills', state:'CA', zip:'90210' },
        { city:'Malibu', state:'CA', zip:'90xxx' }
    ]
});