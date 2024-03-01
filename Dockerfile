FROM node:21-alpine3.18 as angular

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g @angular/cli

RUN ng build --output-path=/app/docs/portfolioSite --base-href /portfolioSite/

FROM nginx:alpine

COPY --from=angular /app/docs/portfolioSite /usr/share/nginx/html
EXPOSE 6969

CMD ["nginx", "-g", "daemon off;"]
