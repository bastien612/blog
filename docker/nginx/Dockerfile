FROM nginx:1.17.6-alpine

RUN apk update && apk upgrade
RUN apk add php7 php7-fpm php7-opcache php7-common php7-mbstring php7-xmlrpc php7-soap php7-gd php7-xml php7-intl php7-pgsql php7-cli php7-mcrypt php7-ldap php7-zip php7-curl

COPY ./entrypoint.sh /
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait

RUN chmod +x /wait && chmod +x /entrypoint.sh && dos2unix /entrypoint.sh 

RUN ls -la

CMD /wait && nginx "-g" "daemon off;"