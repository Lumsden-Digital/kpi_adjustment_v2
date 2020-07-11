import React from 'react'
import CcgItem from './CcgItem'

class Kpis extends React.Component {

    render() {

        return this.props.kpiData.map(kpiItem =>
            <div>
                <h3>{kpiItem.measure}</h3>

                {kpiItem.ccgs.map(c =>                     
                    <CcgItem odsCode={c}/>)}

                <hr></hr>
            </div>

            )
    }
}

export default Kpis