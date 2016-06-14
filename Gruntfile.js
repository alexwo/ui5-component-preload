// Generated on 2016-06-14 using generator-sapui5 0.0.1
'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        openui5_preload: {
            danonemenu: {
                options: {
                    resources: {
                        cwd: "widgets/danonemenu",
                        prefix: "DanoneMenu"
                    },
                    dest: "widgets/danonemenu"
                },
                components: true
            },
            widget2: {
                options: {
                    resources: {
                        cwd: "widgets/component",
                        prefix: "namespace/namespacepart2/namespacepart3"
                    },
                    dest: "widgets/component"
                },
                components: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-openui5');


    grunt.registerTask('default', [
        'openui5_preload'
    ]);

};
