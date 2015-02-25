module.exports=function(grunt){
    var banner="/* stylehistory.js v.1.0.1\n** http://stephanjaeger-public.sharepoint.com\n** stephan@stephanjaeger.onmicrosoft.com\n** https://github.com/stephanj79/styleHistory\n** https://www.npmjs.com/package/stylehistory\n** Live-demo: http://jsfiddle.net/stephanj79/g7631mhf/\n** Copyright (c) 2015 Stephan Jäger\n** Available under the MIT license\n** https://github.com/stephanj79/styleHistory/blob/master/LICENSE-MIT\n*/";
    grunt.initConfig({
        uglify:{
            dist:{
                options:{
                    banner:banner,sourcesContent:true
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