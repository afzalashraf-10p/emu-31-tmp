FROM turbo-registry2.hobsonshighered.com/naviance/amazonlinux-node:12 as prod-deps

USER root
WORKDIR /app

COPY .npmrc package* /app/

RUN npm ci --production --no-optional -S

FROM prod-deps as dev-env

RUN npm i --no-optional -S

COPY . /app

FROM dev-env as build-interfaces

# RUN npm run build success-planner-interfaces

# FROM build-interfaces as build-service-env

# RUN npm run build success-planner-service

# FROM turbo-registry2.hobsonshighered.com/naviance/amazonlinux-node:12 as service-runtime-env

# COPY --from=build-service-env /app/config /app/config
# COPY --from=build-service-env /app/dist /app/dist
# COPY --from=prod-deps /app/node_modules /app/node_modules
# COPY newrelic.js start.sh /app/

# WORKDIR /app

# USER root
# CMD [ "./start.sh"]

FROM build-interfaces as build-ui-env

RUN npm run build application-manager-ui

FROM nginx:mainline-alpine as ui-runtime-env

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-ui-env /app/dist/apps/application-manager-ui /app/dist/apps/application-manager-ui

# FROM hobsons-cfcr-docker.jfrog.io/hobsons/s3_deployer:STABLE as ui-deploy-env

# COPY --from=build-ui-env /app/dist/apps/application-manager-ui /app
