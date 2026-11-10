export const stages = [
  {
    slug: "build",
    name: "Build",
    weeks: "Weeks 1–5",
    summary: "Turn your idea into a compliant product, made by a manufacturer we have checked.",
    items: [
      "Matching with verified manufacturers (GMP, FSSAI, AYUSH or cosmetic licence checked)",
      "Product and formulation selection, sampling and MOQ negotiation",
      "Help with your FSSAI licence and label compliance, with our regulatory partner",
      "Packaging and label design",
    ],
  },
  {
    slug: "launch",
    name: "Launch",
    weeks: "Weeks 4–9",
    summary: "Give the product a name, a story and a place to sell, online and on marketplaces.",
    items: [
      "Brand name, brand story and positioning",
      "Logo and visual identity",
      "Shopify website, ready to take orders",
      "Amazon, Flipkart and Nykaa listings",
      "Instagram and Facebook setup with launch content",
    ],
  },
  {
    slug: "grow",
    name: "Grow",
    weeks: "Monthly",
    summary: "Keep sales coming with content, ads and creators who fit your brand.",
    items: [
      "Social media content calendar and posting",
      "Performance marketing on Meta and Google",
      "Influencer and creator campaigns",
      "Monthly report on sales, spend and what to change",
    ],
  },
] as const;

export const categories = [
  {
    name: "Nutraceuticals",
    examples: "Whey and plant protein, multivitamins, gummies, pre-workouts, omega-3",
  },
  {
    name: "Skincare and haircare",
    examples: "Face washes, serums, sunscreens, soaps, shampoos, hair oils",
  },
  {
    name: "Ayurvedic and wellness",
    examples: "Herbal capsules, churnas, wellness teas, OTC Ayurvedic products",
  },
] as const;

export const stuckPoints = [
  {
    title: "Finding a manufacturer you can trust",
    body: "Online listings don't tell you which factories hold valid licences, keep to their MOQs or deliver on time.",
  },
  {
    title: "Getting the label right",
    body: "One wrong health claim or missing declaration can delay a launch or force a full reprint.",
  },
  {
    title: "Looking different from everyone else",
    body: "A factory's in-house label design makes your product look like every generic product on the shelf.",
  },
  {
    title: "Making the first sales",
    body: "Ads run without a plan spend the budget fast. A launch needs content, listings and ads working together.",
  },
] as const;
