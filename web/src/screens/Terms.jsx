import React from "react";
import {Link} from "react-router-dom";
import Box from '../components/Box'

export default () => {
    return (
        <div>
            <Box sideMargin row center>
                <h2>TERMS</h2>
            </Box>

            <Box sideMargin row center>
                <Link to="/">
                    <img src={require("../images/houndoggSymbol.png")}
                         style={{
                             zIndex: 1000,
                             padding: '8px',
                             height: '78.59px',
                             width: '92px',
                             resizeMode: 'contain'
                         }}
                         alt="logo"/>
                </Link>
            </Box>

            <Box sideMargin row center>
                <p>houndogg, its logotype and its symbol are the property of a trademark registered under French
                    intellectual property laws.<br/>
                    Every images and photographs found on this website and its webstore are the property of houndogg and
                    must not be used without the permission of its owner.<br/><br/>

                    The following terms are concluded between houndogg (the seller) and you (the customer). Your use of
                    houndogg.net (the website and its webstore)
                    indicates your acceptance of these terms.<br/>
                    All terms are subject to changes without prior notice to the customer.<br/>
                    Any changes made to the terms will be updated on this page.
                </p>
            </Box>

            <Box sideMargin row center>
                <h4>PAYMENTS</h4>
            </Box>

            <Box sideMargin shrink row center>
                <p>houndogg accepts most major credit cards. <br/>
                    All payments are regulated via Stripe to ensure strictly secured transactions. <br/>
                    Paypal payments are also accepted
                </p>

            </Box>

            <Box sideMargin row center>
                <h4>SHIPPING</h4>
            </Box>

            <Box sideMargin row center>
                <p>Orders are shipped as soon as possible, usually during the two next business days depending on
                    traffic on the webstore. All orders are shipped through French postal services and tracking numbers
                    will be provided by email. <br/>
                    Shipping times depend on your location and are not the responsibility of houndogg as soon as the
                    shipments are in the hands of the postal services. <br/>
                    Applicable costs: <br/>
                    France: 5€ <br/>
                    Europe: 7€ <br/>
                    Rest of the World: 10€ <br/>
                    (may change with the number of items in the order)
                </p>
            </Box>

            <Box sideMargin row center>
                <h4>RETURNS</h4>
            </Box>

            <Box sideMargin row center>
                <p>Following French consumer code we allow a seven business day period for returns,<br/>
                    starting the day the order’s shipment is received by the customer.<br/>
                    All returned items must come in the same condition they were sold in.<br/>
                    All shipping expenses for returns will be at the customer’s charge.<br/>
                    <br/>
                    Two options are presented to the customer returning an item:<br/>
                    the replacement of the returned item by the same item in an other size or an other color<br/>
                    the amount of the order issued to the customer as a webstore credit<br/>
                    If the three conditions therefore mentioned are not respected by the customer we will not be able to
                    process any replacement or any credit.
                </p>
            </Box>

            <Box sideMargin row center>
                <h4>INFORMATION</h4>
            </Box>

            <Box sideMargin row center>
                <p>houndogg’s website and its webstore are subject to collect information regarding its visitors and the
                    customers placing orders such as their localisation and their personal information.<br/>
                    houndogg will not sell nor share any of these informations.
                </p>
            </Box>
            <Box sideMargin row center>
                <img src={require("../images/trademarked_houndogg.png")}
                     style={{
                         zIndex: 1000,
                         padding: '8px',
                         height: '18px',
                         width: '128px',
                         resizeMode: 'contain'
                     }}
                     alt="logo"/>
            </Box>
            <Box sideMargin row center>
                <p>
                    21 rue Verdière<br/>
                    17000 La Rochelle<br/>
                    France<br/>
                    mail: contact@houndogg.net
                </p>
            </Box>
        </div>
    )
}

