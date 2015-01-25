# A Vagrant VM For Protractor End to End Tests

Vagrant and Chef are here used to launch and provision an Ubuntu 14.04 virtual
machine for the purpose of running headless browser end to end tests against
AngularJS web applications using [Protractor][0], a test tool that works with
the established Selenium and WebDriver ecosystem framework.

The following items are installed on the VM:

  * Protractor
  * Selenium Standalone Server
  * Xvfb
  * Chromium
  * Firefox
  * PhantomJS

## Setup

### Install Vagrant

Download the latest Vagrant installer for your platform from
[http://downloads.vagrantup.com][1]. Don't use the Vagrant version in the
default package repositories because it is far too old.

### Install Virtualbox

To obtain a suitably recent version of Virtualbox, just follow the
[instructions][2] at the Virtualbox website. You can either download a package,
or set up your package management system to use the latest branches:

For example, for Ubuntu 14.04 (Trusty) add this line to `/etc/apt/sources.list`:

```
deb http://download.virtualbox.org/virtualbox/debian trusty contrib
```

Then run:

```
wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
sudo apt-get update
sudo apt-get install virtualbox-4.3
```

### Install the vagrant-omnibus Plugin

The [vagrant-omnibus][3] plugin installs or updates the version of Chef in the
Vagrant VM:

```
vagrant plugin install vagrant-omnibus
```

### Install Librarian-chef

[Librarian-chef][4] is a tool for managing your cookbooks, and will fetch them
based on the contents of the Cheffile in the project directory. To install on
Ubuntu 14.04 you will have to first update to Ruby 2.*, such by using [RVM][5],
and then:

```
sudo gem install chef librarian-chef
```

Adjust as appropriate for other distributions.

### Setup the Project to Be Tested

To use this VM to test an AngularJS applications with Protractor first alter the
Vagrantfile to create synced folders that include the relevant Protractor
configuration files. E.g.:

```
config.vm.synced_folder "/my-workspace/project", "/project"
config.vm.synced_folder "/my-workspace", "/workspace"
```

A running instance of the AngularJS application is also needed, but this can be
on another VM or remote server. Since Protractor uses Selenium, the tested
application can be anywhere so long as its web server is accessible from the
Protractor VM.

### Start and Provision the VM

Once the above pieces are in place:

```
cd /path/to/protractor-selenium-server-vagrant
librarian-chef install
vagrant up
```

This will launch and provision your virtual machine. Note that installing the
Oracle JDK can take a while. Once done you can set up and run Protractor tests
in the server, using configuration scripts from your synced project directories.

## Testing the Protractor / Selenium Setup

A trivial test Express server, Jasmine test cases, and Protractor configuration
are included under the `test` directory in this repository. To verify that the
Vagrant VM setup is correct and functional, log in via SSH:

```
cd /path/to/protractor-selenium-server-vagrant
vagrant ssh
```

Then install Express globally and run the Protractor tests for various browsers.
All should pass:

```
sudo npm install -g express
cd /vagrant/test
protractor protractor.conf.chromium.js
protractor protractor.conf.firefox.js
protractor protractor.conf.phantomjs.js
```

These Protractor configuration files launch the Express server before tests
run and then shut it down afterwards. This is neither common nor recommended
as an approach to end to end testing, but it is helpful here.

## Notes

### Provisioning is Slow

Bringing up a new server is a lengthy provisioning process. Many packages are
required to install Chromium and Firefox on a headless server, and this can take
quite the long time. This is not well suited to creating servers on demand: you
are better off provisioning once, creating an image, and then instantiating new
VMs from that image.

### The Latest Packages Usually Have Issues

Since late 2013 it has frequently been the case that at least one of Chromium,
Firefox, or PhantomJS does not function in this setup when using the latest
stable versions of every package from the default Ubuntu and NPM repositories.

For example, in Q2 2014 there was a blocking issue in the interaction between
the libGL library and Chromium in Ubuntu 14.04. As of Q1 2015 for Ubuntu 14.04
there is (a) a [blocking issue][6] in the interaction between current latest
release versions of Protractor and PhantomJS, (b) [another blocking issue][7] in
the interaction between Selenium 2.44.0 and Firefox 35.0. You are not even safe
to back down to Ubuntu 12.04 where things have been more stable, as there
versions of Chromedriver and Chromium have slipped out of sync with one another
as of Q1 2015.

The provisioning used here installs the latest generally available releases for
all items of interest exception for Selenium, where the version must be
specified. Depending on the situation at the time of use, you may want to either
update to versions yet to make it into the general repositories, or downgrade
selectively. The best approach to take depends on the details of the issue at
the time, so there is little advice to be given, unfortunately.

[0]: https://github.com/angular/protractor
[1]: http://downloads.vagrantup.com
[2]: https://www.virtualbox.org/wiki/Downloads
[3]: https://github.com/schisamo/vagrant-omnibus
[4]: https://github.com/applicationsonline/librarian-chef
[5]: https://rvm.io
[6]: https://github.com/angular/protractor/issues/1512
[7]: https://code.google.com/p/selenium/issues/detail?id=8390
