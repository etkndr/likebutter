import "./Footer.css"

export default function Footer() {
    const getYear = () => {
        const date = new Date()
        const year = date.getFullYear()
        return year
    }
    
    const year = getYear()

    return (
            <footer>
        <div className="footer">
            <div className="copyright">© Like Butter {year}</div>
        </div>
        </footer>
    )
}