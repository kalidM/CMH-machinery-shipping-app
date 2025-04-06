

# ** CHM Machinery Shipping App** 🚛

![App Screenshot](https://imgur.com/VYiecpQ)

A logistics platform for booking and tracking machinery/tools shipments across Ethiopia.

## **Table of Contents**
1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Installation](#-installation)
4. [Configuration](#-configuration)
5. [Known Issues](#-known-issues)
6. [Roadmap](#-roadmap)

---

## **✨ Features**
- **User Authentication** (Signup/Login with Firebase)
- **Shipment Booking System**
  - Calculate shipping quotes
  - Select pickup/delivery locations
- **Real-time Tracking**
  - Live map view with Google Maps
  - Shipment status timeline
- **Dashboard**
  - View shipment history
  - Check current deliveries

---

## **🛠 Tech Stack**
| Category       | Technologies                          |
|----------------|---------------------------------------|
| Frontend       | React 18, Context API, SCSS           |
| Backend        | Firebase (Auth, Firestore)            |
| Maps           | Google Maps JavaScript API            |
| Testing        | Jest, React Testing Library           |
| DevOps         | GitHub Actions (CI/CD)                |

---

## **🚀 Installation**
```bash
# Clone the repository
git clone  https://github.com/kalidM/CMH-machinery-shipping-app.git

# Navigate to project directory
cd machinery-shipping-app

# Install dependencies
npm install

# Start development server
npm start
```

---

## **⚙ Configuration**
Create a `.env` file in the root directory:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_GOOGLE_MAPS_KEY=your_maps_api_key
```

---

## **⚠ Known Issues**
1. **Location Accuracy**  
   - Map tracking sometimes shows approximate locations due to GPS limitations in rural areas.

2. **Offline Support**  
   - App requires persistent internet connection (Firestore offline persistence not yet implemented).

3. **Payment Integration**  
   - Demo mode only. Real payment gateway coming in v2.

---

## **🗺 Roadmap**
- [ ] Add Amharic language support
- [ ] Implement SMS notifications
- [ ] Admin dashboard for shipment management
- [ ] Integration with Ethiopian payment gateways

---

# **Code Commenting Examples**

### **1. Context Provider (AuthContext.jsx)**
```jsx
/**
 * Provides authentication context to entire app
 * @param {Object} children - Child components
 * @returns {React.Context} - Auth context with current user
 */
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  
  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### **2. Firestore Service (shipmentService.js)**
```javascript
/**
 * Creates a new shipment document in Firestore
 * @param {Object} shipmentData - Contains pickup, delivery, dimensions, etc.
 * @returns {Promise<string>} - Document ID of created shipment
 * @throws {Error} - If Firestore operation fails
 */
export const createShipment = async (shipmentData) => {
  try {
    const docRef = await addDoc(collection(db, "shipments"), {
      ...shipmentData,
      status: "pending",
      createdAt: serverTimestamp() // Firebase server timestamp
    });
    return docRef.id;
  } catch (e) {
    throw new Error(`Shipment creation failed: ${e.message}`);
  }
};
```

### **3. Google Maps Component (LiveMap.jsx)**
```jsx
// Threshold for updating map position (in degrees)
const POSITION_THRESHOLD = 0.01; 

/**
 * Displays real-time shipment location on Google Maps
 * @param {string} shipmentId - ID to track specific shipment
 * @param {boolean} liveMode - Whether to enable live updates
 */
function LiveMap({ shipmentId, liveMode = true }) {
  const [position, setPosition] = useState(null);
  
  // Simulate live tracking (replace with actual API in production)
  useEffect(() => {
    if (!liveMode) return;
    
    const interval = setInterval(() => {
      getNewPosition(shipmentId).then(newPos => {
        if (shouldUpdate(position, newPos)) {
          setPosition(newPos);
        }
      });
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, [shipmentId, liveMode]);

  /* ... */
}
```

---

## **Best Practices Followed**
1. **Component Documentation**  
   - JSDoc comments for all major components/services
   - Clear parameter/return value documentation

2. **Environment Variables**  
   - Sensitive keys stored in `.env` (gitignored)
   - Type hints in `.env.example` file

3. **Error Handling**  
   - Try/catch blocks with descriptive errors
   - Error boundaries for React components

4. **Type Safety**  
   - PropTypes for component props
   - Consistent data structures

