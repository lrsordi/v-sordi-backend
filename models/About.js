var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var About = new keystone.List('About', {track : true, label : 'About Configuration', nocreate:true, nodelete : true});

About.add({
  about_ptbr: { type: Types.Html, wysiwyg: true, initial: true, required: false, label : 'Text - PT BR' },
  about_enus: { type: Types.Html, wysiwyg: true, initial: true, required: false, label : 'Text - EN US' }
});

//abouts/58a3a6e2d8fc645c114dbc42

/**
 * Registration
 */
//GeneralInformation.defaultColumns = 'name, email, isAdmin';
About.register();
