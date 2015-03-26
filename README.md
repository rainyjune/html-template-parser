# html-template-parser

##Getting Started

This plugin requires Grunt >= 0.4.2

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as installed and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

>npm install htmltemplateparser

Once the plugin has been installed, it may be enabled inside your Gruntfilie with this line of JavaScript:

>grunt.loadNpmTasks('htmltemplateparser');


##Run the task


Run this task with the grunt htmltemplateparser command.

Task targets, files and options may be specified according to the grunt Configuring tasks guide.

##Usage Examples

This configuration will be parse and generate a HTML file using the default options:

```
// Project configuration. 
grunt.initConfig({
  uglify: {
    my_target: {
      files: [
        {
          expand: true,
          src: ['templates/index.html'],
          dest: './tpl/',
          ext: '*.html'
        }
      ]
    }
  }
});
```
