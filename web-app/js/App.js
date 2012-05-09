Ext.Loader.setConfig({
    enabled:true,
    paths:{
        //'Ext.ux': 'Scripts/ux',
        //'Zynx.ce.Overrides': 'Scripts/Overrides.js',
        //'Zynx.ux': '../Scripts/Extjs-extensions'
    }
});

Ext.application({
    name:'Weather.web',
    appFolder:'app',

    //controllers: ['Location'],//'Banner', 'Tree', 'ContentGrid', 'CreateDrawer', 'DuplicateDrawer', 'DeleteContent', 'MoveContent'],
    //requires: ['Zynx.ce.Overrides', 'Zynx.ce.model.Converters', 'Zynx.ce.util.Util'],

    launch:function () {

//        var locationStore=Ext.create('Ext.data.Store', {
//            id:'locationStore',
//            model: 'Weather.web.Location',
//            data:[
//                { city:'Sherman Oaks',state:'CA',zip:'91403' },
//                { city:'Los Angeles',state:'CA',zip:'90025' }
//            ]
//        });

//        var imageTpl = new Ext.XTemplate(
//            '<tpl for=".">',
//            '<div style="margin-bottom: 10px;" class="thumb-wrap">',
//            '<br/><span>{city},{state}</span>',
//            '</div>',
//            '</tpl>'
//        );
//
//        Ext.create('Ext.view.View', {
//            store: Ext.data.StoreManager.lookup('locationStore'),
//            tpl: imageTpl,
//            itemSelector: 'div.thumb-wrap',
//            emptyText: 'No locations are available',
//            renderTo: Ext.getBody()
//        });

        Ext.create('Ext.container.Viewport', {
            layout:'border',
            items:[
                {
                    region:'north',
                    xtype:'form',

                    title: 'Simple Form',
                    bodyPadding: 5,
                    width: 350,

                    // The form will submit an AJAX request to this URL when submitted
                    url: 'save-form.php',

                    // Fields will be arranged vertically, stretched to full width
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },

                    // The fields
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        name: 'first',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        name: 'last',
                        allowBlank: false
                    }],

                    // Reset and Submit buttons
                    buttons: [{
                        text: 'Reset',
                        handler: function() {
                            this.up('form').getForm().reset();
                        }
                    }, {
                        text: 'Submit',
                        formBind: true, //only enabled once the form is valid
                        disabled: true,
                        handler: function() {
                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                    success: function(form, action) {
                                        Ext.Msg.alert('Success', action.result.msg);
                                    },
                                    failure: function(form, action) {
                                        Ext.Msg.alert('Failed', action.result.msg);
                                    }
                                });
                            }
                        }
                    }]

//
//                    layout:'anchor',
////                    defaults:{
////                        anchor:'50%'
////                    },
//                    width:'600',
//                    height:100,
//                    style:{
//                        padding:'10px',
//                        border: '2px solid #FF0000'
//                    },
//
//                    items:[
//                        { xtype:'textfield',
//                            name:'city',
//                            fieldLabel:'City, State or Zipcode',
//                            labelWidth:100,
////                            width:200,
//                            labelAlign:'left',
//                            allowBlank:false
//                        },
//                        {
//                            xtype:'button',
//                            text:'Lookup',
//                            handler:function () {
//                                alert('hahah');
//                            }
//                        }
//                    ]
                }
                ,
                {
                    region:'center',
                    xtype:'panel',
                    layout:'hbox',
                    style:{padding:'10px', borderWidth:'5px', backGroundColor:'#FF0000'},
                    items:[
                        {
                            xtype:'textfield',
                            name:'test',
                            text:'sssssssssssssssssss',
                            fieldLabel:'testttZipcode'
                        }
                    ]
                    //  store: locationStore,
                    //emptyText: 'No locations are available'
                }
            ]
        });
    }
});
