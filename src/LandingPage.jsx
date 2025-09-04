import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/services';
import Header from './components/header';
import Hero from './components/hero';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer';
import Slider from './components/sliders';

const LandingPage = () => { 
    return (
        <div className="min-vh-100 bg-light text-dark">
            <Header />
            <Slider />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default LandingPage;
