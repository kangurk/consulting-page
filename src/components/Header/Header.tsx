import "./Header.scss"

export const Header = () => {
    return (
        <div className="header">
            <h1>
                RISK SYSTEMS OÜ
            </h1>
            <div className="languageContainer">
                <button>
                    ET
                </button>
                <button>
                    EN
                </button>
            </div>
        </div>
    )
}

export default Header;