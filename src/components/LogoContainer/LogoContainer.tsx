import { Logo } from "./Logo.tsx"
import "./LogoContainer.scss"
import logo365 from "../../assets/365.png"
import ax2009 from "../../assets/AX2009.png"
import ax2012 from "../../assets/AX2012.png"

export const LogoContainer = () => {
return (
    <div className="logos">
        <Logo source={ax2009} alt="AX2009" width={300}/> 
        <Logo source={ax2012} alt="AX2012" width={300}/> 
        <Logo source={logo365} alt="365" width={300}/> 
    </div>
)
}
