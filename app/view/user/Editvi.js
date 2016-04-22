Ext.define('AM.view.user.Editvi',{
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',
	
	title: 'Edit User',
	layout: 'fit',
	autoShow: true,
	
	initComponent: function(){
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name: 'id',
						fieldLabel: 'ID'
					},
					{
						xtype: 'textfield',
						name: 'name',
						fieldLabel: 'Name'
					},
					{
						xtype: 'textfield',
						name: 'email',
						fieldLabel: 'Email'
					}
				]
			}
		];
		
		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Edit',
				action: 'edit'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];
		
		this.callParent(arguments);
	}
	
});