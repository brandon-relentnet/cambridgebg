<script setup>
import { companyInfo, socialLinks } from "~/data/siteData";

// Global SEO Configuration
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Cambridge Building Group`
      : "Cambridge Building Group";
  },
});

// Organization Schema (Global)
useSchemaOrg([
  defineOrganization({
    name: companyInfo.name,
    logo: "/cbg-logo.png",
    sameAs: socialLinks.map((link) => link.url),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "customer service",
    },
  }),
  defineWebSite({
    name: companyInfo.name,
  }),
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
