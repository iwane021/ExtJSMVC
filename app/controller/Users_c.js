Ext.define('AM.controller.Users_c',{
	extend: 'Ext.app.Controller',
	stores: ['Userstr'],
	models: ['Usermo'],
	
	views: ['user.Listvi','user.Editvi'],
	
	init:function(){
		this.control({
			'viewport > userlist':{ itemdblclick: this.editUser },
			'useredit button[action=save]':{ click: this.updateUser },
			'useredit button[action=edit]':{ click: this.ubahUser }
		});
	},
	
	editUser: function(grid, record){
		var view =	Ext.widget('useredit');
		view.down('form').loadRecord(record);
		//console.log('Double clicked on ' + record.get('name'));
	},
	
	updateUser: function(button){ 
		var win 	= button.up('window'),
			form 	= win.down('form'),
			record 	= form.getRecord(),
			values	= form.getValues();
		
		record.set(values);
		win.close();
		//synchronize the store after editing the record
		this.getUserstrStore().sync();
	},
	
	ubahUser: function(button){ 
		console.log('Click button to edit');
	}
});