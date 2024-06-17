Ext.define('toDoList.view.main.Extra', {
    xtype: 'Extra',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            title: 'To-Do List',
            bodyPadding: 10,
            width: 400,
            items: [
                {
                    xtype: 'textfield',
                    name: 'task1',
                    fieldLabel: 'Task 1'
                },
                {
                    xtype: 'textfield',
                    name: 'task2',
                    fieldLabel: 'Task 2'
                },
                {
                    xtype: 'textfield',
                    name: 'task3',
                    fieldLabel: 'Task 3'
                },
                {
                    xtype: 'button',
                    text: 'Add Task',
                    margin: '10 0',
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            var values = form.getValues();
                            Ext.Msg.alert('Tasks', 'Tasks: ' + JSON.stringify(values));
                        } else {
                            Ext.Msg.alert('Error', 'Please fill in all fields.');
                        }
                    }
                }
            ]
        },
        {
            xtype: 'container',
            html: '<h1>Hello world, how are you</h1>',
            margin: '20 0 0 0'
        }
    ]
});
