# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build on. Here we're
  # using 64-bit Ubuntu 12.04 LTS.
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  # It would be pleasant to be able to use Ubuntu 14.04 instead, but as of
  # Q2 2014 there is a blocking issue in the interaction between libGL and
  # Chromium on Ubuntu 14.04 that prevents Chromium running under Xvfb. This
  # issue is not present on Ubuntu 12.04.
  # config.vm.box = "trusty64"
  # config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  #
  # Set up synced folders for the workspaces or projects that you want to test
  # with Protractor. For example:
  #config.vm.synced_folder "/my-workspace/project", "/project"
  #config.vm.synced_folder "/my-workspace", "/workspace"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: "192.168.41.10"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant.
  config.vm.provider :virtualbox do |vb|
    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

  # Run an initial provisioning block that installs or updates the Chef client
  # on the machine. We have to get up past 11.6.0 to support environments with
  # chef-solo.
  #
  # For this to work you must have installed the vagrant-omnibus plugin via:
  # vagrant plugin install vagrant-omnibus
  config.omnibus.chef_version = :latest

  # Enable provisioning with chef solo, specifying a cookbooks path, roles
  # path, and data_bags path (all relative to this Vagrantfile), and adding
  # some recipes and/or roles.
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "./cookbooks"
    chef.roles_path = "./roles"
    chef.environments_path = "./environments"
    chef.environment = "local-vagrant"
    chef.add_role "protractor-selenium-server"
  end
end
