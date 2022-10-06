import { db } from "./index";
import { collection, doc, addDoc, getDocs } from "firebase/firestore";

const dbInstance = collection(db, "portfolio");

export const getPortfolio = async () => {
  const data = await getDocs(dbInstance);
  const arr = data.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });

  return arr;
};
