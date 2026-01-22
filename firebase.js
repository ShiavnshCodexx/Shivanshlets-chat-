<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwqv5thtLTbc2MBxd0QHXKQMNATubJNqw",
  authDomain: "shivansh-codex-chat.firebaseapp.com",
  projectId: "shivansh-codex-chat",
  storageBucket: "shivansh-codex-chat.firebasestorage.app",
  messagingSenderId: "503775406827",
  appId: "1:503775406827:web:b60495fe496a3d4226acae",

  // 🔥 YE LINE ZAROORI HAI (Realtime DB ke liye)
  databaseURL: "https://shivansh-codex-chat-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
</script>
