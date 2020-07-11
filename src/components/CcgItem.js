import React from 'react'

class CcgItem extends React.Component {
    render() {
        return(
            <div>
                <p><strong>{this.props.odsCode}</strong></p>
                <div>
                    <label for="numerator">N</label>{' '}
                    <input type="text" id="numerator"></input>
                </div>
                <div>
                    <label for="denominator">D</label>{' '}
                    <input type="text" id="denominator"></input>
                </div>
            </div>
        )
    }
}

export default CcgItem