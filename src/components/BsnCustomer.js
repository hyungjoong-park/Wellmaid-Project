import React from 'react'

class BsnCustomer extends React.Component {
    render() {
        return (
            <div>
                <h2>seq={this.props.seq}</h2>
                <img src={this.props.image} alt="profile" /> 
                <p>bsnno={this.props.bsnno}</p>
                <p>bsnname={this.props.bsnname}</p>
                <p>bsnperson={this.props.bsnperson}</p>
                <p>telno={this.props.telno}</p>
                <p>bsnstatecd={this.props.bsnstatecd}</p>
                <p>tradesalecnt={this.props.tradesalecnt}</p>
                <p>tradebuycnt={this.props.tradebuycnt}</p>
                <p>outsourcingsalecnt={this.props.outsourcingsalecnt}</p>
                <p>outsourcingbuycnt={this.props.outsourcingbuycnt}</p>
                <p>bsnpost={this.props.bsnpost}</p>
                <p>bsnbasicaddr={this.props.bsnbasicaddr}</p>
                <p>bsndetailaddr={this.props.bsndetailaddr}</p>
                <p>delyn={this.props.delyn}</p>
                <p>regdate={this.props.regdate}</p>
                <p>uptdate={this.props.uptdate}</p>
            </div>
        )
    }
}

export default BsnCustomer;