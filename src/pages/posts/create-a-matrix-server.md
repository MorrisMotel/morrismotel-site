---
layout: ../../components/layouts/post.astro
title: "Create A Matrix Server"
slug: create-a-matrix-server
date: 2022-04-22
author: "Cain"
desc: "Matrix is a decentralized and open source chat protocol, which encourages users to launch their own homeserver."
img: "/images/create-a-matrix-server/thumb.png"
imgWidth: 800
imgHeight: 500
tags:
  - licit-guides
---

Matrix is a decentralized and open source chat protocol, most popularly used with the application "Element." Since it is decentralized and open source, users are encouraged to launch their own homeservers. 

So, how do you launch your own homeserver? 

In this tutorial, we'll be using Ubuntu Server 20.04. We're also going to be using Docker and Synapse. Docker is a tool that lets us container our applications – which comes in handy especially if you plan on running multiple applications on your server.  Synapse is the matrix server software. Alternatively you can use Dendrite, but for the purposes of this guide we'll be using Synapse. We'll also be installing Portainer, a GUI for Docker, for ease of managing Docker containers, and Caddy, which lets us create a reverse proxy for both Portainer and Synapse. Let's get started.

## Installing Docker

We're going to start by installing all the essentials, starting with Docker. First, let's update our system with `apt update -y && apt upgrade -y`. 

Then, install some prerequesites. 

    $ sudo apt install apt-transport-https ca-certificates curl software-properties-common

Now let's install the GPG key for the Docker repository.

    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Then add the Docker repository to `apt` sources.

    $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

Now, just install Docker.

    $ sudo apt install docker-ce

Start docker and enable it to run at startup using `systemctl start docker && systemctl enable docker`, and then verify that it is running by executing `systemctl status docker`. It should say `active`. Now let's move on to installing Portainer, a GUI manager for Docker. 

## Configuring the Reverse Proxy

You'll first need to point your subdomain to the server IP address using an A record by going to the dashboard of your domain provider and adding it.

Porkbun looks like this.
![](/images/create-a-matrix-server/image1.png)
Now it's time to configure Caddy. First, make sure your server is up to date using `apt update -y && apt upgrade -y`. 

Then add the prerequesites, Caddy GPG key and repository, update it, and install it.

    $ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
    $ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo tee /etc/apt/trusted.gpg.d/caddy-stable.asc
    $ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
    $ sudo apt update
    $ sudo apt install caddy

In /etc/caddy/, there should be a Caddyfile listed there. If there's not, use your text editor of choice to create one. `Caddyfile` should be the exact name, with no file extension. Type in the following: 

    (matrix-well-known-header) {
    	# Headers
    	header Access-Control-Allow-Origin "*"
    	header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    	header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    	header Content-Type "application/json"
    }
    
    example.com {
    	encode gzip
    	reverse_proxy http://localhost:2368
    
    
    	handle /.well-known/matrix/server {
    		import matrix-well-known-header
    		respond `{"m.server":"matrix.example.com:443"}`
    	}
    
    	handle /.well-known/matrix/client {
    		import matrix-well-known-header
    		respond `{"m.homeserver":{"base_url":"https://example.com"},"m.identity_server":{"base_url":"https://example.com"}}`
    	}
    }
    
    https://matrix.example.com {
    	reverse_proxy /_matrix/* http://localhost:8008
    	reverse_proxy /_synapse/client/* http://localhost:8008
    }
    
    example.com:8448 {
      reverse_proxy http://localhost:8008
    }

Exit your editor and type `caddy reload` and hit enter. 

## Installing Synapse

Back to the terminal, type the following command:

    docker run -d --name synapse \
    	-v /var/docker_data/matrix:/data \
    	-p 8008:8008 \
    	matrixdotorg/synapse:latest

Once it's finished, type this: 

    docker run -it --rm \
    	-v /var/docker_data/matrix:/data \
    	-e SYNAPSE_SERVER_NAME=domain.com \
    	-e SYNAPSE_REPORT_STATS=yes \
    	matrixdotorg/synapse:latest generate

Ensure that you do not include the `matrix` subdomain when typing the server name – this will allow you to host Synapse on matrix.domain.com, but still show domain.com as the homeserver. 

If you have any issues with acme verification, go back to the Caddyfile and add the following underneath your example.com block:

    tls {
        issuer zerossl
    }

Otherwise, you're done with the reverse proxy portion. 

## (Optional) Portainer Installation

What we're going to do now is launch the Portainer container.

    $ docker container create portainer_data
    $ docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

Make sure to set VIRTUAL_HOST and VIRTUAL_PORT to the domain & port you'd like to host it on – that is, if you want to host it on a domain and not just on an IP. You can do this by adding `-e VIRTUAL_HOST=portainer.example.com` and `-e VIRTUAL_PORT=9000` to the command. Once the server has started, navigate to your IP:PORT and ensure that Portainer is running correctly.

When you first launch Portainer, it will pop up with an initialization page. Create an account and assuming you've followed the guide thus far, choose Local for the Docker connection. That should be all. 

Then, to connect it to your domain, go back to your Caddyfile in /etc/caddy/ and add the following:

    portainer.example.com {
    	encode gzip
    	reverse_proxy http://localhost:9443
    }

Like earlier, you're also going to want to go to your domain provider and create an A record connecting `portainer.example.com` to the IP that portainer is running on.

## Conclusion

Finally, you should put your domain.com into [https://federationtester.matrix.org/](https://federationtester.matrix.org/#morrismotel.com) and ensure that your federation is set up, and also navigate to matrix.domain.com and check that the Synapse default page is showing. If you have any issues, feel free to comment them down below or reach out to us on Matrix/Discord. 

Then all that's left to do is to create an account under the homeserver and create rooms/spaces. 
