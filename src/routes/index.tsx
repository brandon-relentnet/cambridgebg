import { CombinedExperience } from '@/components/sections/CombinedExperience'
import { CommunityOutreach } from '@/components/sections/CommunityOutreach'
import { CompetitiveAdvantage } from '@/components/sections/CompetitiveAdvantage'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { CoreValues } from '@/components/sections/CoreValues'
import { HomeHero } from '@/components/sections/HomeHero'
import { IndustryAwards } from '@/components/sections/IndustryAwards'
import { LeadershipBios } from '@/components/sections/LeadershipBios'
import { MarketsWeServe } from '@/components/sections/MarketsWeServe'
import { Milestones } from '@/components/sections/Milestones'
import { PastClients } from '@/components/sections/PastClients'
import { SafetyOnTheJob } from '@/components/sections/SafetyOnTheJob'
import { ServicesProvided } from '@/components/sections/ServicesProvided'
import { TradePartners } from '@/components/sections/TradePartners'
import { WhoIsCC } from '@/components/sections/WhoIsCC'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage(): React.ReactElement {
  return (
    <div>
      {/* Hero Section */}
      <HomeHero />

      {/* First section: flat top, slanted bottom */}
      <div className="slant-bottom">
        <WhoIsCC showButton />
      </div>

      {/* Middle sections: full parallelogram (slanted top + bottom) */}
      <div className="slant-both">
        <CoreValues showButton />
      </div>

      <div className="slant-both">
        <Milestones showButton />
      </div>

      <div className="slant-both">
        <CombinedExperience showButton />
      </div>

      <div className="slant-both">
        <ServicesProvided showButton />
      </div>

      <div className="slant-both">
        <MarketsWeServe showButton />
      </div>

      <div className="slant-both">
        <CompetitiveAdvantage showButton />
      </div>

      <div className="slant-both">
        <SafetyOnTheJob showButton />
      </div>

      <div className="slant-both">
        <IndustryAwards showButton />
      </div>

      <div className="slant-both">
        <TradePartners showButton />
      </div>

      <div className="slant-both">
        <LeadershipBios showButton />
      </div>

      <div className="slant-both">
        <PastClients showButton />
      </div>

      <div className="slant-both">
        <CommunityOutreach />
      </div>

      {/* Last section: slanted top, flat bottom */}
      <div className="slant-top">
        <ContactCTA />
      </div>
    </div>
  )
}
