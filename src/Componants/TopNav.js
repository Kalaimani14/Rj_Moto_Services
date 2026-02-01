import "../Style/TopNav.css"

export default function TopNav() {

    return (
        <>
            <div className="container top-nav">
                <div className="max-w">
                    <div className="grid grid-2">
                        <div className="grid-sec grid">
                            <div className="group grid">
                                <svg >PH-logo</svg>
                                <a>+9132142585</a>
                            </div>
                        </div>
                        <div className="grid-sec grid">
                            <div className="group grid">
                                <svg>Whatsapplogo</svg>
                                <a>Whatsapp_Support</a>
                            </div>
                            <div className="group grid">
                                <svg>email_logo</svg>
                                <a>abc12@gmail.com</a>
                            </div>
                            <div className="group grid">
                                <svg>Instagram</svg>
                                <a>Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}