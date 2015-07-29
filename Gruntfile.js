module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd/mm/yyyy") %> */\n'
			},
			dist: {
				src: 'kafe.lorem.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'kafe.lorem.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},

		watch: {
			scripts: {
				files: ['**/*.js'],
				tasks: ['jshint'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-umd');

	grunt.registerTask('default', ['uglify']);

};