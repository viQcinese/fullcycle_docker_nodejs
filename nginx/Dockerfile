FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]

