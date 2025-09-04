const Footer = () => {
    return (
        <footer className="text-center py-4 text-white mt-4" style={{ background: "linear-gradient(45deg, #198754, #28a745, #ffffff)" }}>
            © {new Date().getFullYear()} FarmLink. All rights reserved.  
            <br />
            <small className="text-light">Sustainable Agriculture • Global Trade • Farmer Empowerment</small>
        </footer>
    );
}

export default Footer;
