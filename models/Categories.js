var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Categories = new keystone.List('Categories', {track : true, label : 'Categories',map: { name: 'slug' },sortable : true, autokey: { path: 'slug', from: 'title_ptbr', unique: true }});

Categories.add({
  title_ptbr: { type: String, initial: true, required: true, label : 'Name - PT BR' },
  title_enus: { type: String, initial: true, required: true, label : 'Name - EN US' },
  about_ptbr: { type: Types.Html, wysiwyg: true, initial: true, required: false, label : 'Text - PT BR' },
  about_enus: { type: Types.Html, wysiwyg: true, initial: true, required: false, label : 'Text - EN US' }
});

/**
 * Registration
 */
Categories.register();
