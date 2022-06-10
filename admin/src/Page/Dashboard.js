import React from 'react'
import {Link} from 'react-router-dom';
export default function Dashboard() {
  return (
    <>
        <div className="mt-3 mb-3">
            <div className="container-fluid">
                <h3>Dashboard</h3>
            </div>
            <div className='container-fluid p-4'>
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                        <div className="card-body text-center">
                            <h1 className="card-title text-primary">35</h1>  <h5 className="card-title " >Total Product</h5>  
                        </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                        <div className="card-body text-center">
                            <h1 className="card-title text-primary">60</h1>  <h5 className="card-title " >Total User</h5>  
                        </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                        <div className="card-body text-center">
                            <h1 className="card-title text-primary">2</h1>  <h5 className="card-title "> Today Order</h5>  
                        </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                        <div className="card-body text-center">
                            <h1 className="card-title text-primary">Rs. 46846</h1>  <h5 className="card-title ">Total Revenue</h5>  
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
