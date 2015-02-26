module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('config.json'),
        uglify:{
            dist:{
                options:{
                    banner:'<%= config.banner %>',sourcesContent:true
                },files:{
                    'jquery.<%= pkg.name %>.min.js':'jquery.<%= pkg.name %>.js'
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            },
            dist: {
                files: {
                    'css/<%= pkg.name %>.min.css': 'css/<%= pkg.name %>.css'
                }
            }
        },
        jshint: {
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                dist: {
                    files: ['*.js']
                }
            }
        },
        less: {
            dist: {
                options: {
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'css/<%= pkg.name %>.css.map'
                },
                files: {
                    'css/<%= pkg.name %>.css': 'less/<%= pkg.name %>.less'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: '<%= config.autoprefixerBrowsers %>'
            },
            dist: {
                expand: true,
                flatten: true,
                src: ['css/*.css', '!css/*.min.css'],
                dest: 'css/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default',function(){
        grunt.task.run(['uglify','cssmin','jshint','less','autoprefixer']);
    });
}