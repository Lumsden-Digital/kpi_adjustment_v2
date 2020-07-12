import React from 'react'

class Header extends React.Component {

    render() {

        const headerStyle = {
            backgroundColor:"red"
        }

        return(
            <div>
                <nav className="navbar bg-light" style={headerStyle}>
                <span class="navbar-brand mb-0 h1">KPI Adjustment</span>
                </nav>
            </div>
        )
    }
}

export default Header