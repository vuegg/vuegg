FROM node:9-alpine

LABEL name vuegg

# install git
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app

# copy sources
ADD . /app

# install dependencies and build dist
RUN npm run install:all && \
    npm run build

# expose server
EXPOSE 443

CMD ["npm", "run", "start"]
