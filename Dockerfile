# ใช้ base image ที่เป็น Node.js สำหรับ build
FROM node:18 AS build

# สร้าง working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโปรเจค
COPY . .

# Build โปรเจค
RUN npm run build

# ใช้ base image ที่เป็น Nginx สำหรับ production
FROM nginx:alpine

# คัดลอกไฟล์ที่ build มาแล้วจาก stage ก่อนหน้า
COPY --from=build /app/dist /usr/share/nginx/html

# คัดลอกการตั้งค่า Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# เปิด port 80
EXPOSE 80

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]