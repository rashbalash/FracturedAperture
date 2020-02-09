import React from 'react';

import './Pricing.css';

function Pricing() {

    return (
        <div className="PricingContainer">
            <div id="Group">
                <h3>Group Photos ($200)</h3>
                <p>1 Hour Photo Session | 3 Locations</p>
                <p>All Original and Edited Photos</p>
                <p>Edited Photos within the next 24 Hours</p>
            </div>

            <div id="Individual">
                <h3>Individual Photos (Tier 1 | $200)</h3>
                <p>1 Hour Photo Session | 2 Locations</p>
                <p>All Original and Edited Photos</p>
                <p>Edited Photos within the next 24 Hours</p>
                <p>Mini Polaroid Photo</p>
            </div>

            <div id="Individual">
                <h3>Individual Photos (Tier 2 | $300)</h3>
                <p>2 Hour Photo Session | 4 Locations</p>
                <p>All Original and Edited Photos</p>
                <p>Edited Photos within the next 12 Hours</p>
                <p>Mini Polaroid Photo</p>
            </div>
        </div>
    )
}

export default Pricing;