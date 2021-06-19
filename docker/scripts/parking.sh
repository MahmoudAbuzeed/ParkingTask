echo "Starting Streams Service 🚀🚀🔥🔥"
pm2 start ./config/pm2.parking.config.js --name Parking-Service --log /var/log/pm2/pm2.log --watch --no-daemon