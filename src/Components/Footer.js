import React from 'react';

function Footer() {
    var getYear = () => {
        var date = new Date().getFullYear(); 
        return <p id="copyright">Rashad Balashov &copy; { date }</p>
    }


    return (
        <div id="footer">
          <footer>{ getYear() }</footer>
        </div>
    );

}

export default Footer;