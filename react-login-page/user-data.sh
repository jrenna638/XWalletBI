#!/bin/bash
yum update -y
yum install httpd -y
yum install git -y
yum install tmux -y

service httpd start
chkconfig httpd on

cd /var/www/html
echo "Hello!" > index.html

git clone https://github.com/jrenna638/XWalletBI.git
unzip XWalletBI/react-login-page/site.zip
cp -r xwalletbi/site/* /var/www/html/

# Amazon Linux 2