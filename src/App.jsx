import { useState, useEffect } from 'react'
import "./style.css";

// Import du logo pour interpolation dans JSX


// Nos composants
import nav from "./components/nav";
import form from "./components/form";
import footer from "./components/footer";


function App() {
  const [count, setCount] = useState(0)

  
  return (
   
      <body class="d-flex flex-column">
        <main class="flex-shrink-0">
        <nav nav={nav} />
        <section className="py-5">
                <div className="container px-5">
        <form form={form} />
        </div>
            </section>

        </main>
        <footer footer={footer} />

        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

    </body>
   
  )
}

export default App
