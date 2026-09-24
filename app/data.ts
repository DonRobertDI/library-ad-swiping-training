export type Figure = { number: number; caption: string };
export type Step = { number: number; title: string; instructions: string[]; figures: Figure[]; note?: string };

export const steps: Step[] = [
  {
    number: 1,
    title: "Find product names and market",
    instructions: [
      "Open Winning Products, choose the product, and review the Overview tab.",
      "Use Google Lens on the product image and note the exact name plus useful alternative names.",
      "Record the likely market. In this example, the Amazon UK result means the work continues in EU Discovery.",
      "Use the names later in Product Names and in Facebook Ads Library searches.",
    ],
    figures: [{ number: 1, caption: "Use Google Lens to identify the product name and likely market" }],
  },
  {
    number: 2,
    title: "Add the winning product to Discovery",
    instructions: [
      "Open the correct Discovery market and click Sources.",
      "Search for the winning product. If it already exists, continue to its source tabs.",
      "If it is missing, click Seed Discovery, select the winning product, and click Generate preview.",
      "Keep the generated preview settings unchanged and click Commit to Discovery.",
      "Reopen Sources and confirm that the product appears in the list.",
    ],
    figures: [
      { number: 2, caption: "Open Sources in the correct Discovery market" },
      { number: 3, caption: "Search the existing Discovery products" },
      { number: 4, caption: "Open Seed Discovery when the product is missing" },
      { number: 5, caption: "Select the winning product and generate the preview" },
      { number: 6, caption: "Commit the generated preview without changing its details" },
      { number: 7, caption: "Confirm that the product now exists in Sources" },
    ],
  },
  {
    number: 3,
    title: "Understand the four source types",
    instructions: [
      "Keywords are created by Generate preview and should always be scraped to surface new and similar products.",
      "Product names are the exact or alternative names found with Google Lens.",
      "Swipes are landing page domains found in Facebook Ads Library, such as zenithcareco.com.",
      "Pages are numeric Facebook Page IDs found in Facebook Ads Library.",
    ],
    figures: [{ number: 8, caption: "The product source tabs in Discovery" }],
  },
  {
    number: 4,
    title: "Add and scrape product names",
    instructions: [
      "Click Add in the upper right and choose Product names.",
      "Enter the product name recorded from Google Lens, select the required markets, and add it.",
      "Open the Product names tab and confirm that one row was created for each selected market.",
      "Select the rows and click Scrape, or use the scrape icon on an individual row.",
    ],
    figures: [
      { number: 9, caption: "Click Add from the product source panel" },
      { number: 10, caption: "Enter the product name and select markets" },
      { number: 11, caption: "Confirm the new product name rows" },
      { number: 12, caption: "Select rows and scrape them together" },
    ],
  },
  {
    number: 5,
    title: "Search Facebook Ads Library",
    instructions: [
      "Set location to All and ad category to All ads.",
      "Search an exact or alternative product name and press Enter.",
      "Try different names until relevant product ads appear.",
      "Ask Google Lens for the general product name, likely EU or US market, and search phrases that may work in Facebook Ads Library.",
      "Use your judgment and try different search terms or approaches until you find relevant ads.",
    ],
    figures: [{ number: 13, caption: "Set All and All ads before searching a product name" }],
  },
  {
    number: 6,
    title: "Collect swipe domains and Facebook Page IDs",
    instructions: [
      "Open Filters, set Media type to Images and memes, keep Active status set to Active ads, and apply the filters.",
      "Verify that the results show the product, then open See summary details for a relevant advertiser.",
      "Copy the numeric Page ID from About the advertiser.",
      "Copy the root domain shown below the ad thumbnail, or open the landing page and copy its domain.",
      "If only a Page name or username is shown, paste the Page name into the search bar without pressing Enter. Choose the matching advertiser, then copy the number after view_all_page_id in the URL.",
      "Do not confuse a Library ID for an individual ad with a Facebook Page ID.",
    ],
    figures: [
      { number: 14, caption: "Open Filters from the search results" },
      { number: 15, caption: "Set Images and memes and keep Active ads" },
      { number: 16, caption: "Review the filtered product ads" },
      { number: 17, caption: "Open See summary details for a relevant advertiser" },
      { number: 18, caption: "Copy the root landing page domain" },
      { number: 19, caption: "Find the numeric Page ID in About the advertiser" },
      { number: 20, caption: "Search the Page name and choose the matching advertiser" },
      { number: 21, caption: "Copy the number after view_all_page_id in the URL" },
    ],
  },
  {
    number: 7,
    title: "Add swipe domains and Pages to Discovery",
    instructions: [
      "Choose Add, then Swipe domain. Enter only the root domain and add it.",
      "Choose Add, then Page. Enter the numeric Facebook Page ID.",
      "Set Media to Images and memes.",
      "If the Page is a brand, check This page is a brand and enter the brand name. Otherwise leave it unchecked.",
      "Click Track page.",
    ],
    figures: [
      { number: 22, caption: "Add a root domain as a swipe source" },
      { number: 23, caption: "Track a Facebook Page using its numeric ID" },
    ],
  },
  {
    number: 8,
    title: "Scrape swipe domains and Pages",
    instructions: [
      "In Swipes, select one or more domains and click Scrape, or use the scrape icon on a row.",
      "In Pages, click the scrape icon at the right of the Page row.",
      "A newly tracked Page may show as unnamed until its first scrape fills in the Page information.",
    ],
    figures: [
      { number: 24, caption: "Select and scrape a swipe domain" },
      { number: 25, caption: "Scrape a tracked Facebook Page" },
    ],
  },
  {
    number: 9,
    title: "Scrape every source type",
    instructions: [
      "Scrape Product names, Swipe domains, Facebook Pages, and Keywords. You can scrape these source types in any order.",
      "Always scrape Keywords to find new and similar products that may not appear through the other sources.",
      "Review keyword results one by one because they can include the winning product, similar products, and broader niche ads.",
      "For a similar-product ad found through Keywords, choose Approve only. Do not use Approve to Product unless the ad belongs to the exact winning product.",
    ],
    figures: [
      { number: 26, caption: "Product name sources ready to scrape" },
      { number: 27, caption: "Swipe domain sources ready to scrape" },
      { number: 28, caption: "Facebook Page sources ready to scrape" },
      { number: 29, caption: "Always scrape Keywords to find new and similar products" },
    ],
  },
  {
    number: 10,
    title: "Review scraped ads",
    instructions: [
      "Open Discovery and remain in Pending review.",
      "Use the All Products filter to search for and select the winning product.",
      "Use Approve to keep a useful on-niche or similar-product ad in the Library without attaching it to the winning product.",
      "Use Approve to Product when the ad belongs to the winning product. This attaches it to the product and seeds the Swipe Machine.",
      "Use Reject for an irrelevant or unsuitable individual ad.",
      "Check the product, message, audience, and landing page before deciding.",
    ],
    figures: [
      { number: 30, caption: "Filter Pending review by the winning product" },
      { number: 31, caption: "Use Approve, Approve to Product, or Reject" },
      { number: 32, caption: "Decision guide for Discovery review actions" },
    ],
  },
  {
    number: 11,
    title: "Select and localize approved ads",
    instructions: [
      "Open the winning product and go to Competitor Ads.",
      "Approved ads appear in Winner Ads and Swipe Sources.",
      "Select ads in Winner Ads and review each saved configuration before localization.",
      "Turn on Product Swap when the competitor product image must be replaced.",
      "Turn on Text on Image when embedded image text must be localized.",
      "Turn on Brand Swap when the competitor brand must be replaced with the winning product brand.",
    ],
    figures: [{ number: 33, caption: "Select approved Winner Ads for localization" }],
  },
  {
    number: 12,
    title: "Review fix and approve localized ads",
    instructions: [
      "Choose the target language and market, then run localization.",
      "In Localized Ads, compare the original and localized versions.",
      "Check the image, embedded text, caption, headline, product, brand, language, market, price, currency, and discount.",
      "If an offer is wrong, use a fix prompt such as Change the price to £24.95 and change the discount to 50% off. Keep everything else the same.",
      "For a repeatable discount setting, open Config, set On-image price handling to % off badge, enter 50% off, and save the configuration.",
      "When everything is correct, choose Approve, Add to Tracker, and Add to Ad Batch.",
    ],
    figures: [
      { number: 34, caption: "Mark competitor branding before localization when needed" },
      { number: 35, caption: "Choose the target language and market" },
      { number: 36, caption: "Compare the original and localized ad and apply fixes" },
      { number: 37, caption: "Use the percent-off badge setting for a consistent discount" },
    ],
    note: "IF THE THUMBAIL NEEDS CORRECTION ON PRICE, DO THIS",
  },
  {
    number: 13,
    title: "Retag and group new funnels",
    instructions: [
      "After approving ads in Discovery, open Competitor Ads and then Swipe Sources.",
      "Find the newly added funnel and apply the correct retag.",
      "Open Funnel Library, go to Funnels, and search for the newly added product or advertiser.",
      "Group only funnels that sell the same actual product. Different labels are acceptable when the packaging form and product are clearly the same.",
      "Do not group funnels merely because they target the same problem or niche.",
      "If the funnel image does not show the product, open the funnel and inspect the advertorial link to identify what is being sold.",
    ],
    figures: [
      { number: 38, caption: "Retag the newly added funnel in Swipe Sources" },
      { number: 39, caption: "Search and group only visually matching products in Funnels" },
    ],
  },
];

export const checklist = [
  "The winning product exists in the correct Discovery market.",
  "Product names were added and scraped for the required markets.",
  "Relevant swipe domains and Facebook Page IDs were collected and scraped.",
  "Keywords were always scraped to find new and similar products.",
  "Similar-product keyword ads were kept with Approve, not Approve to Product.",
  "Pending ads were reviewed with Approve, Approve to Product, or Reject.",
  "Selected Winner Ads were configured and localized to the target language and market.",
  "Prices, currencies, discounts, product imagery, brand names, and image text were verified.",
  "Approved localized ads were added to the tracker and an ad batch.",
  "New swipe sources were retagged.",
  "New funnels were grouped only with the same actual product.",
];
