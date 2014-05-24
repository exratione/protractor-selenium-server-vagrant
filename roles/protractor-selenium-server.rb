#
# A role to set up a server ready to run Protractor with headless browsers.
#

run_list [
  # Third party cookbooks.
  # Put apt up front so as to ensure that "apt-get update" happens. This is
  # necessary as the version of Ubuntu we're using is a little outdated.
  'recipe[apt]',
  'recipe[build-essential]',
  'recipe[java]',
  # Custom cookbooks.
  'recipe[curl]',
  'recipe[n-and-nodejs]',
  'recipe[protractor-selenium-server]',
  'recipe[protractor-selenium-server::services]',
]
