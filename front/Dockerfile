FROM node:22-alpine as build
WORKDIR /app
RUN npm run build

FROM httpd:alpine

COPY --from build /app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]

