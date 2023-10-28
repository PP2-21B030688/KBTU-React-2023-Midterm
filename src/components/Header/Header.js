function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Twitter na minimalkah</h1>

            <div className="header-nav">
                <a href="/" className="header-link">Home</a>
                <a href="/create" className="header-link">Create post</a>
                <a href="/update" className="header-link">Update post</a>
            </div>

            <a href="/profile" className="header-profile" />
        </header>
    )
}

export default Header;