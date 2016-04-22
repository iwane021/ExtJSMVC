Ext.application({
	requires: ['Ext.container.Viewport'],
	name: 'AM',
	controllers: [
		'Users_c'
	],
	
	appFolder: 'app',
	
	launch: function(){
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [
				{
					xtype: 'userlist'
				}
			]
		});
	}
});