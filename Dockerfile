FROM python:3.9-slim

WORKDIR /app

# Copy app
COPY app.js .

# Install node inside container (light trick)
RUN apt-get update && apt-get install -y nodejs npm

# Install express
RUN npm install express

# Create non-root user
RUN useradd -m appuser
USER appuser

EXPOSE 3000

CMD ["node", "app.js"]