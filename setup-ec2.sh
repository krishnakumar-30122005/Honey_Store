#!/bin/bash
set -e

echo "=== Detecting OS and installing Docker ==="

if command -v apt-get &> /dev/null; then
    echo "Detected Debian/Ubuntu system."
    sudo apt-get update
    sudo apt-get install -y docker.io
elif command -v yum &> /dev/null; then
    echo "Detected RedHat/Amazon Linux system."
    sudo yum update -y
    sudo yum install -y docker
else
    echo "Unsupported OS. Please install Docker manually."
    exit 1
fi

echo "Starting and enabling Docker service..."
sudo systemctl start docker || sudo service docker start
sudo systemctl enable docker || true

echo "Adding user '$USER' to the docker group..."
sudo usermod -aG docker $USER

echo "=== EC2 Docker Setup Complete! ==="
echo "IMPORTANT: Please log out of your SSH session and log back in for permissions to take effect."
