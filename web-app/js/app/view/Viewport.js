/**
 * Created with IntelliJ IDEA.
 * User: BroomandRo01
 * Date: 5/11/12
 * Time: 2:16 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Weather.web.view.Viewport', {
    extend:'Ext.container.Viewport',
    items:[
        {
            region:'north',
            xtype:'form',
            ref:'location-form',
            title:'Add Location',
            frame:true,
            width:550,
            bodyPadding:5,
            fieldDefaults:{
                labelAlign:'right',
                labelWidth:90,
                msgTarget:'qtip'
            },

            items:[
                {
                    xtype:'fieldset',
                    title:'Location lookup',
                    defaultType:'textfield',
                    layout:'anchor',
                    defaults:{
                        anchor:'100%'
                    },
                    items:[
                        {
                            xtype:'fieldcontainer',
                            fieldLabel:'City/state or zipcode',
                            labelWidth:150,
                            layout:'hbox',
                            combineErrors:true,
                            defaultType:'textfield',
                            defaults:{
                                hideLabel:'true'
                            },
                            items:[
                                {
                                    name:'location',
                                    flex:2,
                                    emptyText:'City/state or zipcode',
                                    allowBlank:false
                                },
                                {
                                    xtype:'button',
                                    text:'Add location',
                                    // formBind:true, //only enabled once the form is valid
                                    // disabled:true,
                                    handler:function () {
                                        var parent = this.up('form'),
                                            form = parent.getForm();

                                        if (form.isValid()) {
//                                                console.log('valid', this);

                                            // TODO: resolve the city/state or zipcode
                                            // on resolve success, Add to local storage
                                            var location = {
                                                city:'Santa Monica',
                                                state:'CA',
                                                zipCode:'90404'
                                            };
                                            parent.fireEvent('addlocation', location);
//                                            form.submit({
//                                                success:function (form, action) {
//                                                    Ext.Msg.alert('Success', action.result.msg);
//                                                },
//                                                failure:function (form, action) {
//                                                    Ext.Msg.alert('Failed', action.result.msg);
//                                                }
//                                            });
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],

            // Reset and Submit buttons
            buttons:[
                {
                    text:'Reset',
                    handler:function () {
                        this.up('form').getForm().reset();
                    }
                }
            ]
        }
        ,
        {
            region:'center',
            xtype:'locationList',
            ref:'location-list',
            layout:'border'
        }
    ]
});