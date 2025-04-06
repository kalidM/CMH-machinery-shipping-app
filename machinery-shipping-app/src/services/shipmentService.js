import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc 
} from 'firebase/firestore';

export const createShipment = async (shipmentData) => {
  const docRef = await addDoc(collection(db, "shipments"), {
    ...shipmentData,
    createdAt: new Date(),
    status: 'pending'
  });
  return docRef.id;
};

export const getShipments = async () => {
  const snapshot = await getDocs(collection(db, "shipments"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateShipmentStatus = async (shipmentId, newStatus) => {
  await updateDoc(doc(db, "shipments", shipmentId), {
    status: newStatus
  });
};