Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "local.callpack.by"
  config.vm.network :private_network, ip: '3.3.3.3'

  config.vm.synced_folder "saltstack/salt", "/srv/salt/"
  config.vm.synced_folder "saltstack/pillar", "/srv/pillar/"
  config.vm.synced_folder "saltstack/keys", "/srv/keys/"
  #config.vm.synced_folder "app", "/var/www/app"

  config.vm.provision :salt do |salt|
  	salt.bootstrap_options = "-P"
    salt.minion_config = "saltstack/minion"
    salt.run_highstate = true
  end
end
