FROM tiangolo/nginx-rtmp

# Install AWS CLI
RUN apt-get update && apt-get install -y \
    awscli \
    && rm -rf /var/lib/apt/lists/*

# Copy configurations
COPY nginx.conf /etc/nginx/nginx.conf
COPY scripts/upload_to_s3.sh /scripts/upload_to_s3.sh

# Make script executable
RUN chmod +x /scripts/upload_to_s3.sh