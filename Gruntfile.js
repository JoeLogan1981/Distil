module.exports = function(grunt) {

  // Bootstrap grunt
  grunt.initConfig({

    // Read package and secret files
    //----------------------------------------
    pkg: grunt.file.readJSON('package.json'),
    //----------------------------------------


    // SASS Task
    //----------------------------------------
    sass: {
      dist: {
        options: {
          lineNumbers: false
        },
        files: {
          'assets/css/main.css' : 'assets/sass/main.scss'
        }
      }
    },
    //----------------------------------------

    // UGLIFY TASK
    //----------------------------------------
    uglify: {
      build: {
        files: {
          'assets/js/main.min.js' : ['assets/js/*.js', '!assets/js/main.min.js']
        }
      }
    },
    //----------------------------------------

    // HTML VALIDATION
    //----------------------------------------
    htmlhint: {
      html1: {
        options: {
          'tag-pair': true,
          'doctype-first': true,
          'src-not-empty': true,
          'id-unique': true,
          'attr-lowercase': true,
          'tagname-lowercase': true
        },
        src: ['*.html']
      }
    },
    //----------------------------------------

    connect: {
      server: {
      options: {
        livereload: true,
        port: 9000
      }
    }
    },

    // WATCH TASK WITH LIVE RELOAD
    //----------------------------------------
    watch: {
      css: {
        files: 'assets/sass/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['assets/js/*.js', '!assets/js/main.min.js'],
        tasks: ['uglify']
      },
      html: {
        files: ['*.html', 'views/*.html'],
        tasks: ['htmlhint']
      },
      options: {
        livereload: true
      }
    }

  });



  // Load Grunt Tasks
  //----------------------------------------
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-htmlhint');
  //----------------------------------------


  // STANDARD TASKS
  //----------------------------------------

  // Run Watch Task
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('serve', [
    'connect', 'watch'
  ]);

  // Setup another task to only run stuff once, without monitoring
  grunt.registerTask('pass', ['sass','uglify','htmlhint']);


}
