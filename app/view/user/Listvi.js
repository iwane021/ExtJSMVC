Ext.define('AM.view.user.Listvi', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	
	title: 'All Users',
	store: 'Userstr',
	
	initComponent: function(){
		/* this.store = {
			fields: ['id', 'name', 'email'],
			data  : [
				{id: '1', name: 'Toni', email: 'toni@gmail.com'},
				{id: '2', name: 'Adam', email: 'adam@gmail.com'}
			]
		}; */
		
		this.columns = [
			{text: 'ID', name: 'id',  dataIndex: 'id', flex: 1},
			{text: 'Name', name: 'Name',  dataIndex: 'name', flex: 1},
			{text: 'Email', name: 'Email', dataIndex: 'email', flex: 1}
		];
		
		this.callParent(arguments);
	}
});