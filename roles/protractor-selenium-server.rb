#
# A role to set up a server ready to run Protractor with headless browsers.
#

run_list [
  # Third party cookbooks.
  'recipe[java]',
  # Custom cookbooks.
  #
  # Note that protractor-selenium-server depends on the nodejs cookbook, but
  # we are installing Node.js via shell scripts instead. So that cookbook will
  # be installed by librarian-chef but never used.
  'recipe[protractor-selenium-server]',
  'recipe[protractor-selenium-server::services]',
]
