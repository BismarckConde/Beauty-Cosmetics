import "./Footer.css"

const Footer = () => {
    return (
        <footer id="contact" className="footer-section">
            <div className="footer-content">
                <h2><span className="logo-gold">S&F</span> Beauty & Cosmetics</h2>
                <p>Productos de belleza y skincare para resaltar tu estilo.</p>

                <div className="social">
                    <a href="https://wa.me/50586746974" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/syf_beauty_cosmeticos?igsh=MTQ4bGFmb2RiaXc0cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@lfar_050622?_r=1&_t=ZS-94VZWwRww48" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p className="copy">© {new Date().getFullYear()} S&F Beauty & Cosmetics. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer