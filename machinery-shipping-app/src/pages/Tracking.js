import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import TrackingMap from '../components/Map/TrackingMap';

export default function Tracking() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShipment = async () => {
      const docRef = doc(db, "shipments", id);
      const docSnap = await getDoc(docRef);
      setShipment(docSnap.data());
      setLoading(false);
    };
    fetchShipment();
  }, [id]);

  if (loading) return <Loader />;
  
  return (
    <div className="tracking-page">
      <TrackingMap 
        pickup={shipment.pickupLocation} 
        delivery={shipment.deliveryLocation} 
      />
    </div>
  );
}