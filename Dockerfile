# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn --ignore-engines
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY conf/app.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]