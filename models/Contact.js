var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Contacts = new keystone.List('Contacts', {track : true, label : 'Contacts Configurations', nocreate:true, nodelete : true});

Contacts.add({
	contactemail: { label : 'Contact E-mail', type: Types.Email, initial: true, required: false, index: true },
	location: { label : 'Location', type: Types.Text, initial: true, required: false },
	phone: { label : 'Phone', type: Types.Text, initial: true, required: false },
  facebook_url : {type : Types.Url, label : 'Facebook URL'},
  instagram_url : {type : Types.Url, label : 'Instagram URL'},
  recipientemail: { type: Types.Email, initial: true, required: false, label : 'Recipient e-mail (from form):' }
});

//contacts/58a3a7c92655036f11ebc8a5

/**
 * Registration
 */
//GeneralInformation.defaultColumns = 'name, email, isAdmin';
Contacts.register();
