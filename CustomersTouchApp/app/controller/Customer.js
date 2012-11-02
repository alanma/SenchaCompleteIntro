/*
 * File: app/controller/Customer.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Customer', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '.mainview',
            customerList: '.mainview list',
            customerDetail: '.customerdetail'
        },

        control: {
            ".mainview list": {
                itemtap: 'onListItemTap'
            },
            "[action=ViewMap]": {
                tap: 'onViewMapTap'
            },
            "[action=Save]": {
                tap: 'onSaveTap'
            },
            "[action=Delete]": {
                tap: 'onDeleteTap'
            },
            ".customermap": {
                centerchange: 'onMapCenterChange'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var form = Ext.create("MyApp.view.CustomerDetail",
        {
            title: record.data.company,
            record: record
        });

        this.getMainView().push(form);

        var me = this;

        Ext.Function.defer(function(){
            me.getCustomerList().deselectAll();
        }, 100);
    },

    onViewMapTap: function(button, e, options) {
        var record = this.getCustomerDetail().getRecord();

        var map = Ext.create("MyApp.view.CustomerMap", {
            title: record.data.company,
            mapOptions: {
                center: new google.maps.LatLng(record.data.lat, record.data.lng),
                zoom: 12
            }
        });

        this.getMainView().push(map);
    },

    onSaveTap: function(button, e, options) {
        var me = this,
        form = this.getCustomerDetail(),
        values = form.getValues(),
        record = form.getRecord();

        record.beginEdit();

        record.set(values);

        if (record.isValid()) {
            record.endEdit();

            record.save({
                success: function() {
                    me.getMainView().pop();
                }
            });
        }
        else {
            record.cancelEdit();

            Ext.Msg.alert("Error", "There are errors with the record.");
        }
    },

    onDeleteTap: function(button, e, options) {
        var me = this,
        form = this.getCustomerDetail(),
        record = form.getRecord();

        record.erase({
            success: function(){
                me.getMainView().pop();
            }
        });
    },

    onMapCenterChange: function(map, gmap, center, options) {
        var form = this.getCustomerDetail();

        form.setValues({
            lat: center.lat(),
            lng: center.lng()
        });
    }

});