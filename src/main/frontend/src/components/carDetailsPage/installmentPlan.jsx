import React,{useState} from 'react';

const InstallmentPlan = ({price, initialFee}) => {

    const plans = [
        {monthAmount: 12},
        {monthAmount: 24},
        {monthAmount: 36},
        {monthAmount: 48}
    ]
    return (
        <div className="card">
            <div className="card-body">
                <h4>Installment</h4>
                <div className="d-flex">
                    <p>Payment per month</p>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" value={price} readOnly />
                </div>
                <div className="form-group">
                    <label>Intial fee</label>
                    <input className="form-control" value={initialFee} />
                </div>
                <div className="form-group">
                    <label>Installment term</label>
                    <div className="d-flex">
                        {plans.map((item) => {
                            return <button className="btn btn-outline-primary">{item.monthAmount}</button> 
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstallmentPlan;