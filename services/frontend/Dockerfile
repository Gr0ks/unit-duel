# Возьмите базовый образ

FROM node:14.15.1-alpine

# задайте рабочую директорию
WORKDIR /app

# добавьте `/app/node_modules/.bin` в $PATH
ENV PATH /app/node_modules/.bin:$PATH

# установите зависимости приложения
COPY package.json ./
COPY yarn.json ./
RUN npm install yarn
RUN yarn 

# добавьте приложение
COPY . ./
EXPOSE 3000
# запустите приложение
CMD ["yarn", "start"]