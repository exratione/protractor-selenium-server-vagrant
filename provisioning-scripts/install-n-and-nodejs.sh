#!/bin/bash
#
# Debian-style distro installation of n and Node.js binaries.
#

# --------------------------------------------------------------------------
# Install build tools.
# --------------------------------------------------------------------------

# Not needed in this case, as it was already carried out by an earlier script.
# apt-get update

# Install the necessities. Note that n uses curl.
apt-get install -y curl build-essential

# --------------------------------------------------------------------------
# Install Node.js from binaries using n.
# See: https://github.com/visionmedia/n
# --------------------------------------------------------------------------

[ -z "$N_VERSION" ] && N_VERSION=1.2.1
[ -z "$NODE_VERSION" ] && NODE_VERSION=stable

echo "Installing n $N_VERSION and Node.js $NODE_VERSION"

cd /tmp
# Clean out any leftovers from an earlier provisioning run.
rm -rf n-${N_VERSION}
rm -f ${N_VERSION}.tar.gz

# Obtain n and install it.
wget https://github.com/visionmedia/n/archive/${N_VERSION}.tar.gz
tar zxf ${N_VERSION}.tar.gz
cd n-${N_VERSION}
make install

# n now obtains Node.js and installs it.
n $NODE_VERSION
