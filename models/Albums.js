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
  {shownInHome : {type : Types.Boolean, default : false, label : "Shown in home?"}},
  { heading: 'Cover Image',dependsOn : {shownInHome:true} },
  {cover : {type : Types.LocalFile,
            dependsOn : {shownInHome:true},
            dest : 'public/upload/',
            filename: function(item, file){
          		return new Date().getTime() + '.' + file.extension
          	},
            format: function(item, file){
          		  return '<img src="/public/upload/'+file.filename+'" style="max-width: 300px">'
          	}
            }
  },
  {color : {type : Types.Color, default : '#000000', dependsOn : {shownInHome:true}, label : 'UI Color'}},
  //
  { heading: 'Album Cover Image' },
  {albumCover : {type : Types.LocalFile,
            dest : 'public/upload/',
            filename: function(item, file){
          		return new Date().getTime() + '.' + file.extension
          	},
            format: function(item, file){
          		  return '<img src="/public/upload/'+file.filename+'" style="max-width: 300px">'
          	}
            }
  },
  { heading: 'Photos Low Quality' },
  {photosLowQuality : {type : Types.LocalFiles,
            dest : 'public/upload/',
            filename: function(item, file){
          		return  new Date().getTime() + '.' + file.extension
          	},
            format: function(item, file){
          		  return '<img src="/public/upload/'+file.filename+'" style="max-width: 300px">'
          	}
            }
  },
  //
  { heading: 'Photos' },
  {photos : {type : Types.LocalFiles,
            dest : 'public/upload/',
            filename: function(item, file){
          		return new Date().getTime() + '.' + file.extension;
          	},
            format: function(item, file){
          		  return '<a href="/public/upload/'+file.filename+'" style="max-width: 300px">LINKZ</a>'
          	}
            }
  }
);

/**
 * Registration
 */
Albums.register();
