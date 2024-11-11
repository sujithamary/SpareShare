import React from 'react'
import VolunteerHomePage from '../VolunteerHome/VolunteerHomePage'
import VolunteerImpact from '../VolunteerImpact/VolunteerImpact'
import VolunteerBenefits from '../VolunteerBenefits/VolunteerBenefits'
import VolunteerSteps from '../VolunteerSteps/VolunteerSteps'

function VolunteerLandingPage() {
    return (
        <div>
            <VolunteerHomePage/>
            <VolunteerBenefits/>
            <VolunteerSteps/>
            <VolunteerImpact/>
        </div>
    )
}

export default VolunteerLandingPage
