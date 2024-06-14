/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'toDoList.Application',

    name: 'toDoList',

    requires: [
        // This will automatically load all classes in the toDoList namespace
        // so that application classes do not need to require each other.
        'toDoList.*'
    ],

    // The name of the initial view to create.
    mainView: 'toDoList.view.main.Main'
});
