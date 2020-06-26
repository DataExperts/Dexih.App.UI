sudo cp dexih.api.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable dexih.api.service
sudo systemctl start dexih.api.service
