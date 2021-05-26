import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "projects" },
        { name: "contact" },
        { name: "resume" }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header>
                <Nav
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </Header>
            <main>
                <Main currentPage={currentPage}></Main>
            </main>
            <Footer />
        </div>
    );
}

export default App;