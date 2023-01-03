FROM node:14
RUN mkdir ../home/app 
WORKDIR /../home/app
COPY . .
RUN npm install
EXPOSE 9900
CMD [ "npm", "start" ]
