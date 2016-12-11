Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.hostname = "ratio.by"
  config.vm.network :private_network, ip: '5.5.5.5'
  config.hostsupdater.aliases = ['api.ratio.by', 'static.ratio.by']

  config.vm.synced_folder "saltstack/salt", "/srv/salt/"
  config.vm.synced_folder "saltstack/pillar", "/srv/pillar/"
  config.vm.synced_folder "saltstack/keys", "/srv/keys/"
  config.vm.synced_folder "api", "/api"
  config.vm.synced_folder "web", "/web"

  config.vm.provision :salt do |salt|
  	salt.bootstrap_options = "-P"
    salt.minion_config = "saltstack/minion"
    salt.run_highstate = true
    salt.verbose = true
  end
end
