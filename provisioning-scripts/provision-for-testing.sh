#!/bin/bash
#
# Run this after Node.js is present so as to install items needed for the small
# example test setup included in this package.
#

# Install Express.
npm install -g express

# Set NODE_PATH for all users.
echo 'export NODE_PATH=/usr/local/lib/node_modules' > /etc/profile.d/node_path.sh
