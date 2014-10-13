module.exports = function(grunt) {

	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

		jade: {
				compile: {
						options: {
								data: {
										debug: true,
										timestamp: ""
								}
						},
						files: {
								// Layout
								'templates/layout/header.html': 'jade/layout/header.jade',
								'templates/layout/footer.html': 'jade/layout/footer.jade',

								// Pages
								'index.html': 'jade/index.jade',
								'templates/home.html': 'jade/home.jade',
								'templates/rules.html': 'jade/rules.jade',
								'templates/schedule.html': 'jade/schedule.jade',
								'templates/gallery.html': 'jade/gallery.jade',
								'templates/charms.html': 'jade/charms.jade',
								'templates/contacts.html': 'jade/contacts.jade',
								'templates/menager.html': 'jade/menager.jade',
						}
				}
		},
		sass: {
			dist: {
					options: {
							loadPath: [
									'scss/',
							]
					},
					files: {
							'css/main.css': ['scss/main.scss', 'css/utility/**/*.scss']
					}
			}
		},

		watch: {
				jade: { 
						files: ['jade/**/*.jade'],
						tasks: ['jade'],
						options: {
								spawn: false,
						}
				},
				styles: {
						files: ['scss/**/*.scss'],
						tasks: ['sass'],
						options: {
								spawn: false,
						}
				}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');



	grunt.registerTask('build', ['jade', 'sass']);


	grunt.registerTask('default', ['build']);

};