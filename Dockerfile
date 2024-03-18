FROM node:latest as angular

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install -g @angular/cli

RUN npm run build -- --output-path=docs --base-href=/portfolioSite/

FROM nginx:alpine

COPY --from=angular /app/docs/browser /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
