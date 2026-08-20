# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy static website files into the Nginx public directory
COPY index.html /usr/share/nginx/html/
COPY index1.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY image.png /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
