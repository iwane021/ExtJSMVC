Ext.define('AM.store.Userstr',{
	extend: 'Ext.data.Store',
	model: 'AM.model.Usermo',
	autoLoad: true,
	
	proxy: {
		type: 'ajax',
		url: 'data/users.json',
		api: {
			read: 'data/users.json',
			update: 'data/updateUsers.json'
		},
		reader: {
			type: 'json',
			root: 'users_data',
			successProperty: 'success'
		}
	}
});