<script setup>
useSeoMeta({
  title: "General Contractor & Construction Management",
  description:
    "Cambridge Building Group is a premier general contractor in Nashville, TN, offering commercial, industrial, hospitality, and luxury residential construction services since 2015.",
  ogTitle: "Cambridge Building Group | General Contractor in Nashville",
  ogDescription:
    "Building excellence through communication, integrity, and dedicated craftsmanship. Specializing in commercial, industrial, and luxury residential projects.",
  ogImage: "/home-hero.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <!-- 0. Hero Section -->
    <SectionsHomeHero />

    <!-- 1. Who is Cambridge Building Group? -->
    <SectionsWhoIsCC :showButton="true" />

    <!-- 2. Core Values -->
    <SectionsCoreValues :showButton="true" />

    <!-- 3. Milestones -->
    <SectionsMilestones :showButton="true" />

    <!-- 4. Combined Experience Section -->
    <SectionsCombinedExperience :showButton="true" />

    <!-- 5. Services Provided -->
    <SectionsServicesProvided :showButton="true" />

    <!-- 6. Markets We Serve -->
    <SectionsMarketsWeServe :showButton="true" />

    <!-- 7. Competitive Advantage -->
    <SectionsCompetitiveAdvantage :showButton="true" />

    <!-- 8. Safety on the Job Site -->
    <SectionsSafetyOnTheJob :showButton="true" />

    <!-- 9. Industry Awards -->
    <SectionsIndustryAwards :showButton="true" />

    <!-- 10. Case Studies -->
    <!-- <SectionsCaseStudies :showButton="true" /> -->

    <!-- 12. Trade Partners -->
    <SectionsTradePartners :showButton="true" />

    <!-- 13. Leadership Bios -->
    <SectionsLeadershipBios :showButton="true" />

    <!-- 11. Past Clients -->
    <SectionsPastClients :showButton="true" />

    <!-- 15. Community Outreach -->
    <SectionsCommunityOutreach />

    <!-- 16. Contact Us -->
    <SectionsContactCTA />
  </div>
</template>
