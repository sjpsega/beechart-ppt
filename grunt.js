/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'test/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    jade: {
      debug: {
        options: {
          pretty: true
        },
        files: {
          "index.html": "jade/index.jade",
          "test.html": "jade/test.jade"
        }
      }
    },
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'css/*.css': ['styl/*.styl'] // compile individually into dest, maintaining folder structure
        }
      },
      //暂时不知道这个的作用
      flatten: {
        options: {
          flatten: true
        },
        files: {
          // compile individually into dest, flattening folder structure
        }
      }
    },
    watch: {
      jade: {
        files: ['jade/*.jade'],
        tasks: 'jade'

      },
      stylus: {
        files: ['styl/*.styl'],
        tasks: 'stylus'
      }
    },
    server: {
      port: 80,
      base: '.'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-contrib');
  // Default task.
  grunt.registerTask('default', 'jade server watch');

};
