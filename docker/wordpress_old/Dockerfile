FROM php:7.3.12-fpm-alpine3.10

RUN apk update && apk upgrade
RUN apk add php7-opcache php7-common php7-mbstring php7-xmlrpc php7-soap php7-gd php7-xml php7-intl php7-mysqli php7-cli php7-mcrypt php7-ldap php7-zip php7-curl --no-cache



COPY ./etc/ /usr/local/etc/
