import "./LogoContainer.scss"
import logo365 from "../../assets/365.png"
import ax2009 from "../../assets/AX2009.png"
import ax2012 from "../../assets/AX2012.png"

export const LogoContainer = () => {
return (
    <div className="logos">
        <div> <img src={ax2009} alt="AX2009"/></div>
        <div> <img src={ax2012} alt="AX2012"/></div>
        <div> <img src={logo365} alt="365"/></div>
    </div>
)
}
