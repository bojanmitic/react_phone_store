import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from '../context'
import Page from './page';

export default class ProductList extends Component {
    render() {
        return (
           <Page>
                <div className="py-5">
                    <div className="container padding--l">
                            <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                    return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
           </Page>
        )
    }
}
