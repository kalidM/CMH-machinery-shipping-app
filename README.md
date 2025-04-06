<<<<<<< HEAD

# **Machinery Shipping App** 🚛

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
git clone https://github.com/yourusername/machinery-shipping-app.git

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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> d137148 (Initialize Firebase configuration AND Adding  Firebase authentication with email/password)
