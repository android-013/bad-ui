// List of random country codes
const countryCodes = [
        "+30",  // Greece
        "+31",  // Netherlands
        "+32",  // Belgium
        "+33",  // France
        "+34",  // Spain
        "+36",  // Hungary
        "+39",  // Italy (including Vatican City)
        "+40",  // Romania
        "+41",  // Switzerland
        "+43",  // Austria
        "+44",  // United Kingdom
        "+45",  // Denmark
        "+46",  // Sweden
        "+47",  // Norway
        "+48",  // Poland
        "+49",  // Germany
        "+350", // Gibraltar
        "+351", // Portugal
        "+352", // Luxembourg
        "+353", // Ireland
        "+354", // Iceland
        "+355", // Albania
        "+356", // Malta
        "+357", // Cyprus
        "+358", // Finland
        "+359", // Bulgaria
        "+370", // Lithuania
        "+371", // Latvia
        "+372", // Estonia
        "+373", // Moldova
        "+374", // Armenia
        "+375", // Belarus
        "+376", // Andorra
        "+377", // Monaco
        "+378", // San Marino
        "+379", // Vatican City (alternative)
        "+380", // Ukraine
        "+381", // Serbia
        "+382", // Montenegro
        "+383", // Kosovo
        "+385", // Croatia
        "+386", // Slovenia
        "+387", // Bosnia and Herzegovina
        "+389", // North Macedonia
        "+420", // Czech Republic
        "+421", // Slovakia
        "+423", // Liechtenstein
    
            "+1",    // USA, Canada, and several Caribbean nations
            "+502",  // Guatemala
            "+503",  // El Salvador
            "+504",  // Honduras
            "+505",  // Nicaragua
            "+506",  // Costa Rica
            "+507",  // Panama
            "+508",  // Saint Pierre and Miquelon (France)
            "+509",  // Haiti
            "+51",   // Peru
            "+52",   // Mexico
            "+53",   // Cuba
            "+54",   // Argentina
            "+55",   // Brazil
            "+56",   // Chile
            "+57",   // Colombia
            "+58",   // Venezuela
            "+59",   // Unused but reserved for future South American countries
            "+590",  // Guadeloupe, Saint Martin, Saint Barthelemy (France)
            "+591",  // Bolivia
            "+592",  // Guyana
            "+593",  // Ecuador
            "+594",  // French Guiana (France)
            "+595",  // Paraguay
            "+596",  // Martinique (France)
            "+597",  // Suriname
            "+598",  // Uruguay
            "+599",  // Caribbean Netherlands (Bonaire, Sint Eustatius, Saba)

                "+60",   // Malaysia
                "+61",   // Australia (part of Oceania, but sometimes included in Asia)
                "+62",   // Indonesia
                "+63",   // Philippines
                "+64",   // New Zealand (Oceania)
                "+65",   // Singapore
                "+66",   // Thailand
                "+81",   // Japan
                "+82",   // South Korea
                "+84",   // Vietnam
                "+86",   // China
                "+90",   // Turkey (partly in Europe)
                "+91",   // India
                "+92",   // Pakistan
                "+93",   // Afghanistan
                "+94",   // Sri Lanka
                "+95",   // Myanmar (Burma)
                "+96",   // Unused
                "+960",  // Maldives
                "+961",  // Lebanon
                "+962",  // Jordan
                "+963",  // Syria
                "+964",  // Iraq
                "+965",  // Kuwait
                "+966",  // Saudi Arabia
                "+967",  // Yemen
                "+968",  // Oman
                "+970",  // Palestine
                "+971",  // United Arab Emirates
                "+972",  // Israel
                "+973",  // Bahrain
                "+974",  // Qatar
                "+975",  // Bhutan
                "+976",  // Mongolia
                "+977",  // Nepal
                "+98",   // Iran
                "+992",  // Tajikistan
                "+993",  // Turkmenistan
                "+994",  // Azerbaijan
                "+995",  // Georgia
                "+996",  // Kyrgyzstan
                "+997",  // Unassigned
                "+998",  // Uzbekistan
                "+999",  // Reserved for future use

                    "+20",   // Egypt
                    "+211",  // South Sudan
                    "+212",  // Morocco (also Western Sahara)
                    "+213",  // Algeria
                    "+216",  // Tunisia
                    "+218",  // Libya
                    "+220",  // Gambia
                    "+221",  // Senegal
                    "+222",  // Mauritania
                    "+223",  // Mali
                    "+224",  // Guinea
                    "+225",  // Côte d'Ivoire (Ivory Coast)
                    "+226",  // Burkina Faso
                    "+227",  // Niger
                    "+228",  // Togo
                    "+229",  // Benin
                    "+230",  // Mauritius
                    "+231",  // Liberia
                    "+232",  // Sierra Leone
                    "+233",  // Ghana
                    "+234",  // Nigeria
                    "+235",  // Chad
                    "+236",  // Central African Republic
                    "+237",  // Cameroon
                    "+238",  // Cape Verde
                    "+239",  // São Tomé and Príncipe
                    "+240",  // Equatorial Guinea
                    "+241",  // Gabon
                    "+242",  // Republic of the Congo
                    "+243",  // Democratic Republic of the Congo
                    "+244",  // Angola
                    "+245",  // Guinea-Bissau
                    "+246",  // British Indian Ocean Territory (not in Africa but often associated)
                    "+247",  // Ascension Island (UK territory)
                    "+248",  // Seychelles
                    "+249",  // Sudan
                    "+250",  // Rwanda
                    "+251",  // Ethiopia
                    "+252",  // Somalia
                    "+253",  // Djibouti
                    "+254",  // Kenya
                    "+255",  // Tanzania
                    "+256",  // Uganda
                    "+257",  // Burundi
                    "+258",  // Mozambique
                    "+260",  // Zambia
                    "+261",  // Madagascar
                    "+262",  // Réunion (France), Mayotte (France)
                    "+263",  // Zimbabwe
                    "+264",  // Namibia
                    "+265",  // Malawi
                    "+266",  // Lesotho
                    "+267",  // Botswana
                    "+268",  // Eswatini (Swaziland)
                    "+269",  // Comoros
                    "+27",   // South Africa
                    "+290",  // Saint Helena, Tristan da Cunha (UK territories)
                    "+291",  // Eritrea
                    "+297",  // Aruba (Caribbean, but under Dutch rule)
                    "+298",  // Faroe Islands (Europe, but has historical African connections)
                    "+299",  // Greenland (part of Denmark, not in Africa)
                        
      ];

// Elements
const countryCodeBtn = document.getElementById("country-code-btn");
const countryCodeOutput = document.getElementById("country-code-output");
const phoneSlider = document.getElementById("phone-slider");
const phoneOutput = document.getElementById("phone-output");

// Generate random country code
countryCodeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * countryCodes.length);
    countryCodeOutput.textContent = `Country Code: ${countryCodes[randomIndex]}`;
});

phoneSlider.addEventListener("input", () => {
    const phoneNumber = phoneSlider.value.padStart(10, "0");
    phoneOutput.textContent = phoneNumber;
});

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
    // Generate random position off the screen
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

    // Move the button to the random position
    copyBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
