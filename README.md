A Vagrant VM For Protractor End to End Tests
============================================

Vagrant and Chef are here used to launch and provision an Ubuntu virtual machine
for the purpose of running headless browser end to end tests against AngularJS
web applications. This sets up [Protractor][0] on the VM, a test tool that works
with the established Selenium and WebDriver ecosystem for end to end testing.

To use this VM to test your applications with Protractor you need only alter the
Vagrantfile to create synced folders that include your Protractor configuration
files. E.g.:

```
  config.vm.synced_folder "/my-workspace/project", "/project"
  config.vm.synced_folder "/my-workspace", "/workspace"
```

A running AngularJS application is needed, but this could be on another VM or a
remote server. Since Protractor uses Selenium as a basis, the tested application
can be anywhere so long as it is accessible.

Install Vagrant
---------------

Download the latest Vagrant installer for your platform from
[http://downloads.vagrantup.com][1]. Don't use the Vagrant version in the
default package repositories because it is far too old.

Install Virtualbox
------------------

To obtain a suitably recent version of Virtualbox, just follow the
[instructions][2] at the Virtualbox website. You can either download a package,
or set up your package management system to use the latest branches:

For example, for Ubuntu 12.04 (Precise) add this line to
`/etc/apt/sources.list`:

```
deb http://download.virtualbox.org/virtualbox/debian precise contrib
```

Then run:

```
wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
sudo apt-get update
sudo apt-get install virtualbox-4.3
```

Install Librarian-chef
----------------------

Librarian-chef is a tool for managing your cookbooks: it will fetch them based
on the contents of the Cheffile in a project directory. To install on Ubuntu
12.04 run the following commands:

```
sudo apt-get install chef ruby1.9.1-dev
sudo gem install librarian-chef
```

Adjust as appropriate for other distributions.

Start and Provision the VM
--------------------------

Once the above pieces are in place:

```
cd /path/to/protractor-selenium-server-vagrant
librarian-chef install
vagrant up
```

This will launch and provision your virtual machine. You can now set up and run
Protractor tests in the server, using configuration scripts from your synced
project directories.

Testing the Protractor / Selenium Setup
---------------------------------------

A trivial test Express server, Jasmine test cases, and Protractor configuration
are included under `/test`. To verify that the Vagrant VM setup is correct and
functional, log in via SSH and run the Protractor tests for various browsers.

```
cd /path/to/protractor-selenium-server-vagrant
vagrant ssh
cd /vagrant/test
protractor protractor.conf.chromium.js
protractor protractor.conf.firefox.js
protractor protractor.conf.phantomjs.js
```

The Protractor configuration file launches the Express server before the tests
run and then shuts it down afterwards. This is neither a common nor recommended
approach to end to end testing, but it is helpful here.

Current Functional Status
-------------------------

  * Chromium: works fine.
  * Firefox: hangs indefinitely.
  * PhantomJS: fails on [a known issue][3].

[0]: https://github.com/angular/protractor
[1]: http://downloads.vagrantup.com
[2]: https://www.virtualbox.org/wiki/Downloads
[3]: https://github.com/angular/protractor/issues/85
