import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js ";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBYd6vdeRvwnywCPqeWh5PcdcNJj1kLfoo",
    authDomain: "insancemerlang-2953a.firebaseapp.com",
    projectId: "insancemerlang-2953a",
    storageBucket: "insancemerlang-2953a.appspot.com",
    messagingSenderId: "134418826980",
    appId: "1:134418826980:web:ce438f43a3da1456b44ef1",
    measurementId: "G-K6CVYVCMZP"
}
// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function ambildaftarJadwal() {
  const refDokumen = collection(db, "Jadwal");
  const kueri = query(refDokumen, orderBy("hari"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      guru: dok.data().guru,
      hari: dok.data().hari,
      jamke: dok.data().jamke,
      kelas: dok.data().kelas,
      mapel: dok.data().mapel,
     waktu: dok.data().waktu
    });
  });

  return hasil;
}

export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahJadwal ( guru, hari, jamke, jelas, waktu, ) {
  try {
    const dokRef = await addDoc(collection(db, 'Jadwal'), {
      
 
      guru: guru,
      hari: hari,
      jamke: jamke,
      kelas: kelas,
      mapel: mapel,
      waktu: waktu,
    });
    console.log('berhasil menembah ' + dokRef.id);
  } catch (e) {
    console.log('gagal menambah ' + e);
  }
}

export async function ubahJadwal(docId) {
  
  await deleteDoc(doc(db, "Jadwal", 
  docId));
}


export async function hapusdaftarJadwal( guru, hari, jamke, keals, waktu,) {
    await updateDoc(doc(db, 'Jadwal',
    docld), {
    
      guru: guru,
      haru: hari,
      jamke: jamke,
      kelas: kelas,
      mapel: mapel,
      waktu: waktu
    })
}

export async function ambilJadwal(doc) {
  const docRef = await doc(db, "Jadwal", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}