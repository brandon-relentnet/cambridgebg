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

      {/* Who is Cambridge Building Group? */}
      <WhoIsCC showButton />

      {/* Core Values */}
      <CoreValues showButton />

      {/* Milestones */}
      <Milestones showButton />

      {/* Combined Experience */}
      <CombinedExperience showButton />

      {/* Services Provided */}
      <ServicesProvided showButton />

      {/* Markets We Serve */}
      <MarketsWeServe showButton />

      {/* Competitive Advantage */}
      <CompetitiveAdvantage showButton />

      {/* Safety on the Job Site */}
      <SafetyOnTheJob showButton />

      {/* Industry Awards */}
      <IndustryAwards showButton />

      {/* Trade Partners */}
      <TradePartners showButton />

      {/* Leadership Bios */}
      <LeadershipBios showButton />

      {/* Past Clients */}
      <PastClients showButton />

      {/* Community Outreach */}
      <CommunityOutreach />

      {/* Contact Us */}
      <ContactCTA />
    </div>
  )
}
