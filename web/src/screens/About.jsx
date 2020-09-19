import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '../components/Box'

var MailchimpSubscribe = function () {

  return (
    <div style={{
      flex: 1,
    }}>
      <div className="ml-form-embed"
        data-account="2041590:u5i7x5e7q5"
        data-form="2049574:d2d9k0">
      </div>
    </div>
  );
};


export default () => {
  useEffect(() => {
    (function (m, a, i, l, e, r) {
      m['MailerLiteObject'] = e;

      function f() {
        var c = { a: arguments, q: [] };
        var r = this.push(c);
        return "number" != typeof r ? r : f.bind(c.q);
      }

      f.q = f.q || [];
      m[e] = m[e] || f.bind(f.q);
      m[e].q = m[e].q || f.q;
      r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0];
      r.async = 1;
      r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
      _.parentNode.insertBefore(r, _);
    })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

    window.ml('accounts', '2041590', 'u5i7x5e7q5', 'load')
  }, [])
  return (
    <div className={"about"}>
      <Box column spaceBetween>
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
          <p style={{
            zIndex: 1000,
            left: '13px',
            position: 'absolute',
            padding: '8px',
            color: 'black',
            top: '60px',
            fontWeight: 'bold'
          }}>BACK</p>
        </Link>

        <Box sideMargin row center>
          <h2>ABOUT</h2>
        </Box>

        <Box sideMargin row center>
          <p>houndogg is a creative studio focused<br/>
            on ready-to-wear garments<br/>
            inspired by the game hunting heritage<br/>
            and what is commonly called<br/>
            street culture.</p>
        </Box>

        <Box sideMargin row center>
          <h4>NEWS</h4>
        </Box>

        <Box sideMargin row center>
          <p>We're only on <a style={{ color: '#0000ff', textDecoration: 'none' }}
            href={"https://instagram.com/houndogghoundogg"}>Instagram</a> and <a
            href={"https://www.youtube.com/channel/UCKwYL4PowB-Gox0e4pjDbiA"}
            style={{ color: '#ff0000', textDecoration: 'none' }}>Youtube</a> and
            will keep it
            this way.<br/>
            If you want early infos, discounts or a little more content, let us suggest this newsletter.<br/>
            We don't believe in information overload so we won't bother you if there's nothing new.</p>


        </Box>

        <Box style={{ marginTop: 18 }} row center>
          <MailchimpSubscribe/>
        </Box>

        <Box sideMargin row center>
          <h4>CONTACT</h4>
        </Box>

        <Box sideMargin row center>
          <p>If you have any questions or just want to chat with us, email us at<br/>
            <a style={{ color: '#000000' }} href={"mailto:contact@houndogg.net"}>contact@houndogg.net</a><br/>
            or just reach <a style={{ color: '#000000' }}
              href="https://instagram.com/houndogghoundogg">@houndogghoundogg</a> on Instagram.
          </p>
        </Box>

        <Box sideMargin row center>
          <Link style={{ color: '#000000', textDecoration: 'none' }} to="/terms"><h6>TERMS</h6></Link>
        </Box>
      </Box>
    </div>
  )
}

