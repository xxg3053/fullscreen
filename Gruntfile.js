module.exports = function(grunt) { // 配置 
		grunt.initConfig({ 
			pkg : grunt.file.readJSON('package.json'), 
			concat : { 
				domop : { 
					//src: ['js/test1.js', 'src/test2.js'], 
					//dest: 'dest/test.js' 
				} 
			}, 
			uglify : { 
				options : { 
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' 
					}, 
				build : { 
					src : 'js/pageSwitch.js', 
					dest : 'js/pageSwitch.min.js'
					} 
				} 
		}); 
		// 载入concat和uglify插件，分别对于合并和压缩 
		grunt.loadNpmTasks('grunt-contrib-concat'); 
		grunt.loadNpmTasks('grunt-contrib-uglify'); // 注册任务
		grunt.registerTask('default', ['concat', 'uglify']); };