---
title: "Serving Servers"
date: "2021-07-20"
featured: images/social-card.png
---

So I thought I'd write a post about servers. Server management is important as a web developer and understanding how to create and secure a server is vital to make sure that staging and production servers for your clients. Currently I use Linode, a cloud based server service which provides various server builds and setups for you which you can have full access to to build staging and production servers.

A linode setup is really easy as the site will have a step by step on creating what you want from the server such as how many CPU cores you need, HDD space, RAM etc. Once all selected Linode will spin up the server and give you all the relevant details for the IP in a dashboard along with real time usage stats and graphs if needed. Once the server is created i recommend following the getting started with linode documentation and secure your server documentation that Linode provides. This is really good and easy to use documentation and will ensure that you create the correct user accounts and secure the server with SSH access.

SSH access is a must for servers to make sure that no one can brute force your server and mess around with it or get access to client information. SSH stands for secure shell access, this will work with a key pair that you create on your machine and add to the server, this means that if your encrypted passphrase matches the key on the server you can gain access. This means no easy to guess passwords will be used thus securing the server. I often refer to the documentation from Linode on setup of a new server as it's very helpful. 

[Linode setup docs](https://www.linode.com/docs/getting-started/)

Once the server is set up and secured then you can set up your LAMP or LEMP stacks for hosting your sites etc. I will get into LEMP and LAMP another time.

A fun thing that you can do with servers is name them. In my job currently we have our servers named after Buffy the Vampire characters, which makes it fun and also more memorable when trying to access than some of the generic names Linode will give you.

I hope the resource above helps as it's something I have found helpful many times and enjoy building and securing your servers.
