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
            openInvoices: {
                options: {
                    resources: {
                        cwd: "widgets/openInvoices",
                        prefix: "dwc/widgets/openInvoices"
                    },
                    dest: "widgets/openInvoices"
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
