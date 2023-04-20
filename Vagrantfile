# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define "backend" do |backend|
    backend.vm.box = "generic/debian11"
    backend.vm.hostname = "backend"
    backend.vm.network "private_network", ip: "192.168.21.37"
    backend.ssh.forward_agent = true
    backend.vm.synced_folder ".", "/vagrant", type: "rsync"
    backend.vm.provision "ansible_local" do |ansible|
      ansible.playbook = "backend-playbook.yml"
    end
  end
  config.vm.define "frontend" do |frontend|
    frontend.vm.box = "generic/debian11"
    frontend.vm.hostname = "frontend"
    frontend.vm.network "forwarded_port", guest: 3000, host: 3000
    frontend.ssh.forward_agent = true
    frontend.vm.synced_folder ".", "/vagrant", type: "rsync"
    frontend.vm.provision "ansible_local" do |ansible|
      ansible.playbook = "frontend-playbook.yml"
    end
  end
end
