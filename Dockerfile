FROM node
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 80
ENTRYPOINT ["node", "index.js"]