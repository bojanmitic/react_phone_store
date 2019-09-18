import React from 'react'
import Page from '../page';

export default function EmptyCart() {
    return (
        <Page>
            <div className="container mt-5 padding--l">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title p">
                        <h1>Your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        </Page>
    )
}
