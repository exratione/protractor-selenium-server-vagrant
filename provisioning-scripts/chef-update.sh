#!/bin/bash
#
# Below is a Debian-style distro method of updating Chef to the latest version.
#
# If after a quick win that will work in all distros, you might try using the
# Opscode installation script:
#
# curl -L https://www.opscode.com/chef/install.sh | sudo bash
#

apt-get update
apt-get -y --no-upgrade install build-essential ruby1.9.1-dev
gem install chef --no-rdoc --no-ri --conservative
