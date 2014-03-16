#
# A role to set up a server ready to run Protractor with headless browsers.
#

run_list [
  # Third party cookbooks.
  'recipe[java]',
  # Custom cookbooks.
  'recipe[protractor-selenium-server]',
  'recipe[protractor-selenium-server::services]',
]
