#
# Environment definition for a local Vagrant VM.
#

default_attributes(
  'java' => {
    'install_flavor' => 'oracle',
    'jdk_version' => '7',
    'oracle' => {
      'accept_oracle_download_terms' => true
    }
  },
  'nodejs' => {
    'install_method' => 'source',
    'version' => '0.10.22'
  },
  'protractor-selenium-server' => {
    'selenium' => {
      'install-dir' => '/usr/local/share/selenium',
      'log-dir' => '/var/log/selenium',
      'version' => '2.37.0'
    },
    'xvfb' => {
      'display' => '0'
    }
  }
)
