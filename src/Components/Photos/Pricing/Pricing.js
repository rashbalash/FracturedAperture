import React from 'react';

import './Pricing.css';

function Pricing() {

    return (
        <div className="PricingContainer">
            <div id="Group">
                <h4>Group Photos (Tier 1 | $200)</h4>
                <p>1 Hour Photo Session | 2 Locations</p>
                <p>All Edited Photos within the next 36 Hours</p>
            </div>

            <div id="Group">
                <h4>Group Photos (Tier 2 | $400)</h4>
                <p>2 Hour Photo Session | 4 Locations</p>
                <p>All Edited Photos within the next 24 Hours</p>
                <p>Mini Polaroid Photo</p>
            </div>

            <div id="Individual">
                <h4>Individual Photos (Tier 1 | $200)</h4>
                <p>1 Hour Photo Session | 2 Locations</p>
                <p>All Edited Photos within the next 36 Hours</p>
            </div>

            <div id="Individual">
                <h4>Individual Photos (Tier 2 | $300)</h4>
                <p>2 Hour Photo Session | 4 Locations</p>
                <p>All Edited Photos within the next 24 Hours</p>
                <p>Mini Polaroid Photo</p>
            </div>
        </div>
    )
}

export default Pricing;