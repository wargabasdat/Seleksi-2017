FROM node:boron-alpine

RUN npm install -g -s --no-progress yarn

# Create app directory and set as working directory
RUN mkdir -p /usr/src/movieFreak
RUN mkdir -p /usr/src/movieFreak/client
RUN mkdir -p /usr/src/movieFreak/server
WORKDIR /usr/src/movieFreak

# Use default node (non-root) user
USER node

# Install app dependencies (done before copying app source to optimize caching)
COPY package.json /usr/src/movieFreak/
COPY ./server/package.json /usr/src/movieFreak/server/package.json
COPY ./client/package.json /usr/src/movieFreak/client/package.json

# Permission problem fix
USER root
RUN chown -R node:node /usr/src/movieFreak
USER node

RUN yarn
RUN yarn install

# Copy app source to container
COPY . /usr/src/movieFreak

# Permission problem fix
USER root
RUN chown -R node:node /usr/src/movieFreak
USER node

EXPOSE 3000 3001 80