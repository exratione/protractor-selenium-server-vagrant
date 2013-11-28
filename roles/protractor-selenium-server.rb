#
# A role to set up a server ready to run Protractor with headless browsers.
#

run_list [
  # Third party cookbooks. Ensure that apt runs first to force an update.
  'recipe[apt]',
  'recipe[java]',
  'recipe[nodejs]',
  # Custom cookbooks, with dependencies specified.
  'recipe[protractor-selenium-server]',
  'recipe[protractor-selenium-server::services]',
]
