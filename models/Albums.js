var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Albums = new keystone.List('Albums', {track : true, label : 'Albuns'});

Albums.add(
  { heading: 'Main Configs' },
  {category: { type: Types.Relationship, ref: 'Categories'}},
  {state: { type: Types.Select, options: 'draft, published', default: 'draft', label : 'State'}},

  // cover
  { heading: 'Cover Image' },
  {cover : {type : Types.LocalFile,
            dest : 'public/upload/',
            filename: function(item, file){
          		return item.id + '.' + file.extension
          	},
            format: function(item, file){
          		  return '<img src="/public/upload/'+file.filename+'" style="max-width: 300px">'
          	}
            }
  },
  {shownInHome : {type : Types.Boolean, default : false, label : "Shown in home?"}},
  {color : {type : Types.Color, default : '#000000', dependsOn : {shownInHome:true}, label : 'UI Color'}},
  //
  { heading: 'Photos' },
  {photos : {type : Types.LocalFiles,
            dest : 'public/upload/',
            filename: function(item, file){
          		return item.id + '.' + file.extension
          	},
            format: function(item, file){
          		  return '<img src="/public/upload/'+file.filename+'" style="max-width: 300px">'
          	}
            }
  }
);

/**
 * Registration
 */
Albums.register();
