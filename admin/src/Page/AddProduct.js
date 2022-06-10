import React from 'react'
import Menu from './Menu';
export default function AddProduct() {
  return (
    <> 
        <div classname="mt-3 mb-3" style={{backgroundColor: 'white', padding: '2%'}}>
        <div className="container-fluid">
            <h3>Add Product</h3>
        </div>
            <div className='row mt-5'>
                <div className='col-4'>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Product Name</label>
                        <input type="text" class="form-control mt-2"/>
                    </div>
                </div>
                <div className='col-4'>
                      <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">Price</label>
                            <input type="number" class="form-control mt-2"/>
                        </div>
                </div>
                <div className='col-4'>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Category</label>
                        <input type="text" class="form-control mt-2"/>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-8'>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Description</label>
                        <input type="text" class="form-control mt-2"/>
                    </div>
                </div>
                <div className='col-4'>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">Image</label>
                        <input type="file" class="form-control mt-2"/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end  mt-5'>
            <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add product</a>
            </div>


        </div>
    </>
  )
}
