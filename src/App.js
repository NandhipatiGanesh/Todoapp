import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
function App() {
  return (
    <><div>
     <nav class="navbar background">
  <div class="header-wrapper">
    <div class="logo">
      <h3>Fallen Code</h3>
    </div>

    <div class="rightNav">
      <ul class="menu">
        <li><a href="https://nandhipatiganesh-ytdownloader-py-videodownloader-zrmbox.streamlit.app/">YT VA Downloader</a></li>
        <li><a href="https://freshersway.in/">Jobs</a></li>
        <li><a href="https://www.instagram.com/freshersway.in/">Follow me</a></li>
        <li><a href="https://github.com/NandhipatiGanesh">My Git</a></li>
      </ul>
    </div>
  </div>
</nav>

      {/* navbar header code */}
  
            
            
            
      
    </div><div className="App">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
        </div>
        <footer>
        <div class="text">
        <p>Developed with ❤ by <a href="https://github.com/NandhipatiGanesh" target="_blank">Ganesh Kumar</a></p>
                </div>
             
        { /*code*/ }
      </footer>
      </>

        
        
  );
  }

  
export default App;