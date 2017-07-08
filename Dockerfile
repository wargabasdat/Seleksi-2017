FROM node:boron-alpine

# Create app directory and set as working directory
RUN mkdir -p /usr/src/movieFreak
WORKDIR /usr/src/movieFreak

# Use default node (non-root) user
USER node

# Install app dependencies (done before copying app source to optimize caching)
COPY package.json /usr/src/movieFreak/

# Permission problem fix
USER root
RUN chown -R node:node /usr/src/movieFreak
USER node

RUN npm install --quiet

# Copy app source to container
COPY . /usr/src/movieFreak

# Permission problem fix
USER root
RUN chown -R node:node /usr/src/movieFreak
USER node

EXPOSE 3000
CMD ["npm", "start"]


