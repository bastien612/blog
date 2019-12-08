FROM nginx:1.17.6-alpine

COPY ./entrypoint.sh /
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait

RUN chmod +x /wait && chmod +x /entrypoint.sh && dos2unix /entrypoint.sh 


CMD /wait && nginx "-g" "daemon off;"