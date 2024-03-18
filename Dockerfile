FROM node:21-alpine3.18 as angular

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build -- --output-path=docs --base-href

FROM nginx:alpine

COPY --from=angular /app/docs/browser /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
