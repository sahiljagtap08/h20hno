# H2Oh No! 🌊
## Remote Water Quality Monitoring System

H2Oh No! is a cost-effective IoT solution for real-time water quality monitoring, designed to detect and track pollution events in bodies of water. The system combines hardware sensors with a modern web interface to provide immediate alerts and visualization of water quality parameters.

![Pollution Detection](https://img.shields.io/badge/Pollution-Detection-blue)
![Real Time](https://img.shields.io/badge/Monitoring-Real%20Time-green)
![IoT](https://img.shields.io/badge/Category-IoT-orange)

## 🎯 Key Features

- Real-time monitoring of water quality parameters
- GPS location tracking of pollution events
- Interactive map visualization
- Animated data graphs
- Instant pollution alerts
- Mobile-responsive dashboard

## 🔧 Tech Stack

### Hardware Components
- **Microcontroller**: ESP32 (WiFi-enabled)
- **Sensors**:
  - TDS (Total Dissolved Solids) Sensor
  - Turbidity Sensor
  - DHT11 Temperature & Humidity Sensor
  - NEO-6M GPS Module
- **Power Supply**: 4x 9V Batteries
- **Additional Components**:
  - Breadboards
  - Jumper Wires
  - Resistors
  - Waterproof Housing

### Software Stack
- **Frontend**:
  - Next.js
  - Tailwind CSS
  - Recharts (for data visualization)
  - Leaflet.js (for maps)
- **Backend**:
  - Next.js API Routes
  - WebSocket for real-time updates
- **Firmware**:
  - Arduino IDE/PlatformIO
  - ESP32 Arduino Core

## 📊 Monitored Parameters

- Total Dissolved Solids (TDS)
- Water Turbidity
- Temperature
- Humidity
- GPS Location

## 🚀 Getting Started

### Prerequisites
```bash
# Clone the repository
git clone https://github.com/yourusername/h2oh-no.git

# Navigate to the project directory
cd h2oh-no

# Install dependencies
npm install
```

### Hardware Setup
1. Connect the sensors to ESP32 according to the following pin configuration:
   - TDS Sensor: GPIO 34
   - Turbidity Sensor: GPIO 35
   - DHT11: GPIO 23
   - GPS Module: RX(GPIO 16), TX(GPIO 17)

2. Upload the firmware:
   ```bash
   # Using Platform IO
   pio run --target upload
   
   # Or using Arduino IDE
   # Open /firmware/main/main.ino and click upload
   ```

### Running the Web Interface
```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Usage

1. **Setup Device**:
   - Power on the monitoring device
   - Place it in the water body to be monitored
   - Ensure the GPS module remains above water

2. **Access Dashboard**:
   - Open the web interface at `http://localhost:3000`
   - View real-time data on the interactive dashboard
   - Monitor pollution alerts

3. **Configure Alerts**:
   - Set custom thresholds for different parameters
   - Configure notification preferences

## 🌊 Use Cases

- **Oil Spill Detection**: Early warning system for crude oil contamination
- **Agricultural Runoff**: Monitor fertilizer levels in water bodies
- **Environmental Research**: Track water quality parameters over time
- **Industrial Compliance**: Monitor water quality near industrial areas

## 📷 Screenshots

[Coming Soon]

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Thanks to all contributors who have helped with the development
- Special thanks to the ESP32 and Next.js communities for their excellent documentation
- Inspired by the need for accessible water quality monitoring solutions

## 📞 Contact

Your Name - [@twtofsahil](https://twitter.com/twtofsahil) - sjagtap2@gmu.edu

Project Link: [https://github.com/sahiljagtap08/h2oh-no](https://github.com/sahiljagtap08/h2oh-no)
