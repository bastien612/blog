FROM postgres:11.5-alpine

COPY initdb.sh /docker-entrypoint-initdb.d/initdb.sh
RUN dos2unix /docker-entrypoint-initdb.d/initdb.sh

USER postgres

# needs not to be an alpine to run
# RUN localedef -i fr_FR -c -f UTF-8 -A /usr/share/locale/locale.alias fr_FR.UTF-8 
# ENV LANG fr_FR.utf8