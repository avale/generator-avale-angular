'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var fs = require('fs');
var Stream = require('stream');
var bowerJson = require('bower-json');
var packageLicense = require('package-license');

var $ = require('gulp-load-plugins')();


gulp.task('licenses', function() {
    return generateLicenses()
        .pipe(gulp.dest(path.join(conf.paths.src, 'assets', 'data')));
});

function generateLicenses() {
    var stream = new Stream();
    readLicenses(function (licenses) {
        var file = new $.util.File({
            path: path.join(process.cwd(), 'licenses.json'),
            contents: new Buffer('mycallback(' + JSON.stringify(licenses, null, '\t') + ')')
        });

        stream.emit('data', file);
        stream.emit('finish');
    });
    return stream;

}

function readLicenses(callback) {
    var dir = './bower_components'
    var packages = fs.readdirSync(dir);
    var potentialFilenames = ['LICENSE', 'LICENSE.md', 'license.txt', 'MIT-LICENSE.txt'];
    var licenses = {};
    var completed = [];

    packages.forEach(function(pkg){
        bowerJson.find(path.resolve(dir, pkg), function(err, filename){
            if (!filename) {
                completed.push(pkg);
            } else {
                var packagePath = path.resolve(dir, pkg);
                var files = fs.readdirSync(packagePath);
                var foundLicense = false;

                for (var i = 0; i < potentialFilenames.length; i++) {
                    for (var j = 0; j < files.length; j++) {

                        if(potentialFilenames[i].toLowerCase() === files[j].toLowerCase()) {
                            var license = fs.readFileSync(path.resolve(packagePath, files[j]), 'utf8');
                            licenses[pkg] = license;
                            completed.push(pkg);
                            foundLicense = true;
                        }
                    }
                }

                if (!foundLicense) {
                    var licenseFromFS = packageLicense(path.resolve(dir, pkg));

                    if (licenseFromFS) {
                        licenses[pkg] = licenseFromFS;
                    } else {
                        licenses[pkg] = null;
                    }

                    completed.push(pkg);
                }
            }

            if (completed.length === packages.length) {
                callback(licenses);
            }
        });
    });
}
