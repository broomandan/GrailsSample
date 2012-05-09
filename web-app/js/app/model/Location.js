Ext.define('Weather.web.Location', {
    extend: 'Ext.data.Model',
    fields: [
        { name:'city', type:'string' },
        { name:'state', type:'string' },
        { name:'zip', type:'string' }
    ]
});