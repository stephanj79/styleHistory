module.exports=function(grunt){
    grunt.initConfig({
        uglify:{
            dist:{
                options:{
                    banner:'<%= banner %>',sourcesContent:true
                },files:{
                    'jquery.stylehistroy.min.js':'jquery.stylehistroy.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',function(){
        grunt.task.run(['uglify']);
    });
}