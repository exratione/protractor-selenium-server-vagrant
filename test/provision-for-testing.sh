#!/bin/bash
#
# Vagrant should run this after all other provisioning is done to install items
# needed for this small test setup.
#
# e.g. in the Vagrantfile:
# config.vm.provision :shell, :path => "test/provision-for-testing.sh"
#

# Install Express.
npm install -g express

# Set NODE_PATH for all users.
echo 'export NODE_PATH=/usr/local/lib/node_modules' > /etc/profile.d/node_path.sh
