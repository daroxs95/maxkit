import { useState } from "react";
import { Login } from "./Login";
import { Jobs } from "./JobsList.tsx";
import { JobPost } from "./JobPost.tsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPost, setSelectedPost] = useState(false);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;
  if (!selectedPost) return <Jobs onClick={() => setSelectedPost(true)} />;

  return <JobPost onBack={() => setSelectedPost(false)} />;
}

export default App;
