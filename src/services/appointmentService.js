import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveAppointment = async (email, date) => {
  try {
    await addDoc(collection(db, "appointments"), {
      email: email,
      date: date,
      createdAt: Timestamp.now(),
    });
    console.log("✅ Appointment saved to Firestore");
  } catch (error) {
    console.error("❌ Error saving appointment:", error);
    throw error;
  }
};