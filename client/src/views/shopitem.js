import React, { Fragment, useState, useEffect, useContext } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ShopItem1 from '../components/shop-item1'
import Footer41 from '../components/footer41'
import './blog.css'
import { CurrentUserContext } from '..'

const ShopItem = (props) => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    console.log(currentUser)

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(("http://localhost:3000/gear/gear/" + props.match.params.id), {
            method: "GET",

        })
            .then((response) => response.json())
            .then((data) => {
                setContent(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const getCart = async () => {
        const response = await fetch(("http://localhost:3000/cart/cart/member/" + currentUser.currentUser), {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            return null
        }
    }



    const purchase = async () => {
        let cartID = (await getCart())?.CartID
        if ( cartID == null){
            console.log("make a new cart")
            cartID = (await makeCart()).cartId
            console.log(cartID)

        }
        console.log(cartID)
        await addToCart(cartID)
    }

    const makeCart = async () => {
        const response = await fetch(("http://localhost:3000/cart/cart"), {
            method: "POST",
            body: JSON.stringify({
              memUsername: currentUser.currentUser,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    }

    const addToCart = async (cartID) => {
        const response = await fetch(("http://localhost:3000/cart/cart/item"), {
            method: "POST",
            body: JSON.stringify({
                cartId: cartID,
                itemId: props.match.params.id,
                quantity: 1
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <div className="blog-container">
            <Helmet>
                <title>Shop - Transparent Waters</title>
                <meta property="og:title" content="Shop - Transparent Waters" />
            </Helmet>

            <Navbar8
                link1={
                    <Fragment>
                        <span className="blog-text10">/home</span>
                    </Fragment>
                }
                link2={
                    <Fragment>
                        <span className="blog-text11">/blog</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="blog-text12">/shop</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="blog-text13">/General Info</span>
                    </Fragment>
                }
                page1={
                    <Fragment>
                        <span className="blog-text14">Fish</span>
                    </Fragment>
                }
                page2={
                    <Fragment>
                        <span className="blog-text15">Fishing Locations</span>
                    </Fragment>
                }
                page3={
                    <Fragment>
                        <span className="blog-text16">Water Safety</span>
                    </Fragment>
                }
                action1={
                    <Fragment>
                        <span className="blog-text18">Login</span>
                    </Fragment>
                }
                action2={
                    <Fragment>
                        <span className="blog-text19">Secondary Action</span>
                    </Fragment>
                }
            ></Navbar8>

            {content?.map((content) => (
                <ShopItem1
                    heading1={
                        <Fragment>
                            <span className="banner11-text3">{content?.Description}</span>
                        </Fragment>
                    }
                    content1={
                        <Fragment>
                            <span className="banner11-text5">{content?.Price}</span>
                        </Fragment>
                    }
                    action1={
                        <Fragment>
                            <span className="banner11-text4">Purchase</span>
                        </Fragment>
                    }
                    content3={
                        <Fragment>
                            <span className="banner11-text5">{content?.StockStatus}</span>
                        </Fragment>
                    }
                    onPurchase={async () => {
                        if (!currentUser){
                            alert("Must login")

                        }else{
                           await purchase()
                        }
                      }
                    }
                ></ShopItem1>
            ))}


            <Footer41
                link5={
                    <Fragment>
                        <span className="blog-text57">FAQ</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="blog-text58">About Us</span>
                    </Fragment>
                }
                link1={
                    <Fragment>
                        <span className="blog-text59">Blog</span>
                    </Fragment>
                }
                termsLink={
                    <Fragment>
                        <span className="blog-text60">Terms and Conditions</span>
                    </Fragment>
                }
                link2={
                    <Fragment>
                        <span className="blog-text61">Shop</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="blog-text62">Contact Us</span>
                    </Fragment>
                }
                cookiesLink={
                    <Fragment>
                        <span className="blog-text63">Cookies Policy</span>
                    </Fragment>
                }
                privacyLink={
                    <Fragment>
                        <span className="blog-text64">Privacy Policy</span>
                    </Fragment>
                }
            ></Footer41>
        </div>
    )
}


export default ShopItem
