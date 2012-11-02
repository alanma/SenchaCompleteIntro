/*
 * File: app/view/CustomerDetail.js
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

Ext.define('MyApp.view.CustomerDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.customerdetail',

    config: {
        items: [
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: 90
                },
                title: 'Details',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Company',
                        name: 'company'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Notes',
                        name: 'notes'
                    }
                ]
            },
            {
                xtype: 'hiddenfield',
                name: 'lat'
            },
            {
                xtype: 'hiddenfield',
                name: 'lng'
            },
            {
                xtype: 'button',
                action: 'ViewMap',
                ui: 'forward',
                text: 'View on Map'
            },
            {
                xtype: 'container',
                margin: '20 0 0 0',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 1,
                        action: 'Save',
                        ui: 'confirm',
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        flex: 1,
                        action: 'Delete',
                        ui: 'decline',
                        text: 'Delete'
                    }
                ]
            }
        ]
    }

});