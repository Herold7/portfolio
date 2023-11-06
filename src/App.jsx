// import { useState, useEffect } from 'react'
import Footer from "./components/footer";
import Form from "./components/form";
import Nav from "./components/nav";
import "./style.css";

// Nos composants



function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
        <main class="flex-shrink-0">
        <Nav />
                <section className="py-5">
            <div className="container px-5">
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
        <Form />
        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
        <Footer />

        </>
  )
}

export default App
