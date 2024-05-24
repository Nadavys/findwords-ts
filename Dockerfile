FROM node:18

WORKDIR /app
COPY . .
RUN npm install



# Run the tests and show the results
CMD [ "npm", "test" ]