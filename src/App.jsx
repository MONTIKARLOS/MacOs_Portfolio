import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


import { Dock, Navbar, Welcome } from "./components";
import { Safari, Terminal, Resume, Finder, TxtFile, ImageFile, Contact } from "#windows";


gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <TxtFile />
            <ImageFile />
            <Contact />
        </main>
    )
};

export default App;