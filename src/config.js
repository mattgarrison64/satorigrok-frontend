const config = {
    api: {
      baseUrl: "https://api.satorisoftai.com/api", // Testing with this API
      endpoints: {
        listings: {
          basic: "/listings/basic",
          map: "/listings/map",
          advanced: "/listings/advanced",
          rent: "/listings/rent",
          sale: "/listings/sale",
        },
        property: "/property/{id}", // For dynamic ID routes if needed later
      },
    },
  };
  
  export default config;