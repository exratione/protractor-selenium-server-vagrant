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
  'n-and-nodejs' => {
    'n' => {
      'version' => '1.2.1'
    },
    'nodejs' => {
      'version' => 'stable'
    }
  },
  'protractor-selenium-server' => {
    # It takes a long time to install Firefox and Chromium via packages on a
    # bare server. It requires many supporting packages.
    'browser-install-timeout' => 1200,
    'selenium' => {
      'install-dir' => '/usr/local/share/selenium',
      'log-dir' => '/var/log/selenium',
      'version' => '2.41.0',
    },
    'xvfb' => {
      'display' => '10',
      'resolution' => '1024x768x24'
    }
  }
)
