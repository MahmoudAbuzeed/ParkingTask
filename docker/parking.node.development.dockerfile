FROM node:latest

LABEL author="Mahmoud Abozeed"
WORKDIR /parking

RUN npm install -g pm2@latest
RUN pm2 install typescript
RUN yarn install

RUN mkdir -p /var/log/pm2

EXPOSE 8000

ENTRYPOINT ["/bin/bash", "./docker/scripts/parking.sh"]
