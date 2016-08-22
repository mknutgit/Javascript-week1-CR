Use Ctrl + Shift + M to generate a readme preview. It my be alt if you are on a silly mac.

# Github API Assessment

## JavaScript, Week 1: Practice with APIs and node.js

### By: Matt Knutson

### Description

This week's code review is to create a website where the user can enter a GitHub username into a form and submit it to see names and descriptions of that person's public repositories.

### Known Bugs

* Can only display up to 30 repositories, even if the user has more than 30 repos.

### Setup

Clone this repo on to your desktop, make sure that you have node.js installed on your computer and then:
* Navigate into the project folder.
* Place your Github API key in between the quotes in the .env file and save

* In your terminal, run the commands:
```shell
npm install
bower install
```
* Once they are finished installing successfully, enter the commands:
```shell
gulp build
gulp serve
```
* Enjoy the website!

### Technologies Used
* HTML
* CSS
* SCSS
* JavaScript
* jQuery
* Node.js
* bower
* npm
* Gulp
* JSHint
* Browserify
* Bootstrap v3.3.6

###Copyright & Licensing

Copyright (c) 2015 **Matt Knutson**

*This software is licensed under the MIT license.*

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

For MAMP, follow the instructions below: 

These instructions were taken from the following article and adopted for Workfrom specifically:

http://blainsmith.com/articles/quick-and-dirty-local-domain-names-for-mamp ** 

Step 1. Edit your hosts file
```
Open the hosts file in your text editor of choice. 
Example: From your root directory in terminal enter "atom /etc/hosts".
Add the following to the end of the file: 127.0.0.1 workfrom.dev.
```

Step 2. Create the Website Folder
```
Open MAMP-Preferences-Web Server and take note of the document root path.
Navigate to that folder and add your website folder there - workfrom.dev.
Example: mattknutson/desktop/workfrom.co/workfrom.dev.
Important, the folder must be named to same as the name you used in step 1.
```
Step 3. Enable Virtual Hosts in Apache

There is a specific file for Apache that handles virtual hosts:

/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

Add the following to that file changing ServerAdmin and DocumentRoot information to your own.
```
#<VirtualHost *:80>

		ServerAdmin matt@workfrom.co
		DocumentRoot "/Users/mattknutson/Desktop/workfrom.co"
		ServerName workfrom.dev
		ServerAlias localhost

#</VirtualHost>
```

Step 4. Edit Main Apache httpd.conf file

Follow step 4. instructions here:

http://blainsmith.com/articles/quick-and-dirty-local-domain-names-for-mamp ** 
