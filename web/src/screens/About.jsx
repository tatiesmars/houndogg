import React from "react";
import {Link} from "react-router-dom";
import Box from '../components/Box'

var MailchimpSubscribe = function () {
    return (
        <div>
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet"
                  type="text/css"/>
            <style type="text/css"
                   dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"}}/>
            <div id="mc_embed_signup">
                <form
                    action="https://houn-dogg.us19.list-manage.com/subscribe/post?u=0c3c42197d113bfe417cc05dd&id=289790a27f"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                    target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <input type="email" defaultValue={""} name="EMAIL" className="email" id="mce-EMAIL"
                               placeholder="email address" required/>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text"
                                                                                                       name="b_0c3c42197d113bfe417cc05dd_289790a27f"
                                                                                                       tabIndex={-1}
                                                                                                       defaultValue={""}/>
                        </div>
                        <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe"
                                                      id="mc-embedded-subscribe" className="button"/></div>
                    </div>
                </form>
            </div>
            {/*End mc_embed_signup*/}
        </div>
    );
};


export default () => {
    return (
        <>
            <Link to="/">
                <img src={require("../images/logoBlack.png")}
                     style={{
                         zIndex: 1000,
                         padding: '8px',
                         position: 'absolute',
                         height: '48.64px',
                         width: '73.72px',
                         resizeMode: 'contain'
                     }}
                     alt="logo"/>
            </Link>

            <Box row center>
                <h2>ABOUT</h2>
            </Box>

            <Box shrink row center>
                <p>houndogg is a creative studio focused<br/>
                    on ready-to-wear garments inspired <br/>
                    by the heritage of hunt and what is <br/>
                    commonly called street culture. <br/><br/>
                    Born in the woods, raised in the streets.</p>
            </Box>

            <Box row center>
                <h4>NEWS</h4>
            </Box>

            <Box shrink row center>
                <p>We're only on Instagram and Youtube and will keep it this way.<br/>
                    Let us suggest this newsletter if you want early infos, discounts or a little more content.<br/>
                    We don't believe in information overload so we won't bother you if there's nothing new.</p>


            </Box>

            <MailchimpSubscribe/>


            <Box row center>
                <h4>CONTACT</h4>
            </Box>

            <Box row center>
                <p>If you have any questions or just want to chat with us, email us at<br/>
                    <a href={"mailto:houndogghoundogg@gmail.com"}>houndogghoundogg[@]gmail.com</a><br/>
                    or just reach <a href="https://instagram.com/houndogghoundogg">@houndogghoundogg</a> on Instagram.
                </p>
            </Box>

            <Box row center>
                <a><h6>TERMS</h6></a>
            </Box>
        </>
    )
}

