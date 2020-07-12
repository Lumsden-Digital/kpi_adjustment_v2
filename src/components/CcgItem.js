import React from 'react'

class CcgItem extends React.Component {
    render() {

        const cardStyle = {
            marginLeft:".5rem",
            marginTop:".5rem",
            paddingBottom:".5rem"
        }

        const inputStyle= {
            width:"90%"
        }

        return(
            <div className="card col-3" style={cardStyle}>
                <p><strong>{this.props.odsCode}</strong></p>
                <div>
                    <label for="numerator">N</label>{' '}
                    <input style={inputStyle} type="text" id="numerator"></input>
                </div>
                <div>
                    <label for="denominator">D</label>{' '}
                    <input style={inputStyle} type="text" id="denominator"></input>
                </div>
            </div>
        )
    }
}

export default CcgItem