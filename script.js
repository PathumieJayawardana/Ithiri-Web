    /* ============================================================
       BILINGUAL DICTIONARY (EN & SINHALA)
    ============================================================ */
    const I18N = {
      en: {
        brandName: `Ithiri`,
        brandTagline: `Sri Lankan Smart Kitchen & Expiry Tracker`,
        btnVoiceUpdate: `Voice Update`,
        btnQuickAdd: `Quick Add`,
        navDashboard: `Dashboard`,
        navMyFood: `My Food`,
        navUseFirst: `Use First`,
        navRecipes: `Recipes`,
        navShopping: `Shopping List`,
        navTips: `Storage Tips`,
        navInsights: `Monthly Insights`,
        navSettings: `Settings`,
        heroHeadline: `Make the Most of Every Grocery.`,
        heroSubtitle: `Track pantry, fridge, and freezer freshness in Sri Lanka's tropical climate, decode real food date labels, and cook authentic dishes before ingredients go to waste.`,
        btnQuickAddFood: `Quick Add Food`,
        btnLoadSample: `Load Sample Sri Lankan Kitchen`,
        fifoStripLabel: `7-DAY FIFO FRESHNESS WINDOW`,
        fifoStripHint: `Place soonest dates at the front of each shelf (First In, First Out).`,
        dashAlertKicker: `Priority FIFO Queue`,
        dashExpiringTitle: `Expiring Soon & Safety Alerts`,
        btnViewAll: `View All`,
        dashRecipeKicker: `Cook Before It Spoils`,
        dashRecipeTitle: `Recommended Today`,
        btnAllRecipes: `All Recipes`,
        invKicker: `Kitchen Stock`,
        invTitle: `My Food Inventory`,
        btnUndo: `Undo`,
        btnAddItem: `Add Food Item`,
        lblSearchFood: `Search food items`,
        lblFilterCategory: `Category`,
        lblFilterLocation: `Storage Location`,
        lblFilterStatus: `Freshness Status`,
        ufKicker: `First In, First Out (FIFO)`,
        ufTitle: `Use First Priority Queue`,
        ufSubtitle: `Items nearing freshness or expiry deadlines. Items past strict Use-By dates are excluded from recipe suggestions for food safety.`,
        recKicker: `Pantry-Matched Meals`,
        recTitle: `Smart Sri Lankan Recipes`,
        recFilterAll: `All Dishes`,
        recFilterPriority: `Uses Expiring Items`,
        shopKicker: `Smart Replenishment`,
        shopTitle: `Smart Shopping List`,
        shopAddTitle: `Add Grocery to Shopping List`,
        lblItemName: `Item Name`,
        lblQuantity: `Quantity`,
        lblUnit: `Unit`,
        lblEstPrice: `Estimated Price (LKR)`,
        lblStorageLoc: `Storage Location`,
        btnAddToList: `Add to List`,
        btnTransferPurchased: `Transfer Checked Items to My Food`,
        tipsKicker: `Tropical Food Science`,
        tipsTitle: `Sri Lankan Climate Storage & Date Label Guide`,
        tipsSubtitle: `Evidence-based guidance adapted for 28–33°C heat and 75–85% humidity, combining FDA/USDA storage charts and consumer date-label research.`,
        labelDecoderTitle: `Date Label Confusion vs. Reality`,
        labelDecoderIntro: `Research (Kavanaugh & Quinlan, 2020) shows 81.6% of consumers check date labels, yet only 57.4% correctly understand "Best By / Use By" — causing safe food to be needlessly discarded. Know the difference:`,
        fdaTableTitle: `Quick Reference: Safe Refrigerator (≤ 4°C) & Freezer (-18°C) Windows`,
        fdaTableNote: `Freezing at 0°F (-18°C) keeps food safe indefinitely; freezer timelines reflect optimal flavor and texture. Chill hot cooked curries and rice within 90 minutes (danger zone: 8°C–63°C).`,
        thFoodItem: `Food Item`,
        thFridgeWindow: `Fridge (≤ 4°C)`,
        thFreezerWindow: `Freezer (-18°C)`,
        insKicker: `Household Analytics`,
        insTitle: `Monthly Insights & Waste Tracker (LKR)`,
        btnExportCsv: `Export History CSV`,
        chartConsumedVsWaste: `Consumption vs. Waste Ratio (LKR)`,
        chartCategorySpend: `Spend & Waste by Category (LKR)`,
        historyTableTitle: `Purchase, Consumption & Disposal History`,
        thDate: `Date`,
        thItem: `Item`,
        thAction: `Action`,
        thQty: `Qty`,
        thValueLkr: `Value (LKR)`,
        setKicker: `Household Preferences`,
        setTitle: `Settings & Kitchen Profile`,
        setProfileTitle: `Household & Alert Settings`,
        lblHouseholdName: `Household Name`,
        lblClimateZone: `Sri Lankan Climate Zone`,
        zoneWet: `Wet Zone (Colombo / Galle — High Humidity)`,
        zoneDry: `Dry Zone (Anuradhapura / Jaffna — High Heat)`,
        zoneHill: `Hill Country (Kandy / Nuwara Eliya — Cool)`,
        lblAlertDays: `Expiry Warning Lead Time (Days)`,
        lblEnable3Day: `3-Day Smart Availability Prompt`,
        optEnabled: `Enabled`,
        optDisabled: `Disabled`,
        btnSaveSettings: `Save Preferences`,
        setDataTitle: `Kitchen Data Management`,
        setDataDesc: `Your kitchen inventory, shopping list, and purchase history persist across sessions. Load a starter Sri Lankan pantry or reset data below.`,
        btnResetData: `Reset All Kitchen Data`,
        footerTitle: `Ithiri — Smart Kitchen & Food Waste Reduction`,
        footerSources: `Guidance grounded in Kavanaugh & Quinlan (2020) Food Control consumer date-label research, FDA Refrigerator & Freezer Storage Chart, USDA Food Product Dating guidelines, High Speed Training FIFO & Spoilage Guidance, and I Value Food leftover practices.`,
        modalAddTitle: `Quick Add Food Item`,
        modalEditTitle: `Edit Food Item`,
        lblFoodNameSuggest: `Food Item Name (auto-suggests image, category & freshness)`,
        lblCategory: `Category`,
        lblPurchaseDate: `Purchase Date`,
        lblExpiryDate: `Expiry / Freshness Date`,
        lblDateType: `Label Type`,
        dtEstimated: `Estimated Freshness (Tropical)`,
        dtBestBy: `Best By / Peak Quality`,
        dtUseBy: `Use By / Strict Safety`,
        lblPriceLkr: `Price (LKR)`,
        lblNotes: `Notes (optional)`,
        lblFoodArtwork: `Food Visual (auto-matched or choose)`,
        lblUploadPhoto: `Optional Session Photo Preview`,
        btnCancel: `Cancel`,
        btnSaveFood: `Save Food Item`,
        modalVoiceTitle: `Voice Update (Speech-to-Text)`,
        voiceIntro: `Speak or tap a sample phrase, edit the recognized text if needed, and apply it directly to your kitchen inventory.`,
        btnStartListening: `Start Listening`,
        btnStopListening: `Stop Listening`,
        lblSamplePhrases: `Sample Phrases:`,
        lblVoiceTranscript: `Recognized / Editable Command`,
        lblParsedAction: `Parsed Inventory Action`,
        btnApplyVoice: `Apply Update`,
        greetMorning: `Good morning`,
        greetAfternoon: `Good afternoon`,
        greetEvening: `Good evening`,
        catAll: `All Categories`,
        catVeg: `Vegetables`,
        catFruit: `Fruits`,
        catDairy: `Dairy & Eggs`,
        catMeat: `Meat & Fish`,
        catGrains: `Grains & Pulses`,
        catBakery: `Bakery`,
        catSpices: `Spices & Coconut`,
        catLeftovers: `Leftovers`,
        locAll: `All Locations`,
        locFridge: `Fridge`,
        locPantry: `Pantry`,
        locFreezer: `Freezer`,
        statAll: `All Statuses`,
        statExpiring: `Expiring Soon`,
        statExpired: `Expired`,
        statFresh: `Fresh`,
        badgeExpiredUseBy: `Past Use-By — Do Not Eat`,
        badgeExpiredQuality: `Past Quality Date — Check Senses`,
        badgeExpiresToday: `Expires today`,
        badgeExpiresTomorrow: `Expires tomorrow`,
        badgeExpiresIn: `Expires in {n} days`,
        badgeFreshDays: `{n} days left`,
        actUsedSome: `Used Some`,
        actUsedAll: `Used All`,
        actAddMore: `Add More`,
        actEdit: `Edit`,
        actDiscard: `Discard`,
        emptyKitchenTitle: `Your kitchen inventory is empty`,
        emptyKitchenDesc: `Start by adding groceries with Quick Add, speaking a Voice Update, or loading our sample Sri Lankan kitchen.`,
        btnYesUsedThem: `Yes, used them`,
        btnStillAvailable: `Still available`,
        cookWithThis: `Cook with this`,
        addMissingToShop: `Add Missing to Shopping List`,
        cookedThis: `Cooked This (Use Stock)`,
        missingLabel: `Missing:`,
        inStockLabel: `In stock:`,
        allIngredientsReady: `All key ingredients are fresh in your kitchen!`,
        safetyExclusionTitle: `Food Safety Guardrail Active`,
        safetyExclusionBody: `{n} item(s) have passed strict Use-By dates or spoiled and are excluded from recipe suggestions. Discard if showing sour odour, slimy texture, or mould.`,
        lowStockAlert: `Low / Depleted stock suggested for restock:`
      },
      si: {
        brandName: `ඉතිරි (Ithiri)`,
        brandTagline: `ශ්‍රී ලාංකේය සුහුරු මුළුතැන්ගෙයි සහ කල් ඉකුත් වීම් කළමනාකරු`,
        btnVoiceUpdate: `හඬින් යාවත්කාලීන කරන්න`,
        btnQuickAdd: `ඉක්මනින් එක් කරන්න`,
        navDashboard: `මුල් පුවරුව`,
        navMyFood: `මගේ ආහාර`,
        navUseFirst: `පළමුව භාවිතා කරන්න`,
        navRecipes: `වට්ටෝරු`,
        navShopping: `සාප්පු ලැයිස්තුව`,
        navTips: `ගබඩා උපදෙස්`,
        navInsights: `මාසික විශ්ලේෂණ`,
        navSettings: `සැකසුම්`,
        heroHeadline: `සෑම සිල්ලර බඩුවකින්ම උපරිම ප්‍රයෝජන ගන්න.`,
        heroSubtitle: `ශ්‍රී ලංකාවේ නිවර්තන දේශගුණයට ගැලපෙන පරිදි ශීතකරණයේ හා පැන්ට්‍රියේ ආහාර නැවුම්බව නිරීක්ෂණය කර, ආහාර නාස්තිය වළක්වා දේශීය වට්ටෝරු පිසින්න.`,
        btnQuickAddFood: `ආහාර ඉක්මනින් එක් කරන්න`,
        btnLoadSample: `නියැදි ශ්‍රී ලාංකේය මුළුතැන්ගෙය පූරණය කරන්න`,
        fifoStripLabel: `දින 7 FIFO නැවුම්බව කාලසටහන`,
        fifoStripHint: `ඉක්මනින් කල් ඉකුත් වන ආහාර රාක්කයේ ඉදිරියෙන් තබා පළමුව භාවිතා කරන්න.`,
        dashAlertKicker: `ප්‍රමුඛතා පෝලිම`,
        dashExpiringTitle: `ඉක්මනින් කල් ඉකුත් වන හා ආරක්ෂිත අනතුරු ඇඟවීම්`,
        btnViewAll: `සියල්ල බලන්න`,
        dashRecipeKicker: `නරක් වීමට පෙර පිසින්න`,
        dashRecipeTitle: `අද සඳහා නිර්දේශිත වට්ටෝරු`,
        btnAllRecipes: `සියලු වට්ටෝරු`,
        invKicker: `මුළුතැන්ගෙයි තොග`,
        invTitle: `මගේ ආහාර තොගය`,
        btnUndo: `පෙර පරිදි (Undo)`,
        btnAddItem: `නව ආහාරයක් එක් කරන්න`,
        lblSearchFood: `ආහාර සොයන්න`,
        lblFilterCategory: `ප්‍රවර්ගය`,
        lblFilterLocation: `ගබඩා ස්ථානය`,
        lblFilterStatus: `නැවුම්බව`,
        ufKicker: `පළමුව ආ දේ පළමුව (FIFO)`,
        ufTitle: `පළමුව භාවිතා කළ යුතු ආහාර`,
        ufSubtitle: `නැවුම්බව අවසන් වීමට ආසන්න ආහාර. ආරක්ෂාව සඳහා කල් ඉකුත් වූ ආහාර වට්ටෝරු සඳහා නිර්දේශ නොකෙරේ.`,
        recKicker: `ඔබ සතු අමුද්‍රව්‍ය අනුව`,
        recTitle: `සුහුරු ශ්‍රී ලාංකේය වට්ටෝරු`,
        recFilterAll: `සියලු ආහාර`,
        recFilterPriority: `ඉක්මනින් අවසන් වන දේ යොදා`,
        shopKicker: `සුහුරු මිලදී ගැනීම්`,
        shopTitle: `සුහුරු සාප්පු ලැයිස්තුව`,
        shopAddTitle: `සාප්පු ලැයිස්තුවට එක් කරන්න`,
        lblItemName: `භාණ්ඩයේ නම`,
        lblQuantity: `ප්‍රමාණය`,
        lblUnit: `ඒකකය`,
        lblEstPrice: `ඇස්තමේන්තු මිල (රු.)`,
        lblStorageLoc: `ගබඩා ස්ථානය`,
        btnAddToList: `ලැයිස්තුවට එක් කරන්න`,
        btnTransferPurchased: `මිලදී ගත් දෑ ආහාර තොගයට එක් කරන්න`,
        tipsKicker: `නිවර්තන ආහාර විද්‍යාව`,
        tipsTitle: `ශ්‍රී ලාංකේය දේශගුණයට ගබඩා උපදෙස් සහ දින ලේබල්`,
        tipsSubtitle: `28–33°C උෂ්ණත්වය හා ඉහළ ආර්ද්‍රතාවය සඳහා FDA/USDA ප්‍රමිතීන්ට අනුකූල උපදෙස්.`,
        labelDecoderTitle: `දින ලේබල් පිළිබඳ සැබෑ තත්ත්වය`,
        labelDecoderIntro: `පර්යේෂණ (Kavanaugh & Quinlan, 2020) අනුව පාරිභෝගිකයන්ගෙන් 81.6% ක් දින ලේබල් බැලුවද, "Best By / Use By" නිවැරදිව තේරුම් ගන්නේ 57.4% ක් පමණි:`,
        fdaTableTitle: `ශීතකරණ (≤ 4°C) සහ අධිශීතකරණ (-18°C) ආරක්ෂිත කාලසීමා`,
        fdaTableNote: `අධිශීතකරණය ආහාර ආරක්ෂිතව තබයි. පිසූ ව්‍යංජන සහ බත් මිනිත්තු 90ක් ඇතුළත සිසිල් කර ශීතකරණයට දමන්න.`,
        thFoodItem: `ආහාරය`,
        thFridgeWindow: `ශීතකරණය (≤ 4°C)`,
        thFreezerWindow: `අධිශීතකරණය (-18°C)`,
        insKicker: `ගෘහස්ථ විශ්ලේෂණ`,
        insTitle: `මාසික වියදම් හා ආහාර නාස්ති විශ්ලේෂණය (රු.)`,
        btnExportCsv: `CSV වාර්තාව බාගන්න`,
        chartConsumedVsWaste: `භාවිතය සහ නාස්තිය අනුපාතය (රු.)`,
        chartCategorySpend: `ප්‍රවර්ග අනුව වියදම හා නාස්තිය (රු.)`,
        historyTableTitle: `මිලදී ගැනීම්, භාවිතය සහ ඉවත් කිරීම් ඉතිහාසය`,
        thDate: `දිනය`,
        thItem: `ආහාරය`,
        thAction: `ක්‍රියාව`,
        thQty: `ප්‍රමාණය`,
        thValueLkr: `වටිනාකම (රු.)`,
        setKicker: `පවුලේ සැකසුම්`,
        setTitle: `සැකසුම් සහ මුළුතැන්ගෙයි පැතිකඩ`,
        setProfileTitle: `ගෘහස්ථ සහ අනතුරු ඇඟවීම් සැකසුම්`,
        lblHouseholdName: `නිවසේ නම`,
        lblClimateZone: `ශ්‍රී ලංකාවේ දේශගුණ කලාපය`,
        zoneWet: `තෙත් කලාපය (කොළඹ / ගාල්ල — ඉහළ ආර්ද්‍රතාවය)`,
        zoneDry: `වියළි කලාපය (අනුරාධපුර / යාපනය — ඉහළ උෂ්ණත්වය)`,
        zoneHill: `කඳුකරය (මහනුවර / නුවරඑළිය — සිසිල්)`,
        lblAlertDays: `කල් ඉකුත් වීමට පෙර දැනුම් දීම (දින)`,
        lblEnable3Day: `දින 3 සුහුරු පරීක්ෂාව`,
        optEnabled: `සක්‍රීයයි`,
        optDisabled: `අක්‍රීයයි`,
        btnSaveSettings: `සැකසුම් සුරකින්න`,
        setDataTitle: `දත්ත කළමනාකරණය`,
        setDataDesc: `ඔබගේ ආහාර තොගය සහ වාර්තා ස්වයංක්‍රීයව සුරැකේ.`,
        btnResetData: `සියලු දත්ත මකන්න`,
        footerTitle: `ඉතිරි — සුහුරු මුළුතැන්ගෙයි සහ ආහාර නාස්ති අවම කිරීමේ යෙදුම`,
        footerSources: `Kavanaugh & Quinlan (2020) පර්යේෂණය, FDA/USDA ගබඩා මාර්ගෝපදේශ සහ High Speed Training FIFO ක්‍රමවේද මත පදනම් වේ.`,
        modalAddTitle: `නව ආහාරයක් එක් කරන්න`,
        modalEditTitle: `ආහාර විස්තර සංස්කරණය`,
        lblFoodNameSuggest: `ආහාරයේ නම (ප්‍රවර්ගය හා නැවුම්බව ස්වයංක්‍රීයව යෝජනා වේ)`,
        lblCategory: `ප්‍රවර්ගය`,
        lblPurchaseDate: `මිලදී ගත් දිනය`,
        lblExpiryDate: `කල් ඉකුත් වන / නැවුම්බව දිනය`,
        lblDateType: `දින ලේබල් වර්ගය`,
        dtEstimated: `ඇස්තමේන්තු නැවුම්බව`,
        dtBestBy: `Best By (හොඳම ගුණාත්මකභාවය)`,
        dtUseBy: `Use By (ආරක්ෂිත අවසන් දිනය)`,
        lblPriceLkr: `මිල (රු. LKR)`,
        lblNotes: `සටහන් (අත්‍යවශ්‍ය නොවේ)`,
        lblFoodArtwork: `ආහාර රූපය`,
        lblUploadPhoto: `ඡායාරූප පෙරදසුන (අත්‍යවශ්‍ය නොවේ)`,
        btnCancel: `අවලංගු කරන්න`,
        btnSaveFood: `සුරකින්න`,
        modalVoiceTitle: `හඬින් යාවත්කාලීන කරන්න`,
        voiceIntro: `ඔබට අවශ්‍ය දේ පවසන්න හෝ පහත නියැදි වාක්‍යයක් තෝරා සංස්කරණය කර යොදන්න.`,
        btnStartListening: `සවන්දීම අරඹන්න`,
        btnStopListening: `නවත්වන්න`,
        lblSamplePhrases: `නියැදි වාක්‍ය:`,
        lblVoiceTranscript: `හඳුනාගත් වාක්‍යය`,
        lblParsedAction: `ක්‍රියාත්මක වන වෙනස`,
        btnApplyVoice: `තොගයට යොදන්න`,
        greetMorning: `සුභ උදෑසනක්`,
        greetAfternoon: `සුභ දහවලක්`,
        greetEvening: `සුභ සන්ධ්‍යාවක්`,
        catAll: `සියලු ප්‍රවර්ග`,
        catVeg: `එළවළු`,
        catFruit: `පලතුරු`,
        catDairy: `කිරි සහ බිත්තර`,
        catMeat: `මස් සහ මාළු`,
        catGrains: `ධාන්‍ය හා පරිප්පු`,
        catBakery: `බේකරි ආහාර`,
        catSpices: `කුළුබඩු සහ පොල්`,
        catLeftovers: `ඉතිරි ආහාර`,
        locAll: `සියලු ස්ථාන`,
        locFridge: `ශීතකරණය`,
        locPantry: `පැන්ට්‍රිය`,
        locFreezer: `අධිශීතකරණය`,
        statAll: `සියලු තත්ත්ව`,
        statExpiring: `ඉක්මනින් අවසන් වන`,
        statExpired: `කල් ඉකුත් වූ`,
        statFresh: `නැවුම්`,
        badgeExpiredUseBy: `Use-By පසුවී ඇත — ආහාරයට නොගන්න`,
        badgeExpiredQuality: `ගුණාත්මක දිනය පසුවී ඇත — පරීක්ෂා කරන්න`,
        badgeExpiresToday: `අද කල් ඉකුත් වේ`,
        badgeExpiresTomorrow: `හෙට කල් ඉකුත් වේ`,
        badgeExpiresIn: `දින {n} කින් කල් ඉකුත් වේ`,
        badgeFreshDays: `දින {n} ක් ඉතිරියි`,
        actUsedSome: `ටිකක් ගත්තා`,
        actUsedAll: `සම්පූර්ණයෙන් ගත්තා`,
        actAddMore: `තව එක් කරන්න`,
        actEdit: `සංස්කරණය`,
        actDiscard: `ඉවතලන්න`,
        emptyKitchenTitle: `ඔබගේ මුළුතැන්ගෙයි තොගය හිස්ය`,
        emptyKitchenDesc: `නව ආහාර එක් කිරීමෙන්, හඬ විධානයකින් හෝ නියැදි ශ්‍රී ලාංකේය මුළුතැන්ගෙය පූරණය කිරීමෙන් අරඹන්න.`,
        btnYesUsedThem: `ඔව්, භාවිතා කළා`,
        btnStillAvailable: `තවමත් තිබේ`,
        cookWithThis: `මෙයින් උයන්න`,
        addMissingToShop: `අඩු දෑ සාප්පු ලැයිස්තුවට`,
        cookedThis: `මෙය පිසුවා (තොග අඩු කරන්න)`,
        missingLabel: `අඩු ද්‍රව්‍ය:`,
        inStockLabel: `තොගයේ ඇත:`,
        allIngredientsReady: `සියලු ප්‍රධාන අමුද්‍රව්‍ය ඔබ සතුව ඇත!`,
        safetyExclusionTitle: `ආහාර ආරක්ෂණ පෙරහන සක්‍රීයයි`,
        safetyExclusionBody: `ආරක්ෂිත Use-By දිනය පසුවූ හෝ නරක් වූ අයිතම {n} ක් වට්ටෝරු යෝජනා වලින් ඉවත් කර ඇත.`,
        lowStockAlert: `අඩු වූ හෝ අවසන් වූ ආහාර නැවත මිලදී ගැනීමට:`
      }
    };

    /* ============================================================
       SRI LANKAN FOOD CATALOG & AUTO-SUGGEST DATA
    ============================================================ */
    const FOOD_CATALOG = [
      { key: `carrot`, en: `Carrots`, si: `කැරට්`, cat: `veg`, loc: `fridge`, days: 10, unit: `pcs`, avgLkr: 360, art: `carrot` },
      { key: `red_onion`, en: `Red Onions`, si: `රතු ලූනු`, cat: `veg`, loc: `pantry`, days: 21, unit: `g`, avgLkr: 480, art: `onion` },
      { key: `coconut`, en: `Fresh Coconut`, si: `පොල්`, cat: `spices`, loc: `pantry`, days: 14, unit: `pcs`, avgLkr: 150, art: `coconut` },
      { key: `tomato`, en: `Tomatoes`, si: `තක්කාලි`, cat: `veg`, loc: `fridge`, days: 6, unit: `g`, avgLkr: 320, art: `tomato` },
      { key: `green_chilli`, en: `Green Chillies`, si: `අමු මිරිස්`, cat: `veg`, loc: `fridge`, days: 8, unit: `g`, avgLkr: 180, art: `chilli` },
      { key: `lime`, en: `Lime`, si: `දෙහි`, cat: `fruit`, loc: `fridge`, days: 12, unit: `pcs`, avgLkr: 200, art: `lime` },
      { key: `dhal`, en: `Red Lentils (Parippu)`, si: `මයිසූර් පරිප්පු`, cat: `grains`, loc: `pantry`, days: 180, unit: `g`, avgLkr: 420, art: `dhal` },
      { key: `rice`, en: `Samba / Red Rice`, si: `සම්බා / රතු සහල්`, cat: `grains`, loc: `pantry`, days: 150, unit: `kg`, avgLkr: 1150, art: `rice` },
      { key: `eggs`, en: `Eggs`, si: `බිත්තර`, cat: `dairy`, loc: `fridge`, days: 21, unit: `pcs`, avgLkr: 550, art: `egg` },
      { key: `milk`, en: `Fresh Milk / Curd`, si: `එළකිරි / මීකිරි`, cat: `dairy`, loc: `fridge`, days: 4, unit: `L`, avgLkr: 580, art: `milk`, labelType: `use_by` },
      { key: `fish`, en: `Fresh Fish (Thalapath / Tuna)`, si: `මාළු (තලපත් / කෙලවල්ලා)`, cat: `meat`, loc: `fridge`, days: 2, unit: `g`, avgLkr: 1450, art: `fish`, labelType: `use_by` },
      { key: `chicken`, en: `Chicken`, si: `කුකුල් මස්`, cat: `meat`, loc: `fridge`, days: 2, unit: `g`, avgLkr: 1280, art: `chicken`, labelType: `use_by` },
      { key: `bread`, en: `Roast Bread`, si: `රෝස් පාන්`, cat: `bakery`, loc: `pantry`, days: 3, unit: `loaf`, avgLkr: 180, art: `bread`, labelType: `best_by` },
      { key: `banana`, en: `Kolikuttu / Ambul Bananas`, si: `කෝලිකුට්ටු / ඇඹුල් කෙසෙල්`, cat: `fruit`, loc: `pantry`, days: 4, unit: `pcs`, avgLkr: 340, art: `banana` },
      { key: `potato`, en: `Potatoes`, si: `අර්තාපල්`, cat: `veg`, loc: `pantry`, days: 18, unit: `g`, avgLkr: 390, art: `potato` },
      { key: `garlic`, en: `Garlic`, si: `සුදු ලූනු`, cat: `spices`, loc: `pantry`, days: 30, unit: `g`, avgLkr: 240, art: `garlic` },
      { key: `greens`, en: `Gotukola / Mukunuwenna`, si: `ගොටුකොළ / මුකුණුවැන්න`, cat: `veg`, loc: `fridge`, days: 3, unit: `bunch`, avgLkr: 120, art: `greens` },
      { key: `leftovers`, en: `Cooked Rice & Curry Leftovers`, si: `ඉතිරි බත් හා ව්‍යංජන`, cat: `leftovers`, loc: `fridge`, days: 3, unit: `pack`, avgLkr: 450, art: `bowl`, labelType: `use_by` }
    ];

    const CATEGORY_LABELS = {
      veg: { en: `Vegetables`, si: `එළවළු` },
      fruit: { en: `Fruits`, si: `පලතුරු` },
      dairy: { en: `Dairy & Eggs`, si: `කිරි සහ බිත්තර` },
      meat: { en: `Meat & Fish`, si: `මස් සහ මාළු` },
      grains: { en: `Grains & Pulses`, si: `ධාන්‍ය හා පරිප්පු` },
      bakery: { en: `Bakery`, si: `බේකරි ආහාර` },
      spices: { en: `Spices & Coconut`, si: `කුළුබඩු සහ පොල්` },
      leftovers: { en: `Leftovers`, si: `ඉතිරි ආහාර` }
    };

    const LOCATION_LABELS = {
      fridge: { en: `Fridge`, si: `ශීතකරණය` },
      pantry: { en: `Pantry`, si: `පැන්ට්‍රිය` },
      freezer: { en: `Freezer`, si: `අධිශීතකරණය` }
    };

    const UNIT_OPTIONS = [
      { id: `pcs`, en: `pcs`, si: `ගෙඩි / කැබලි` },
      { id: `g`, en: `g`, si: `ග්‍රෑම් (g)` },
      { id: `kg`, en: `kg`, si: `කි.ග්‍රෑ. (kg)` },
      { id: `L`, en: `L`, si: `ලීටර් (L)` },
      { id: `ml`, en: `ml`, si: `මි.ලී. (ml)` },
      { id: `pack`, en: `pack`, si: `පැකට්` },
      { id: `bunch`, en: `bunch`, si: `මිටි` },
      { id: `loaf`, en: `loaf`, si: `ගෙඩි (පාන්)` }
    ];

    const SRI_LANKAN_RECIPES = [
      {
        id: `parippu`,
        titleEn: `Sri Lankan Parippu (Creamy Red Dhal Curry)`,
        titleSi: `ශ්‍රී ලාංකේය පරිප්පු ව්‍යංජනය`,
        timeMin: 20,
        art: `dhal`,
        ingredients: [`dhal`, `coconut`, `red_onion`, `garlic`, `green_chilli`],
        stepsEn: `Rinse red lentils, simmer with turmeric, sliced red onions, garlic, and green chillies. Finish with thick coconut milk and tempered curry leaves.`,
        stepsSi: `මයිසූර් පරිප්පු සෝදා කහ, රතු ලූනු, සුදු ලූනු සහ අමු මිරිස් සමඟ පිස, මිටි කිරි හා කරපිංචා එක් කරන්න.`
      },
      {
        id: `pol_sambol`,
        titleEn: `Fresh Pol Sambol`,
        titleSi: `පොල් සම්බෝල`,
        timeMin: 10,
        art: `coconut`,
        ingredients: [`coconut`, `red_onion`, `lime`, `green_chilli`],
        stepsEn: `Grind or finely mix scraped coconut with red onions, green chillies, chilli powder, salt, and fresh lime juice.`,
        stepsSi: `ගාගත් පොල් සමඟ රතු ලූනු, අමු මිරිස්, මිරිස් කුඩු, ලුණු සහ දෙහි යුෂ එක්කර අඹරා ගන්න.`
      },
      {
        id: `fish_curry`,
        titleEn: `Sri Lankan Spicy Fish Curry`,
        titleSi: `ශ්‍රී ලාංකේය මාළු මිරිස් හොද්ද`,
        timeMin: 30,
        art: `fish`,
        ingredients: [`fish`, `red_onion`, `garlic`, `tomato`, `green_chilli`],
        stepsEn: `Marinate fish with turmeric, roasted curry powder, and lime/goraka. Simmer gently with red onions, garlic, tomatoes, and curry leaves.`,
        stepsSi: `මාළු වලට කහ, තුනපහ සහ දෙහි/ගොරකා තවරා, රතු ලූනු, සුදු ලූනු, තක්කාලි සහ අමු මිරිස් සමඟ මද ගින්නේ පිසගන්න.`
      },
      {
        id: `kothu`,
        titleEn: `Kitchen-Rescue Kothu (With Bread / Leftovers)`,
        titleSi: `නිවසේ ඉතිරි පාන් / රොටී කොත්තු`,
        timeMin: 20,
        art: `bread`,
        ingredients: [`bread`, `eggs`, `carrot`, `red_onion`, `chicken`],
        stepsEn: `Dice stale bread or roti, stir-fry shredded carrots and onions, scramble eggs directly in the pan, and toss with leftover curry or chicken.`,
        stepsSi: `පාන් හෝ රොටී කැබලි කපා, කැරට්, ලූනු සහ බිත්තර සමඟ තෙම්පරාදු කර ඉතිරි කුකුල් මස් හෝ හොදි සමඟ කලවම් කරන්න.`
      },
      {
        id: `carrot_mallung`,
        titleEn: `Carrot & Coconut Mallung`,
        titleSi: `කැරට් මැල්ලුම්`,
        timeMin: 12,
        art: `carrot`,
        ingredients: [`carrot`, `coconut`, `red_onion`, `green_chilli`, `lime`],
        stepsEn: `Grate carrots finely, toss quickly over medium heat with scraped coconut, sliced red onions, green chillies, turmeric, and lime.`,
        stepsSi: `ගාගත් කැරට් සමඟ පොල්, රතු ලූනු, අමු මිරිස්, කහ සහ දෙහි එක්කර විනාඩි කිහිපයක් මැල්ලුම් කරන්න.`
      },
      {
        id: `gotukola_sambol`,
        titleEn: `Gotukola / Greens Sambol`,
        titleSi: `ගොටුකොළ සම්බෝල`,
        timeMin: 10,
        art: `greens`,
        ingredients: [`greens`, `coconut`, `red_onion`, `tomato`, `lime`],
        stepsEn: `Wash and finely shred gotukola greens. Toss raw with scraped coconut, sliced red onions, diced tomato, salt, and fresh lime.`,
        stepsSi: `හොඳින් සේදූ ගොටුකොළ සිහින්ව ලියා පොල්, රතු ලූනු, තක්කාලි, ලුණු සහ දෙහි යුෂ සමඟ කලවම් කරන්න.`
      },
      {
        id: `ala_thel_dala`,
        titleEn: `Ala Thel Dala (Tempered Potatoes)`,
        titleSi: `අල තෙල් දාලා`,
        timeMin: 20,
        art: `potato`,
        ingredients: [`potato`, `red_onion`, `green_chilli`, `garlic`],
        stepsEn: `Boil and cube potatoes. Temper mustard seeds, red onions, garlic, green chillies, and chilli flakes in oil, then toss potatoes until golden.`,
        stepsSi: `තම්බාගත් අල කැබලි අබ, රතු ලූනු, සුදු ලූනු, අමු මිරිස් සහ කෑලි මිරිස් සමඟ තෙම්පරාදු කරන්න.`
      },
      {
        id: `fried_rice`,
        titleEn: `Leftover Rice & Egg Stir-Fry`,
        titleSi: `ඉතිරි බත් හා බිත්තර බැදුම`,
        timeMin: 15,
        art: `rice`,
        ingredients: [`rice`, `eggs`, `carrot`, `garlic`, `green_chilli`],
        stepsEn: `Use chilled leftover rice, stir-fry garlic, diced carrots, and green chillies on high heat, fold in scrambled eggs and soy/pepper.`,
        stepsSi: `ශීතකරණයේ තැබූ ඉතිරි බත්, සුදු ලූනු, කැරට්, අමු මිරිස් සහ බිත්තර සමඟ වැඩි ගින්නේ බැදගන්න.`
      }
    ];

    const LABEL_DECODER_CARDS = [
      {
        titleEn: `Best By / Best Before`,
        titleSi: `Best By / හොඳම තත්ත්වය`,
        whoEn: `For Consumers • Quality Indicator`,
        whoSi: `පාරිභෝගිකයන්ට • ගුණාත්මක දිනය`,
        descEn: `Indicates peak flavour and texture — NOT a safety cutoff. Shelf-stable grains, dhal, and spices remain safe well past this date if dry and sealed.`,
        descSi: `ආහාරයේ උපරිම රසය සහ නැවුම්බව පෙන්වයි — ආරක්ෂිත අවසන් දිනය නොවේ. වියළිව ගබඩා කළ පරිප්පු හා සහල් ඉන් පසුවද ආරක්ෂිතයි.`
      },
      {
        titleEn: `Sell By`,
        titleSi: `Sell By / විකිණීමේ දිනය`,
        whoEn: `For Retailers • Inventory Tool`,
        whoSi: `වෙළඳසැල් සඳහා • තොග පාලන දිනය`,
        descEn: `Tells supermarkets how long to display a product. At home, proper refrigeration and your senses matter far more than the Sell-By stamp.`,
        descSi: `වෙළඳසැල් රාක්කයේ තබන කාලය පෙන්වයි. නිවසට ගෙන ආ පසු නිවැරදි ශීතකරණ ගබඩාව වඩා වැදගත් වේ.`
      },
      {
        titleEn: `Use By / Expiration Date`,
        titleSi: `Use By / කල් ඉකුත් වීම`,
        whoEn: `Strict Cutoff • Perishables & Infant Formula`,
        whoSi: `දැඩි සීමාව • ළදරු කිරි සහ ඉක්මනින් නරක් වන දෑ`,
        descEn: `Closest to a safety cutoff for high-risk chilled meat, fish, and dairy. Infant formula must strictly never be used past its Use-By date.`,
        descSi: `මස්, මාළු, කිරි සහ විශේෂයෙන් ළදරු කිරිපිටි සඳහා මෙම දිනය පසුවූ පසු භාවිතා නොකරන්න.`
      }
    ];

    const TROPICAL_TIPS = [
      {
        cat: `tropical`,
        titleEn: `Sri Lankan Humidity & Pantry Rule`,
        titleSi: `තෙතමනය හා පැන්ට්‍රි නීතිය`,
        bodyEn: `At 75–85% humidity, keep red onions, garlic, and potatoes in open woven baskets — never sealed plastic bags or the fridge — to prevent sprouting and mould.`,
        bodySi: `ඉහළ ආර්ද්‍රතාවය නිසා රතු ලූනු, සුදු ලූනු සහ අර්තාපල් ප්ලාස්ටික් බෑග් වල හෝ ශීතකරණයේ නොතබා වාතාශ්‍රය ඇති කූඩවල තබන්න.`
      },
      {
        cat: `tropical`,
        titleEn: `Coconut Milk & Scraped Coconut`,
        titleSi: `පොල් කිරි සහ ගාගත් පොල්`,
        bodyEn: `Fresh coconut milk sours within 24–36 hours even in a fridge due to tropical bacteria. Freeze surplus thick milk or scraped coconut in portioned ice-cube trays for up to 2 months.`,
        bodySi: `මිරිකූ පොල් කිරි ශීතකරණයේ වුවද පැය 24–36 කින් නරක් විය හැක. ඉතිරි පොල් කිරි අයිස් කැට තැටිවල අධිශීත කර මාස 2ක් තබාගන්න.`
      },
      {
        cat: `tropical`,
        titleEn: `Curry Leaves & Green Chillies`,
        titleSi: `කරපිංචා සහ අමු මිරිස්`,
        bodyEn: `Wash, pat completely dry, remove stems from green chillies, and wrap in dry paper towel inside an airtight glass jar in the fridge — extends freshness from 4 days to 2+ weeks.`,
        bodySi: `අමු මිරිස් නටු ඉවත් කර, හොඳින් වියළා කඩදාසියක ඔතා වාතය නොයන බඳුනක ශීතකරණයේ තබන්න — සති 2කට වඩා නැවුම්ව පවතී.`
      },
      {
        cat: `safety`,
        titleEn: `Danger Zone & Rice Cooling (90-Min Rule)`,
        titleSi: `උෂ්ණත්ව අනතුරු කලාපය සහ බත් සිසිල් කිරීම`,
        bodyEn: `Bacteria multiply rapidly between 8°C and 63°C. In Sri Lankan heat (>32°C), refrigerate cooked rice and curries within 60–90 minutes in shallow containers.`,
        bodySi: `8°C–63°C අතර බැක්ටීරියා වේගයෙන් වර්ධනය වේ. උණුසුම් දේශගුණයේදී පිසූ බත් සහ ව්‍යංජන මිනිත්තු 60–90 ක් ඇතුළත ශීතකරණයට දමන්න.`
      },
      {
        cat: `fifo`,
        titleEn: `5-Step FIFO Kitchen Habit`,
        titleSi: `පියවර 5ක FIFO පුරුද්ද`,
        bodyEn: `1) Check soonest dates 2) Discard expired/damaged items 3) Move older stock to front 4) Place new groceries at the back 5) Use front items first. Clear glass containers prevent forgotten leftovers!`,
        bodySi: `1) ඉක්මන් දින හඳුනාගන්න 2) නරක් වූ දෑ ඉවත් කරන්න 3) පැරණි දෑ ඉදිරියට ගන්න 4) නව බඩු පිටුපසින් තබන්න 5) ඉදිරියේ ඇති දෑ පළමුව ගන්න.`
      },
      {
        cat: `spoilage`,
        titleEn: `5 Signs Food Has Spoiled`,
        titleSi: `ආහාර නරක් වූ බවට ලකුණු 5ක්`,
        bodyEn: `Never taste-test suspect food. Discard immediately if you detect: 1) Sour/off odour 2) Greying meat or colour shift 3) Slimy texture or clumpy milk 4) Visible mould 5) Unusual rancid smell.`,
        bodySi: `සැක සහිත ආහාර රස බලන්න එපා. ඇඹුල් ගඳ, වර්ණ වෙනස් වීම, සෙවල ගතිය, පුස් බැඳීම හෝ මුඩු ගඳ ඇත්නම් වහාම ඉවතලන්න.`
      }
    ];

    const FDA_STORAGE_ROWS = [
      { itemEn: `Fresh Fish (lean / fatty)`, itemSi: `නැවුම් මාළු`, fridge: `1–2 days`, freezer: `2–8 months` },
      { itemEn: `Raw Chicken (whole or parts)`, itemSi: `අමු කුකුල් මස්`, fridge: `1–2 days`, freezer: `9–12 months` },
      { itemEn: `Cooked Curries, Meat & Rice Leftovers`, itemSi: `පිසූ ව්‍යංජන සහ ඉතිරි බත්`, fridge: `3–4 days`, freezer: `2–3 months` },
      { itemEn: `Soups & Stews`, itemSi: `සුප් හා හොදි වර්ග`, fridge: `3–4 days`, freezer: `2–3 months` },
      { itemEn: `Fresh Eggs (in shell)`, itemSi: `බිත්තර`, fridge: `3–5 weeks`, freezer: `Do not freeze` },
      { itemEn: `Opened Lunch Meat / Sausages`, itemSi: `විවෘත කළ සොසේජස් / මස්`, fridge: `3–5 days`, freezer: `1–2 months` }
    ];

    /* ============================================================
       INLINE VECTOR FOOD ARTWORK (100% TOKEN-BASED SVG)
    ============================================================ */
    const ART_KEYS = [`carrot`, `onion`, `coconut`, `tomato`, `chilli`, `lime`, `dhal`, `rice`, `egg`, `milk`, `fish`, `chicken`, `bread`, `banana`, `potato`, `garlic`, `greens`, `bowl`];

    function getFoodSvg(artKey) {
      const svgs = {
        carrot: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><g transform="rotate(-25 32 32)"><path d="M32 14 C40 24 38 50 32 56 C26 50 24 24 32 14 Z" fill="var(--art-carrot)"/><path d="M28 28 H34 M29 38 H35" stroke="var(--art-carrot-dark)" stroke-width="2" stroke-linecap="round"/><path d="M32 14 Q26 6 21 7 M32 14 Q32 4 32 3 M32 14 Q38 6 43 7" stroke="var(--art-leaf)" stroke-width="3" fill="none" stroke-linecap="round"/></g></svg>`,
        onion: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><ellipse cx="28" cy="36" rx="14" ry="13" fill="var(--art-onion)"/><ellipse cx="40" cy="40" rx="12" ry="11" fill="var(--art-onion-light)"/><path d="M28 23 Q28 15 31 12 M40 29 Q41 22 43 19" stroke="var(--art-leaf)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        coconut: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><circle cx="32" cy="34" r="20" fill="var(--art-coconut)"/><circle cx="32" cy="34" r="14" fill="var(--art-cream)"/><circle cx="32" cy="34" r="9" fill="var(--surface-container-low)"/></svg>`,
        tomato: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><circle cx="32" cy="36" r="17" fill="var(--art-tomato)"/><ellipse cx="26" cy="30" rx="5" ry="3" fill="var(--art-cream)" opacity="0.35"/><path d="M32 19 Q25 12 20 16 M32 19 Q32 10 33 10 M32 19 Q39 12 44 16" stroke="var(--art-leaf)" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
        chilli: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M20 18 Q42 18 46 48 Q35 42 26 30 Z" fill="var(--art-chilli)"/><path d="M16 32 Q32 36 38 54 Q26 50 18 40 Z" fill="var(--art-chilli-red)"/><path d="M20 18 Q16 12 13 13" stroke="var(--art-leaf)" stroke-width="3" stroke-linecap="round"/></svg>`,
        lime: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><circle cx="28" cy="36" r="15" fill="var(--art-lime)"/><circle cx="42" cy="40" r="12" fill="var(--art-leaf-light)"/><path d="M28 21 Q38 14 42 22 Q34 25 28 21 Z" fill="var(--art-leaf)"/></svg>`,
        dhal: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M12 32 H52 C52 46 42 52 32 52 C22 52 12 46 12 32 Z" fill="var(--art-bowl)"/><ellipse cx="32" cy="32" rx="20" ry="7" fill="var(--art-dhal)"/><circle cx="26" cy="31" r="2" fill="var(--art-cream)" opacity="0.6"/><circle cx="36" cy="33" r="2" fill="var(--art-cream)" opacity="0.6"/></svg>`,
        rice: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M12 34 H52 C52 47 42 53 32 53 C22 53 12 47 12 34 Z" fill="var(--primary)"/><path d="M15 34 Q32 16 49 34 Z" fill="var(--art-rice)"/><path d="M24 28 L27 27 M34 26 L38 27 M30 31 L34 30" stroke="var(--outline-variant)" stroke-width="2" stroke-linecap="round"/></svg>`,
        egg: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><ellipse cx="25" cy="34" rx="11" ry="15" fill="var(--art-egg)"/><ellipse cx="39" cy="36" rx="11" ry="15" fill="var(--art-cream)" stroke="var(--outline-variant)" stroke-width="1.5"/><circle cx="39" cy="39" r="5" fill="var(--art-egg-yolk)"/></svg>`,
        milk: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><rect x="20" y="20" width="24" height="32" rx="4" fill="var(--art-milk)" stroke="var(--art-bowl)" stroke-width="2"/><path d="M20 20 L26 12 H38 L44 20 Z" fill="var(--primary-container)" stroke="var(--art-bowl)" stroke-width="2"/><rect x="24" y="30" width="16" height="10" rx="2" fill="var(--primary)"/></svg>`,
        fish: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M14 32 Q28 18 46 32 Q28 46 14 32 Z" fill="var(--art-fish)"/><path d="M46 32 L56 23 V41 Z" fill="var(--art-fish-light)"/><circle cx="22" cy="30" r="2.2" fill="var(--art-cream)"/></svg>`,
        chicken: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M18 36 C18 22 36 18 44 28 C50 36 42 48 28 46 Z" fill="var(--art-chicken)"/><path d="M44 38 L52 44" stroke="var(--art-cream)" stroke-width="6" stroke-linecap="round"/><circle cx="53" cy="45" r="3" fill="var(--art-cream)"/></svg>`,
        bread: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M14 28 C14 18 50 18 50 28 V46 C50 48 48 50 46 50 H18 C16 50 14 48 14 46 Z" fill="var(--art-bread)"/><path d="M14 28 C14 18 50 18 50 28" stroke="var(--art-bread-crust)" stroke-width="5" fill="none"/><path d="M24 24 L27 32 M34 24 L37 32" stroke="var(--art-bread-crust)" stroke-width="2" stroke-linecap="round"/></svg>`,
        banana: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M16 42 Q32 52 48 22 Q44 40 20 46 Z" fill="var(--art-banana)"/><path d="M14 34 Q30 44 46 16 Q42 33 18 38 Z" fill="var(--art-banana)" stroke="var(--tertiary)" stroke-width="1.5"/></svg>`,
        potato: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><ellipse cx="28" cy="35" rx="15" ry="11" fill="var(--art-potato)"/><ellipse cx="40" cy="40" rx="13" ry="9" fill="var(--tertiary-container)"/><circle cx="24" cy="33" r="1.5" fill="var(--tertiary)"/><circle cx="33" cy="37" r="1.5" fill="var(--tertiary)"/></svg>`,
        garlic: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M32 14 C36 22 46 28 46 38 C46 46 39 50 32 50 C25 50 18 46 18 38 C18 28 28 22 32 14 Z" fill="var(--art-garlic)" stroke="var(--outline-variant)" stroke-width="1.5"/><path d="M32 14 V50 M26 26 Q24 38 27 49 M38 26 Q40 38 37 49" stroke="var(--outline-variant)" stroke-width="1.2" fill="none"/></svg>`,
        greens: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M20 48 Q16 26 28 16 Q36 28 24 48 Z" fill="var(--art-leaf)"/><path d="M32 50 Q32 24 44 18 Q48 32 36 50 Z" fill="var(--art-leaf-light)"/><path d="M24 48 L28 56 M34 50 L32 56" stroke="var(--art-leaf)" stroke-width="3" stroke-linecap="round"/></svg>`,
        bowl: `<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><path d="M12 30 H52 C52 46 42 52 32 52 C22 52 12 46 12 30 Z" fill="var(--art-bowl)"/><ellipse cx="32" cy="30" rx="20" ry="6" fill="var(--art-dhal)"/><circle cx="24" cy="30" r="3" fill="var(--art-leaf-light)"/><circle cx="37" cy="29" r="3" fill="var(--art-carrot)"/></svg>`
      };
      return svgs[artKey] || svgs.bowl;
    }

    /* ============================================================
       APPLICATION STATE & PERSISTENCE (notebookAppApi)
    ============================================================ */
    let appState = {
      lang: `en`,
      activeView: `dashboard`,
      recipeFilter: `all`,
      tipsFilter: `all`,
      settings: {
        householdName: `Perera Family Kitchen`,
        climateZone: `wet`,
        alertDays: 3,
        enable3DayCheck: true
      },
      items: [],
      shoppingList: [],
      history: [],
      dismissedChecks: {}
    };

    let undoStack = [];
    let sessionPhotoMap = {};
    let ratioChartInstance = null;
    let categoryChartInstance = null;
    let speechRec = null;
    let isListening = false;

    function getColomboTodayStr(offsetDays) {
      const now = new Date();
      const colomboStr = now.toLocaleDateString(`en-CA`, { timeZone: `Asia/Colombo` });
      const parts = colomboStr.split(`-`).map(Number);
      const d = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
      if (offsetDays) d.setUTCDate(d.getUTCDate() + offsetDays);
      return d.toISOString().slice(0, 10);
    }

    function daysBetweenToday(dateStr) {
      if (!dateStr) return 999;
      const todayStr = getColomboTodayStr(0);
      const t1 = Date.parse(todayStr + `T00:00:00Z`);
      const t2 = Date.parse(dateStr + `T00:00:00Z`);
      return Math.round((t2 - t1) / 86400000);
    }

    function daysSince(dateStr) {
      return -daysBetweenToday(dateStr);
    }

    function t(key, vars) {
      const dict = I18N[appState.lang] || I18N.en;
      let str = dict[key] || I18N.en[key] || key;
      if (vars) {
        Object.keys(vars).forEach((k) => {
          str = str.replace(`{` + k + `}`, String(vars[k]));
        });
      }
      return str;
    }

    function formatLkr(num) {
      const val = Math.round(Number(num) || 0);
      return `Rs. ` + val.toLocaleString(`en-US`);
    }

    async function persistState() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
          await window.notebookAppApi.setAppState(appState);
        }
      } catch (err) {
        console.warn(`State save skipped:`, err);
      }
    }

    function pushUndoSnapshot(label) {
      undoStack.push({
        label: label,
        snapshot: JSON.stringify({
          items: appState.items,
          shoppingList: appState.shoppingList,
          history: appState.history,
          dismissedChecks: appState.dismissedChecks
        })
      });
      if (undoStack.length > 15) undoStack.shift();
      updateUndoButtons();
    }

    function updateUndoButtons() {
      const btn = document.getElementById(`undo-inv-btn`);
      if (btn) btn.disabled = undoStack.length === 0;
    }

    function undoLastAction() {
      if (undoStack.length === 0) return;
      const prev = undoStack.pop();
      const parsed = JSON.parse(prev.snapshot);
      appState.items = parsed.items;
      appState.shoppingList = parsed.shoppingList;
      appState.history = parsed.history;
      appState.dismissedChecks = parsed.dismissedChecks;
      updateUndoButtons();
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `පෙර තත්ත්වයට ප්‍රතිසාධනය කළා` : `Undid: ` + prev.label, false);
    }

    let toastTimer = null;
    function showToast(msg, canUndo) {
      const bar = document.getElementById(`toast-bar`);
      const text = document.getElementById(`toast-message`);
      const undoBtn = document.getElementById(`toast-undo-btn`);
      if (!bar || !text || !undoBtn) return;
      text.textContent = msg;
      undoBtn.style.display = canUndo && undoStack.length > 0 ? `inline-flex` : `none`;
      bar.classList.add(`is-visible`);
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        bar.classList.remove(`is-visible`);
      }, 5000);
    }

    /* ============================================================
       TIME & COLOMBO CLOCK
    ============================================================ */
    function updateColomboGreeting() {
      const now = new Date();
      const hourStr = new Intl.DateTimeFormat(`en-GB`, {
        timeZone: `Asia/Colombo`,
        hour: `2-digit`,
        hour12: false
      }).format(now);
      const hour = parseInt(hourStr, 10);
      let greetKey = `greetMorning`;
      if (hour >= 12 && hour < 17) greetKey = `greetAfternoon`;
      else if (hour >= 17 || hour < 4) greetKey = `greetEvening`;

      const dateFormatted = new Intl.DateTimeFormat(appState.lang === `si` ? `si-LK` : `en-LK`, {
        timeZone: `Asia/Colombo`,
        weekday: `short`,
        year: `numeric`,
        month: `short`,
        day: `numeric`,
        hour: `2-digit`,
        minute: `2-digit`
      }).format(now);

      const gEl = document.getElementById(`greeting-text`);
      const cEl = document.getElementById(`colombo-clock`);
      if (gEl) gEl.textContent = t(greetKey) + ` — ` + (appState.settings.householdName || ``);
      if (cEl) cEl.textContent = dateFormatted + ` (Asia/Colombo)`;
    }

    /* ============================================================
       LANGUAGE & NAVIGATION
    ============================================================ */
    function setLanguage(lang) {
      appState.lang = lang === `si` ? `si` : `en`;
      document.documentElement.lang = appState.lang;
      const enBtn = document.getElementById(`lang-btn-en`);
      const siBtn = document.getElementById(`lang-btn-si`);
      if (enBtn) enBtn.setAttribute(`aria-pressed`, appState.lang === `en` ? `true` : `false`);
      if (siBtn) siBtn.setAttribute(`aria-pressed`, appState.lang === `si` ? `true` : `false`);
      applyTranslations();
      populateSelects();
      renderAll();
      persistState();
    }

    function applyTranslations() {
      document.querySelectorAll(`[data-i18n]`).forEach((el) => {
        const key = el.getAttribute(`data-i18n`);
        if (key) el.textContent = t(key);
      });
      updateColomboGreeting();
    }

    function switchView(viewId) {
      appState.activeView = viewId;
      document.querySelectorAll(`.view-section`).forEach((sec) => {
        sec.classList.toggle(`is-active`, sec.id === `view-` + viewId);
      });
      document.querySelectorAll(`.nav-tab`).forEach((tab) => {
        if (tab.dataset.view === viewId) tab.setAttribute(`aria-current`, `page`);
        else tab.removeAttribute(`aria-current`);
      });
      if (viewId === `insights`) {
        renderInsightsCharts();
      }
      persistState();
    }

    /* ============================================================
       STATUS & BADGE LOGIC (SAFETY-FIRST)
    ============================================================ */
    function getItemStatus(item) {
      const daysLeft = daysBetweenToday(item.expiryDate);
      const alertLead = Number(appState.settings.alertDays) || 3;
      if (daysLeft < 0) {
        return {
          code: `expired`,
          isUnsafe: item.labelType === `use_by` || daysLeft < -2,
          daysLeft: daysLeft,
          badgeClass: `badge-danger`,
          label: item.labelType === `use_by` ? t(`badgeExpiredUseBy`) : t(`badgeExpiredQuality`)
        };
      }
      if (daysLeft === 0) {
        return { code: `expiring`, isUnsafe: false, daysLeft: 0, badgeClass: `badge-danger`, label: t(`badgeExpiresToday`) };
      }
      if (daysLeft === 1) {
        return { code: `expiring`, isUnsafe: false, daysLeft: 1, badgeClass: `badge-warn`, label: t(`badgeExpiresTomorrow`) };
      }
      if (daysLeft <= alertLead) {
        return { code: `expiring`, isUnsafe: false, daysLeft: daysLeft, badgeClass: `badge-warn`, label: t(`badgeExpiresIn`, { n: daysLeft }) };
      }
      return { code: `fresh`, isUnsafe: false, daysLeft: daysLeft, badgeClass: `badge-fresh`, label: t(`badgeFreshDays`, { n: daysLeft }) };
    }

    function getItemDisplayName(item) {
      if (appState.lang === `si` && item.nameSi) return item.nameSi;
      return item.nameEn || item.name || `Item`;
    }

    function getUnitLabel(unitId) {
      const u = UNIT_OPTIONS.find((x) => x.id === unitId);
      return u ? (appState.lang === `si` ? u.si : u.en) : unitId;
    }

    function getCategoryLabel(catId) {
      const c = CATEGORY_LABELS[catId];
      return c ? (appState.lang === `si` ? c.si : c.en) : catId;
    }

    function getLocationLabel(locId) {
      const l = LOCATION_LABELS[locId];
      return l ? (appState.lang === `si` ? l.si : l.en) : locId;
    }

    /* ============================================================
       SAMPLE SRI LANKAN KITCHEN PRESET
    ============================================================ */
    function loadSampleKitchen() {
      pushUndoSnapshot(`Load sample kitchen`);
      appState.items = [
        {
          id: `smp_carrots`,
          catalogKey: `carrot`,
          nameEn: `Carrots`,
          nameSi: `කැරට්`,
          qty: 5,
          unit: `pcs`,
          category: `veg`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-3),
          expiryDate: getColomboTodayStr(2),
          labelType: `estimated`,
          priceLkr: 360,
          notes: `Nuwara Eliya fresh carrots`,
          art: `carrot`
        },
        {
          id: `smp_fish`,
          catalogKey: `fish`,
          nameEn: `Fresh Fish (Thalapath)`,
          nameSi: `තලපත් මාළු`,
          qty: 500,
          unit: `g`,
          category: `meat`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-1),
          expiryDate: getColomboTodayStr(0),
          labelType: `use_by`,
          priceLkr: 1450,
          notes: `Cook tonight for dinner`,
          art: `fish`
        },
        {
          id: `smp_milk`,
          catalogKey: `milk`,
          nameEn: `Fresh Milk`,
          nameSi: `එළකිරි`,
          qty: 1,
          unit: `L`,
          category: `dairy`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-4),
          expiryDate: getColomboTodayStr(1),
          labelType: `use_by`,
          priceLkr: 580,
          notes: `Opened 2 days ago`,
          art: `milk`
        },
        {
          id: `smp_gotukola`,
          catalogKey: `greens`,
          nameEn: `Gotukola Bunch`,
          nameSi: `ගොටුකොළ`,
          qty: 2,
          unit: `bunch`,
          category: `veg`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-2),
          expiryDate: getColomboTodayStr(1),
          labelType: `estimated`,
          priceLkr: 140,
          notes: `Wrapped in dry paper towel`,
          art: `greens`
        },
        {
          id: `smp_coconut`,
          catalogKey: `coconut`,
          nameEn: `Fresh Coconuts`,
          nameSi: `පොල්`,
          qty: 3,
          unit: `pcs`,
          category: `spices`,
          location: `pantry`,
          purchaseDate: getColomboTodayStr(-5),
          expiryDate: getColomboTodayStr(9),
          labelType: `estimated`,
          priceLkr: 450,
          notes: `For morning Pol Sambol`,
          art: `coconut`
        },
        {
          id: `smp_dhal`,
          catalogKey: `dhal`,
          nameEn: `Red Lentils (Parippu)`,
          nameSi: `මයිසූර් පරිප්පු`,
          qty: 750,
          unit: `g`,
          category: `grains`,
          location: `pantry`,
          purchaseDate: getColomboTodayStr(-12),
          expiryDate: getColomboTodayStr(140),
          labelType: `best_by`,
          priceLkr: 420,
          notes: `Airtight glass jar`,
          art: `dhal`
        },
        {
          id: `smp_onions`,
          catalogKey: `red_onion`,
          nameEn: `Red Onions`,
          nameSi: `රතු ලූනු`,
          qty: 500,
          unit: `g`,
          category: `veg`,
          location: `pantry`,
          purchaseDate: getColomboTodayStr(-6),
          expiryDate: getColomboTodayStr(14),
          labelType: `estimated`,
          priceLkr: 480,
          notes: `Open basket`,
          art: `onion`
        },
        {
          id: `smp_eggs`,
          catalogKey: `eggs`,
          nameEn: `Eggs`,
          nameSi: `බිත්තර`,
          qty: 6,
          unit: `pcs`,
          category: `dairy`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-5),
          expiryDate: getColomboTodayStr(15),
          labelType: `best_by`,
          priceLkr: 330,
          notes: `Farm fresh`,
          art: `egg`
        },
        {
          id: `smp_bread`,
          catalogKey: `bread`,
          nameEn: `Roast Bread`,
          nameSi: `රෝස් පාන්`,
          qty: 1,
          unit: `loaf`,
          category: `bakery`,
          location: `pantry`,
          purchaseDate: getColomboTodayStr(-2),
          expiryDate: getColomboTodayStr(2),
          labelType: `best_by`,
          priceLkr: 180,
          notes: `Great for home Kothu`,
          art: `bread`
        },
        {
          id: `smp_curd_expired`,
          catalogKey: `milk`,
          nameEn: `Opened Yogurt Cup`,
          nameSi: `විවෘත කළ යෝගට්`,
          qty: 1,
          unit: `pack`,
          category: `dairy`,
          location: `fridge`,
          purchaseDate: getColomboTodayStr(-8),
          expiryDate: getColomboTodayStr(-2),
          labelType: `use_by`,
          priceLkr: 110,
          notes: `Past Use-By — flagged unsafe`,
          art: `milk`
        }
      ];

      appState.shoppingList = [
        { id: `sh_1`, nameEn: `Lime`, nameSi: `දෙහි`, qty: 5, unit: `pcs`, estPriceLkr: 200, category: `fruit`, location: `fridge`, checked: false },
        { id: `sh_2`, nameEn: `Green Chillies`, nameSi: `අමු මිරිස්`, qty: 150, unit: `g`, estPriceLkr: 180, category: `veg`, location: `fridge`, checked: false }
      ];

      appState.history = [
        { id: `h1`, date: getColomboTodayStr(-10), nameEn: `Samba Rice`, nameSi: `සම්බා සහල්`, cat: `grains`, action: `consumed`, qty: 2, unit: `kg`, valueLkr: 1150 },
        { id: `h2`, date: getColomboTodayStr(-7), nameEn: `Chicken`, nameSi: `කුකුල් මස්`, cat: `meat`, action: `consumed`, qty: 1, unit: `kg`, valueLkr: 1280 },
        { id: `h3`, date: getColomboTodayStr(-5), nameEn: `Tomatoes`, nameSi: `තක්කාලි`, cat: `veg`, action: `consumed`, qty: 500, unit: `g`, valueLkr: 320 },
        { id: `h4`, date: getColomboTodayStr(-4), nameEn: `Spinach`, nameSi: `නිවිති`, cat: `veg`, action: `wasted`, qty: 1, unit: `bunch`, valueLkr: 130 },
        { id: `h5`, date: getColomboTodayStr(-2), nameEn: `Bananas`, nameSi: `කෙසෙල්`, cat: `fruit`, action: `consumed`, qty: 6, unit: `pcs`, valueLkr: 340 }
      ];

      appState.dismissedChecks = {};
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `ශ්‍රී ලාංකේය මුළුතැන්ගෙයි නියැදිය පූරණය කළා!` : `Loaded sample Sri Lankan kitchen (10 items)!`, true);
    }

    /* ============================================================
       SELECT & SUGGESTION INITIALIZATION
    ============================================================ */
    function populateSelects() {
      const catFilter = document.getElementById(`inv-filter-cat`);
      const locFilter = document.getElementById(`inv-filter-loc`);
      const statFilter = document.getElementById(`inv-filter-status`);
      const foodCat = document.getElementById(`food-category`);
      const foodLoc = document.getElementById(`food-location`);
      const foodUnit = document.getElementById(`food-unit`);
      const shopUnit = document.getElementById(`shop-unit`);
      const shopLoc = document.getElementById(`shop-loc`);

      if (catFilter) {
        const cur = catFilter.value || `all`;
        catFilter.innerHTML = `<option value="all">${t(`catAll`)}</option>` +
          Object.keys(CATEGORY_LABELS).map((k) => `<option value="${k}">${getCategoryLabel(k)}</option>`).join(``);
        catFilter.value = cur;
      }
      if (locFilter) {
        const cur = locFilter.value || `all`;
        locFilter.innerHTML = `<option value="all">${t(`locAll`)}</option>` +
          Object.keys(LOCATION_LABELS).map((k) => `<option value="${k}">${getLocationLabel(k)}</option>`).join(``);
        locFilter.value = cur;
      }
      if (statFilter) {
        const cur = statFilter.value || `all`;
        statFilter.innerHTML = `
          <option value="all">${t(`statAll`)}</option>
          <option value="expiring">${t(`statExpiring`)}</option>
          <option value="expired">${t(`statExpired`)}</option>
          <option value="fresh">${t(`statFresh`)}</option>
        `;
        statFilter.value = cur;
      }
      if (foodCat) {
        const cur = foodCat.value || `veg`;
        foodCat.innerHTML = Object.keys(CATEGORY_LABELS).map((k) => `<option value="${k}">${getCategoryLabel(k)}</option>`).join(``);
        foodCat.value = cur;
      }
      [foodLoc, shopLoc].forEach((sel) => {
        if (!sel) return;
        const cur = sel.value || `fridge`;
        sel.innerHTML = Object.keys(LOCATION_LABELS).map((k) => `<option value="${k}">${getLocationLabel(k)}</option>`).join(``);
        sel.value = cur;
      });
      [foodUnit, shopUnit].forEach((sel) => {
        if (!sel) return;
        const cur = sel.value || `pcs`;
        sel.innerHTML = UNIT_OPTIONS.map((u) => `<option value="${u.id}">${appState.lang === `si` ? u.si : u.en}</option>`).join(``);
        sel.value = cur;
      });

      const dl = document.getElementById(`sl-food-suggestions`);
      if (dl) {
        dl.innerHTML = FOOD_CATALOG.map((c) => `<option value="${appState.lang === `si` ? c.si : c.en}"></option>`).join(``);
      }

      const picker = document.getElementById(`food-art-picker`);
      if (picker && !picker.dataset.built) {
        picker.dataset.built = `true`;
        picker.innerHTML = ART_KEYS.map((k) => `
          <button type="button" class="art-option" data-art="${k}" aria-checked="${k === `carrot` ? `true` : `false`}" onclick="selectArtOption('${k}')" title="${k}">
            ${getFoodSvg(k)}
          </button>
        `).join(``);
      }
    }

    /* ============================================================
       QUICK ADD / EDIT FOOD MODAL
    ============================================================ */
    let selectedArtKey = `carrot`;

    function selectArtOption(artKey) {
      selectedArtKey = artKey;
      document.querySelectorAll(`.art-option`).forEach((btn) => {
        btn.setAttribute(`aria-checked`, btn.dataset.art === artKey ? `true` : `false`);
      });
    }

    function openAddModal(editId) {
      const modal = document.getElementById(`modal-add`);
      const form = document.getElementById(`food-form`);
      const title = document.getElementById(`modal-add-title`);
      const editInput = document.getElementById(`food-edit-id`);
      const hint = document.getElementById(`food-form-hint`);
      if (!modal || !form) return;

      form.reset();
      if (hint) hint.textContent = ``;

      if (editId) {
        const item = appState.items.find((x) => x.id === editId);
        if (!item) return;
        if (editInput) editInput.value = item.id;
        if (title) title.textContent = t(`modalEditTitle`);
        document.getElementById(`food-name`).value = getItemDisplayName(item);
        document.getElementById(`food-qty`).value = item.qty;
        document.getElementById(`food-unit`).value = item.unit;
        document.getElementById(`food-category`).value = item.category;
        document.getElementById(`food-location`).value = item.location;
        document.getElementById(`food-purchase-date`).value = item.purchaseDate;
        document.getElementById(`food-expiry-date`).value = item.expiryDate;
        document.getElementById(`food-label-type`).value = item.labelType || `estimated`;
        document.getElementById(`food-price`).value = item.priceLkr || 0;
        document.getElementById(`food-notes`).value = item.notes || ``;
        selectArtOption(item.art || `bowl`);
      } else {
        if (editInput) editInput.value = ``;
        if (title) title.textContent = t(`modalAddTitle`);
        document.getElementById(`food-purchase-date`).value = getColomboTodayStr(0);
        document.getElementById(`food-expiry-date`).value = getColomboTodayStr(5);
        selectArtOption(`carrot`);
      }

      modal.classList.add(`is-open`);
      const nameEl = document.getElementById(`food-name`);
      if (nameEl) nameEl.focus();
    }

    function closeAddModal() {
      const modal = document.getElementById(`modal-add`);
      if (modal) modal.classList.remove(`is-open`);
    }

    function matchCatalogFood(rawName) {
      const q = (rawName || ``).trim().toLowerCase();
      if (!q) return null;
      return FOOD_CATALOG.find((c) =>
        c.en.toLowerCase().includes(q) ||
        q.includes(c.en.toLowerCase().replace(/s$/, ``)) ||
        c.key.replace(`_`, ` `).includes(q) ||
        (c.si && c.si.includes(q))
      ) || null;
    }

    function onFoodNameSuggest() {
      const nameVal = document.getElementById(`food-name`).value;
      const match = matchCatalogFood(nameVal);
      const hint = document.getElementById(`food-form-hint`);
      if (!match) {
        if (hint) hint.textContent = ``;
        return;
      }
      document.getElementById(`food-category`).value = match.cat;
      document.getElementById(`food-location`).value = match.loc;
      document.getElementById(`food-unit`).value = match.unit;
      document.getElementById(`food-price`).value = match.avgLkr;
      if (match.labelType) document.getElementById(`food-label-type`).value = match.labelType;
      selectArtOption(match.art);
      recomputeSuggestedExpiry(match.days);
      if (hint) {
        hint.textContent = appState.lang === `si`
          ? `ස්වයංක්‍රීය යෝජනාව: ${getLocationLabel(match.loc)} සඳහා දින ${match.days} ක නැවුම්බව ඇස්තමේන්තු කරන ලදී.`
          : `Auto-matched: ${getCategoryLabel(match.cat)} in ${getLocationLabel(match.loc)} (~${match.days} days tropical freshness).`;
      }
    }

    function recomputeSuggestedExpiry(baseDays) {
      const nameVal = document.getElementById(`food-name`).value;
      const match = matchCatalogFood(nameVal);
      const days = baseDays || (match ? match.days : 5);
      const loc = document.getElementById(`food-location`).value;
      let adjusted = days;
      if (loc === `freezer`) adjusted = Math.max(days * 6, 45);
      else if (loc === `pantry` && match && match.loc === `fridge`) adjusted = Math.max(1, Math.floor(days / 2));
      document.getElementById(`food-expiry-date`).value = getColomboTodayStr(adjusted);
    }

    function handlePhotoPreview(event) {
      const file = event.target && event.target.files && event.target.files[0];
      if (!file) return;
      const editId = document.getElementById(`food-edit-id`).value || `pending`;
      sessionPhotoMap[editId] = URL.createObjectURL(file);
    }

    function handleFoodSubmit(event) {
      event.preventDefault();
      const editId = document.getElementById(`food-edit-id`).value;
      const rawName = document.getElementById(`food-name`).value.trim();
      if (!rawName) return;
      const match = matchCatalogFood(rawName);
      const qty = Math.max(0.1, Number(document.getElementById(`food-qty`).value) || 1);
      const unit = document.getElementById(`food-unit`).value;
      const category = document.getElementById(`food-category`).value;
      const location = document.getElementById(`food-location`).value;
      const purchaseDate = document.getElementById(`food-purchase-date`).value;
      const expiryDate = document.getElementById(`food-expiry-date`).value;
      const labelType = document.getElementById(`food-label-type`).value;
      const priceLkr = Math.max(0, Number(document.getElementById(`food-price`).value) || 0);
      const notes = document.getElementById(`food-notes`).value.trim();

      pushUndoSnapshot(editId ? `Edit ` + rawName : `Add ` + rawName);

      if (editId) {
        const idx = appState.items.findIndex((x) => x.id === editId);
        if (idx !== -1) {
          appState.items[idx] = {
            ...appState.items[idx],
            nameEn: appState.lang === `en` ? rawName : appState.items[idx].nameEn,
            nameSi: appState.lang === `si` ? rawName : appState.items[idx].nameSi,
            qty: qty,
            unit: unit,
            category: category,
            location: location,
            purchaseDate: purchaseDate,
            expiryDate: expiryDate,
            labelType: labelType,
            priceLkr: priceLkr,
            notes: notes,
            art: selectedArtKey
          };
        }
      } else {
        const newId = `item_` + Date.now();
        if (sessionPhotoMap.pending) {
          sessionPhotoMap[newId] = sessionPhotoMap.pending;
          delete sessionPhotoMap.pending;
        }
        appState.items.unshift({
          id: newId,
          catalogKey: match ? match.key : rawName.toLowerCase().replace(/\s+/g, `_`),
          nameEn: match ? match.en : rawName,
          nameSi: match ? match.si : rawName,
          qty: qty,
          unit: unit,
          category: category,
          location: location,
          purchaseDate: purchaseDate,
          expiryDate: expiryDate,
          labelType: labelType,
          priceLkr: priceLkr,
          notes: notes,
          art: selectedArtKey
        });
        appState.history.unshift({
          id: `hist_` + Date.now(),
          date: purchaseDate,
          nameEn: match ? match.en : rawName,
          nameSi: match ? match.si : rawName,
          cat: category,
          action: `purchased`,
          qty: qty,
          unit: unit,
          valueLkr: priceLkr
        });
      }

      closeAddModal();
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `${rawName} සුරැකුණා` : `Saved ${rawName}`, true);
    }

    /* ============================================================
       INVENTORY ACTIONS (USED SOME / ALL / ADD MORE / DISCARD)
    ============================================================ */
    function useSomeItem(id) {
      const item = appState.items.find((x) => x.id === id);
      if (!item) return;
      pushUndoSnapshot(`Used some ` + getItemDisplayName(item));
      const step = item.unit === `g` || item.unit === `ml` ? Math.min(item.qty, 100) : Math.min(item.qty, 1);
      const ratio = step / item.qty;
      const usedVal = Math.round((item.priceLkr || 0) * ratio);

      item.qty = Number((item.qty - step).toFixed(2));
      item.priceLkr = Math.max(0, Math.round((item.priceLkr || 0) - usedVal));

      appState.history.unshift({
        id: `hist_` + Date.now(),
        date: getColomboTodayStr(0),
        nameEn: item.nameEn,
        nameSi: item.nameSi,
        cat: item.category,
        action: `consumed`,
        qty: step,
        unit: item.unit,
        valueLkr: usedVal
      });

      if (item.qty <= 0) {
        appState.items = appState.items.filter((x) => x.id !== id);
      }
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `${getItemDisplayName(item)} භාවිතය සටහන් කළා` : `Logged ${step} ${item.unit} used of ${getItemDisplayName(item)}`, true);
    }

    function useAllItem(id) {
      const item = appState.items.find((x) => x.id === id);
      if (!item) return;
      pushUndoSnapshot(`Used all ` + getItemDisplayName(item));
      appState.history.unshift({
        id: `hist_` + Date.now(),
        date: getColomboTodayStr(0),
        nameEn: item.nameEn,
        nameSi: item.nameSi,
        cat: item.category,
        action: `consumed`,
        qty: item.qty,
        unit: item.unit,
        valueLkr: item.priceLkr || 0
      });
      appState.items = appState.items.filter((x) => x.id !== id);
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `${getItemDisplayName(item)} සම්පූර්ණයෙන් භාවිතා කළා!` : `Marked ${getItemDisplayName(item)} fully consumed!`, true);
    }

    function addMoreItem(id) {
      const item = appState.items.find((x) => x.id === id);
      if (!item) return;
      pushUndoSnapshot(`Add more ` + getItemDisplayName(item));
      const step = item.unit === `g` || item.unit === `ml` ? 100 : 1;
      item.qty = Number((item.qty + step).toFixed(2));
      persistState();
      renderAll();
      showToast(`+ ${step} ${getUnitLabel(item.unit)} ${getItemDisplayName(item)}`, true);
    }

    function discardItem(id) {
      const item = appState.items.find((x) => x.id === id);
      if (!item) return;
      pushUndoSnapshot(`Discard ` + getItemDisplayName(item));
      appState.history.unshift({
        id: `hist_` + Date.now(),
        date: getColomboTodayStr(0),
        nameEn: item.nameEn,
        nameSi: item.nameSi,
        cat: item.category,
        action: `wasted`,
        qty: item.qty,
        unit: item.unit,
        valueLkr: item.priceLkr || 0
      });
      appState.items = appState.items.filter((x) => x.id !== id);
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `${getItemDisplayName(item)} ඉවතලන ලදී (නාස්ති වාර්තාවට එක් විය)` : `Discarded ${getItemDisplayName(item)} (logged to Insights)`, true);
    }

    /* ============================================================
       SMART 3-DAY AVAILABILITY CHECK
    ============================================================ */
    function resolveAvailabilityCheck(itemId, decision) {
      if (decision === `used`) {
        useAllItem(itemId);
      } else {
        pushUndoSnapshot(`Confirmed still available`);
        appState.dismissedChecks[itemId] = getColomboTodayStr(0);
        persistState();
        renderAll();
        showToast(appState.lang === `si` ? `තවමත් තොගයේ ඇති බව තහවුරු කළා` : `Confirmed still available in kitchen`, true);
      }
    }

    function renderAvailabilityCheck() {
      const container = document.getElementById(`availability-check-container`);
      if (!container) return;
      if (!appState.settings.enable3DayCheck) {
        container.innerHTML = ``;
        return;
      }
      const today = getColomboTodayStr(0);
      const dueItem = appState.items.find((item) => {
        const age = daysSince(item.purchaseDate);
        return age >= 3 && appState.dismissedChecks[item.id] !== today;
      });
      if (!dueItem) {
        container.innerHTML = ``;
        return;
      }
      const ageDays = daysSince(dueItem.purchaseDate);
      const name = getItemDisplayName(dueItem);
      const promptText = appState.lang === `si`
        ? `ඔබ ${name} එක් කර දින ${ageDays} ක් ගත වී ඇත. ඒවා තවමත් තිබේද?`
        : `It's been ${ageDays} days since you added ${name}. Are they still available?`;

      container.innerHTML = `
        <div class="check-card" role="region" aria-label="Smart availability check">
          <div>
            <span class="label-mono" style="color:var(--on-tertiary-container);">${appState.lang === `si` ? `දින 3 සුහුරු පරීක්ෂාව` : `3-DAY SMART AVAILABILITY CHECK`}</span>
            <p style="font-weight:700;font-size:1.05rem;margin-top:4px;">${promptText}</p>
          </div>
          <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap;">
            <button type="button" class="btn btn-primary btn-sm" onclick="resolveAvailabilityCheck('${dueItem.id}', 'used')">${t(`btnYesUsedThem`)}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="resolveAvailabilityCheck('${dueItem.id}', 'keep')">${t(`btnStillAvailable`)}</button>
          </div>
        </div>
      `;
    }

    /* ============================================================
       VOICE UPDATE (SPEECH-TO-TEXT + EDITABLE PARSER)
    ============================================================ */
    const WORD_NUMS = {
      one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
      half: 0.5, a: 1, an: 1, එක: 1, දෙක: 2, තුන: 3, හතර: 4, පහ: 5
    };

    function parseVoicePhrase(text) {
      const raw = (text || ``).trim();
      const lower = raw.toLowerCase();
      if (!raw) return null;

      let action = `add`;
      if (/\b(used|ate|finished|cooked|consumed|ගත්තා|භාවිතා)\b/.test(lower)) action = `use`;
      else if (/\b(discard|throw|spoiled|rotten|trash|ඉවත|නරක්)\b/.test(lower)) action = `discard`;

      let qty = 1;
      const numMatch = lower.match(/(\d+(?:\.\d+)?)/);
      if (numMatch) {
        qty = Number(numMatch[1]);
      } else {
        Object.keys(WORD_NUMS).forEach((w) => {
          if (new RegExp(`\\b` + w + `\\b`).test(lower)) qty = WORD_NUMS[w];
        });
      }

      let unit = null;
      if (/\bkg\b|kilo/.test(lower)) unit = `kg`;
      else if (/\bg\b|gram/.test(lower)) unit = `g`;
      else if (/\bl\b|litre|liter/.test(lower)) unit = `L`;
      else if (/bunch/.test(lower)) unit = `bunch`;
      else if (/loaf/.test(lower)) unit = `loaf`;
      else if (/pack/.test(lower)) unit = `pack`;

      let priceLkr = null;
      const priceMatch = lower.match(/(?:rs\.?|lkr|rupees?|for)\s*(\d+)/);
      if (priceMatch) priceLkr = Number(priceMatch[1]);

      const catalogMatch = FOOD_CATALOG.find((c) =>
        lower.includes(c.en.toLowerCase()) ||
        lower.includes(c.en.toLowerCase().replace(/s$/, ``)) ||
        lower.includes(c.key.replace(`_`, ` `)) ||
        (c.si && raw.includes(c.si))
      );

      let cleanItem = raw
        .replace(/\b(add|buy|bought|i|used|ate|finished|discard|throw|away|for|rs\.?|lkr|rupees?|kg|grams?|pcs|pieces?)\b/gi, ``)
        .replace(/\d+/g, ``)
        .trim();
      Object.keys(WORD_NUMS).forEach((w) => {
        cleanItem = cleanItem.replace(new RegExp(`\\b` + w + `\\b`, `gi`), ``).trim();
      });

      const itemName = catalogMatch ? (appState.lang === `si` ? catalogMatch.si : catalogMatch.en) : (cleanItem || `Grocery Item`);
      return {
        action: action,
        qty: qty,
        unit: unit || (catalogMatch ? catalogMatch.unit : `pcs`),
        priceLkr: priceLkr !== null ? priceLkr : (catalogMatch ? catalogMatch.avgLkr : 300),
        catalogMatch: catalogMatch,
        itemName: itemName
      };
    }

    function openVoiceModal() {
      const modal = document.getElementById(`modal-voice`);
      if (!modal) return;
      modal.classList.add(`is-open`);
      const tr = document.getElementById(`voice-transcript`);
      if (tr && !tr.value) tr.value = `Add five carrots`;
      previewVoiceCommand();
    }

    function closeVoiceModal() {
      stopSpeechRecognition();
      const modal = document.getElementById(`modal-voice`);
      if (modal) modal.classList.remove(`is-open`);
    }

    function useVoicePreset(phrase) {
      const tr = document.getElementById(`voice-transcript`);
      if (tr) {
        tr.value = phrase;
        previewVoiceCommand();
      }
    }

    function previewVoiceCommand() {
      const tr = document.getElementById(`voice-transcript`);
      const preview = document.getElementById(`voice-preview-text`);
      const applyBtn = document.getElementById(`voice-apply-btn`);
      if (!tr || !preview || !applyBtn) return;

      const parsed = parseVoicePhrase(tr.value);
      if (!parsed) {
        preview.textContent = appState.lang === `si` ? `විධානයක් ඇතුළත් කරන්න` : `Enter or speak a command above.`;
        applyBtn.disabled = true;
        return;
      }
      applyBtn.disabled = false;
      const actionWords = {
        add: appState.lang === `si` ? `එක් කරන්න` : `ADD`,
        use: appState.lang === `si` ? `භාවිතා කළා` : `USE`,
        discard: appState.lang === `si` ? `ඉවතලන්න` : `DISCARD`
      };
      preview.textContent = `${actionWords[parsed.action]} • ${parsed.qty} ${parsed.unit} • ${parsed.itemName}` +
        (parsed.action === `add` ? ` (${formatLkr(parsed.priceLkr)})` : ``);
    }

    function applyVoiceCommand() {
      const tr = document.getElementById(`voice-transcript`);
      if (!tr) return;
      const parsed = parseVoicePhrase(tr.value);
      if (!parsed) return;

      pushUndoSnapshot(`Voice: ` + tr.value);
      const existing = appState.items.find((x) =>
        (parsed.catalogMatch && x.catalogKey === parsed.catalogMatch.key) ||
        x.nameEn.toLowerCase().includes(parsed.itemName.toLowerCase()) ||
        (x.nameSi && x.nameSi.includes(parsed.itemName))
      );

      if (parsed.action === `add`) {
        if (existing) {
          existing.qty = Number((existing.qty + parsed.qty).toFixed(2));
          existing.priceLkr = (existing.priceLkr || 0) + parsed.priceLkr;
        } else {
          const cat = parsed.catalogMatch;
          appState.items.unshift({
            id: `v_` + Date.now(),
            catalogKey: cat ? cat.key : parsed.itemName.toLowerCase().replace(/\s+/g, `_`),
            nameEn: cat ? cat.en : parsed.itemName,
            nameSi: cat ? cat.si : parsed.itemName,
            qty: parsed.qty,
            unit: parsed.unit,
            category: cat ? cat.cat : `veg`,
            location: cat ? cat.loc : `fridge`,
            purchaseDate: getColomboTodayStr(0),
            expiryDate: getColomboTodayStr(cat ? cat.days : 5),
            labelType: cat && cat.labelType ? cat.labelType : `estimated`,
            priceLkr: parsed.priceLkr,
            notes: `Added via Voice Update`,
            art: cat ? cat.art : `bowl`
          });
        }
        appState.history.unshift({
          id: `vh_` + Date.now(),
          date: getColomboTodayStr(0),
          nameEn: parsed.catalogMatch ? parsed.catalogMatch.en : parsed.itemName,
          nameSi: parsed.catalogMatch ? parsed.catalogMatch.si : parsed.itemName,
          cat: parsed.catalogMatch ? parsed.catalogMatch.cat : `veg`,
          action: `purchased`,
          qty: parsed.qty,
          unit: parsed.unit,
          valueLkr: parsed.priceLkr
        });
      } else if (parsed.action === `use` && existing) {
        const deduct = Math.min(existing.qty, parsed.qty);
        const val = Math.round((existing.priceLkr || 0) * (deduct / existing.qty));
        existing.qty = Number((existing.qty - deduct).toFixed(2));
        existing.priceLkr = Math.max(0, (existing.priceLkr || 0) - val);
        appState.history.unshift({
          id: `vh_` + Date.now(),
          date: getColomboTodayStr(0),
          nameEn: existing.nameEn,
          nameSi: existing.nameSi,
          cat: existing.category,
          action: `consumed`,
          qty: deduct,
          unit: existing.unit,
          valueLkr: val
        });
        if (existing.qty <= 0) appState.items = appState.items.filter((x) => x.id !== existing.id);
      } else if (parsed.action === `discard` && existing) {
        appState.history.unshift({
          id: `vh_` + Date.now(),
          date: getColomboTodayStr(0),
          nameEn: existing.nameEn,
          nameSi: existing.nameSi,
          cat: existing.category,
          action: `wasted`,
          qty: existing.qty,
          unit: existing.unit,
          valueLkr: existing.priceLkr || 0
        });
        appState.items = appState.items.filter((x) => x.id !== existing.id);
      } else if ((parsed.action === `use` || parsed.action === `discard`) && !existing) {
        undoStack.pop();
        updateUndoButtons();
        showToast(
          appState.lang === `si`
            ? `"${parsed.itemName}" ඔබගේ තොගයේ හමු නොවීය.`
            : `No "${parsed.itemName}" found in My Food to update.`,
          false
        );
        return;
      }

      closeVoiceModal();
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `හඬ විධානය යෙදුවා!` : `Applied voice update!`, true);
    }

    function toggleSpeechRecognition() {
      if (isListening) {
        stopSpeechRecognition();
        return;
      }
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const statusEl = document.getElementById(`voice-status`);
      if (!SR) {
        if (statusEl) {
          statusEl.textContent = appState.lang === `si`
            ? `මෙම බ්‍රවුසරයේ සජීවී මයික්‍රොෆෝන් හඳුනාගැනීම නැත — පහත වාක්‍ය භාවිතා කරන්න.`
            : `Live microphone SpeechRecognition unavailable in this sandbox — edit or tap a phrase below.`;
        }
        return;
      }
      speechRec = new SR();
      speechRec.lang = appState.lang === `si` ? `si-LK` : `en-US`;
      speechRec.interimResults = true;
      isListening = true;
      updateMicUi();
      speechRec.onresult = (e) => {
        const transcript = Array.from(e.results).map((r) => r[0].transcript).join(` `);
        const tr = document.getElementById(`voice-transcript`);
        if (tr) {
          tr.value = transcript;
          previewVoiceCommand();
        }
      };
      speechRec.onerror = () => {
        if (statusEl) statusEl.textContent = `Mic permission unavailable — use editable text box below.`;
        stopSpeechRecognition();
      };
      speechRec.onend = () => stopSpeechRecognition();
      speechRec.start();
    }

    function stopSpeechRecognition() {
      isListening = false;
      if (speechRec) {
        try { speechRec.stop(); } catch (e) {}
      }
      updateMicUi();
    }

    function updateMicUi() {
      const btn = document.getElementById(`voice-mic-btn`);
      const lbl = document.getElementById(`voice-mic-label`);
      if (btn) btn.classList.toggle(`mic-btn-active`, isListening);
      if (lbl) lbl.textContent = isListening ? t(`btnStopListening`) : t(`btnStartListening`);
    }

    /* ============================================================
       RENDERERS: DASHBOARD, INVENTORY, USE FIRST
    ============================================================ */
    function renderAll() {
      updateColomboGreeting();
      updateNavBadges();
      renderFifoStrip();
      renderAvailabilityCheck();
      renderDashboard();
      renderInventory();
      renderUseFirst();
      renderRecipes();
      renderShoppingList();
      renderTips();
      renderInsights();
      renderSettings();
      if (window.lucide && typeof window.lucide.createIcons === `function`) {
        window.lucide.createIcons();
      }
    }

    function updateNavBadges() {
      const invBadge = document.getElementById(`badge-inventory`);
      const ufBadge = document.getElementById(`badge-use-first`);
      const shBadge = document.getElementById(`badge-shopping`);
      if (invBadge) invBadge.textContent = String(appState.items.length);
      const urgentCount = appState.items.filter((x) => {
        const st = getItemStatus(x);
        return st.code === `expiring`;
      }).length;
      if (ufBadge) ufBadge.textContent = String(urgentCount);
      if (shBadge) shBadge.textContent = String(appState.shoppingList.length);
    }

    function renderFifoStrip() {
      const strip = document.getElementById(`fifo-strip-cells`);
      if (!strip) return;
      const buckets = [
        { label: appState.lang === `si` ? `කල් පසු` : `EXP`, count: 0, cls: `is-danger` },
        { label: `D0`, count: 0, cls: `is-danger` },
        { label: `D1`, count: 0, cls: `is-prep` },
        { label: `D2`, count: 0, cls: `is-prep` },
        { label: `D3`, count: 0, cls: `is-prep` },
        { label: `4-6D`, count: 0, cls: `` },
        { label: `7D+`, count: 0, cls: `is-peak` }
      ];
      appState.items.forEach((item) => {
        const d = daysBetweenToday(item.expiryDate);
        if (d < 0) buckets[0].count++;
        else if (d === 0) buckets[1].count++;
        else if (d === 1) buckets[2].count++;
        else if (d === 2) buckets[3].count++;
        else if (d === 3) buckets[4].count++;
        else if (d <= 6) buckets[5].count++;
        else buckets[6].count++;
      });
      strip.innerHTML = buckets.map((b) => `
        <span class="season-cell ${b.count > 0 ? b.cls : ``}" title="${b.label}: ${b.count}">
          ${b.label}: ${b.count}
        </span>
      `).join(``);
    }

    function renderDashboard() {
      const kpiEl = document.getElementById(`dashboard-kpis`);
      const alertsEl = document.getElementById(`dash-alerts-list`);
      const recEl = document.getElementById(`dash-recipes-preview`);
      const demoBtn = document.getElementById(`hero-demo-btn`);
      if (demoBtn) demoBtn.style.display = appState.items.length === 0 ? `inline-flex` : `none`;

      const totalItems = appState.items.length;
      const totalVal = appState.items.reduce((s, x) => s + (x.priceLkr || 0), 0);
      const expiringItems = appState.items.filter((x) => getItemStatus(x).code === `expiring`);
      const expiredUnsafe = appState.items.filter((x) => getItemStatus(x).code === `expired`);

      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="card">
            <span class="label-mono">${appState.lang === `si` ? `සක්‍රීය ආහාර` : `ACTIVE GROCERIES`}</span>
            <p class="key-figure" style="margin:6px 0;">${totalItems}</p>
            <span style="font-size:0.84rem;color:var(--on-surface-variant);">${formatLkr(totalVal)}</span>
          </div>
          <div class="card is-leaf-highlight">
            <span class="label-mono" style="color:var(--on-primary-container);">${appState.lang === `si` ? `ඉක්මනින් අවසන් වන` : `USE FIRST (SOON)`}</span>
            <p class="key-figure" style="margin:6px 0;">${expiringItems.length}</p>
            <span style="font-size:0.84rem;">${appState.lang === `si` ? `ඉදිරි දින ${appState.settings.alertDays} තුළ` : `Within ${appState.settings.alertDays} days`}</span>
          </div>
          <div class="card">
            <span class="label-mono">${appState.lang === `si` ? `ආරක්ෂිත අනතුරු` : `SAFETY FLAGGED`}</span>
            <p class="key-figure" style="margin:6px 0;color:${expiredUnsafe.length > 0 ? `var(--error)` : `var(--positive)`};">${expiredUnsafe.length}</p>
            <span style="font-size:0.84rem;color:var(--on-surface-variant);">${appState.lang === `si` ? `කල් ඉකුත් වූ` : `Past date / check`}</span>
          </div>
          <div class="card">
            <span class="label-mono">${appState.lang === `si` ? `සාප්පු ලැයිස්තුව` : `SHOPPING LIST`}</span>
            <p class="key-figure" style="margin:6px 0;">${appState.shoppingList.length}</p>
            <span style="font-size:0.84rem;color:var(--on-surface-variant);">${appState.lang === `si` ? `මිලදී ගැනීමට` : `Items queued`}</span>
          </div>
        `;
      }

      if (alertsEl) {
        const sorted = [...appState.items]
          .sort((a, b) => daysBetweenToday(a.expiryDate) - daysBetweenToday(b.expiryDate))
          .slice(0, 4);
        if (sorted.length === 0) {
          alertsEl.innerHTML = `<p style="color:var(--on-surface-variant);">${t(`emptyKitchenDesc`)}</p>`;
        } else {
          alertsEl.innerHTML = sorted.map((item) => {
            const st = getItemStatus(item);
            return `
              <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-sm);padding:10px 12px;background:var(--background);border-radius:var(--rounded);flex-wrap:wrap;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div class="food-thumb" style="width:44px;height:44px;">${getFoodSvg(item.art)}</div>
                  <div>
                    <strong style="display:block;">${getItemDisplayName(item)}</strong>
                    <span style="font-size:0.82rem;color:var(--on-surface-variant);">${item.qty} ${getUnitLabel(item.unit)} • ${getLocationLabel(item.location)}</span>
                  </div>
                </div>
                <span class="badge ${st.badgeClass}">${st.label}</span>
              </div>
            `;
          }).join(``);
        }
      }

      if (recEl) {
        const ranked = getRankedRecipes().slice(0, 3);
        recEl.innerHTML = ranked.map((r) => `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-sm);padding:10px 12px;background:var(--background);border-radius:var(--rounded);flex-wrap:wrap;">
            <div>
              <strong style="display:block;">${appState.lang === `si` ? r.titleSi : r.titleEn}</strong>
              <span style="font-size:0.82rem;color:var(--on-surface-variant);">${r.haveCount}/${r.ingredients.length} ${appState.lang === `si` ? `අමුද්‍රව්‍ය ඇත` : `ingredients ready`} ${r.usesExpiring ? `• ★ Use First` : ``}</span>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" onclick="switchView('recipes')">${t(`cookWithThis`)}</button>
          </div>
        `).join(``);
      }
    }

    function renderInventory() {
      const grid = document.getElementById(`inventory-grid`);
      if (!grid) return;

      const search = (document.getElementById(`inv-search`) ? document.getElementById(`inv-search`).value : ``).trim().toLowerCase();
      const cat = document.getElementById(`inv-filter-cat`) ? document.getElementById(`inv-filter-cat`).value : `all`;
      const loc = document.getElementById(`inv-filter-loc`) ? document.getElementById(`inv-filter-loc`).value : `all`;
      const stat = document.getElementById(`inv-filter-status`) ? document.getElementById(`inv-filter-status`).value : `all`;

      const filtered = appState.items.filter((item) => {
        const st = getItemStatus(item);
        const matchSearch = !search ||
          (item.nameEn || ``).toLowerCase().includes(search) ||
          (item.nameSi || ``).toLowerCase().includes(search) ||
          (item.notes || ``).toLowerCase().includes(search);
        const matchCat = cat === `all` || item.category === cat;
        const matchLoc = loc === `all` || item.location === loc;
        const matchStat = stat === `all` || st.code === stat;
        return matchSearch && matchCat && matchLoc && matchStat;
      });

      if (appState.items.length === 0) {
        grid.innerHTML = `
          <div class="empty-state" style="grid-column:1 / -1;">
            <h3>${t(`emptyKitchenTitle`)}</h3>
            <p>${t(`emptyKitchenDesc`)}</p>
            <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap;justify-content:center;">
              <button type="button" class="btn btn-primary" onclick="openAddModal()">${t(`btnQuickAddFood`)}</button>
              <button type="button" class="btn btn-ochre" onclick="loadSampleKitchen()">${t(`btnLoadSample`)}</button>
            </div>
          </div>
        `;
        return;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1 / -1;"><p>${appState.lang === `si` ? `ගැලපෙන ආහාර හමු නොවීය.` : `No matching groceries found for your current filters.`}</p></div>`;
        return;
      }

      grid.innerHTML = filtered.map((item) => renderFoodCardHtml(item, false)).join(``);
    }

    function renderFoodCardHtml(item, isUseFirstMode) {
      const st = getItemStatus(item);
      const photoUrl = sessionPhotoMap[item.id];
      const visual = photoUrl
        ? `<img src="${photoUrl}" alt="${getItemDisplayName(item)}">`
        : getFoodSvg(item.art);

      return `
        <article class="food-card">
          <div class="food-card-head">
            <div class="food-thumb">${visual}</div>
            <div style="flex:1;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;flex-wrap:wrap;">
                <h3>${getItemDisplayName(item)}</h3>
                <span class="badge ${st.badgeClass}">${st.label}</span>
              </div>
              <p style="font-size:0.84rem;color:var(--on-surface-variant);margin-top:2px;">
                ${getCategoryLabel(item.category)} • ${getLocationLabel(item.location)}
              </p>
            </div>
          </div>

          <div class="food-meta-grid">
            <div><span class="label-mono">${appState.lang === `si` ? `ප්‍රමාණය` : `QTY`}</span><br><strong>${item.qty} ${getUnitLabel(item.unit)}</strong></div>
            <div><span class="label-mono">${appState.lang === `si` ? `වටිනාකම` : `VALUE`}</span><br><strong>${formatLkr(item.priceLkr)}</strong></div>
            <div><span class="label-mono">${appState.lang === `si` ? `ගත් දිනය` : `ADDED`}</span><br><span>${item.purchaseDate}</span></div>
            <div><span class="label-mono">${appState.lang === `si` ? `දිනය` : `DATE`}</span><br><span>${item.expiryDate}</span></div>
          </div>

          ${item.notes ? `<p style="font-size:0.84rem;color:var(--on-surface-variant);">${item.notes}</p>` : ``}

          <div class="food-actions">
            ${isUseFirstMode && !st.isUnsafe ? `
              <button type="button" class="btn btn-primary btn-sm" onclick="jumpToRecipeForIngredient('${item.catalogKey}')">${t(`cookWithThis`)}</button>
            ` : ``}
            <button type="button" class="btn btn-secondary btn-sm" onclick="useSomeItem('${item.id}')">${t(`actUsedSome`)}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="useAllItem('${item.id}')">${t(`actUsedAll`)}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="addMoreItem('${item.id}')">${t(`actAddMore`)}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="openAddModal('${item.id}')">${t(`actEdit`)}</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="discardItem('${item.id}')">${t(`actDiscard`)}</button>
          </div>
        </article>
      `;
    }

    function renderUseFirst() {
      const grid = document.getElementById(`use-first-grid`);
      const safetyBox = document.getElementById(`use-first-safety-box`);
      if (!grid || !safetyBox) return;

      const unsafeItems = appState.items.filter((x) => getItemStatus(x).isUnsafe);
      if (unsafeItems.length > 0) {
        safetyBox.innerHTML = `
          <div class="card" style="background:var(--error-container);color:var(--on-error-container);">
            <h3 style="color:var(--on-error-container);margin-bottom:4px;">${t(`safetyExclusionTitle`)}</h3>
            <p>${t(`safetyExclusionBody`, { n: unsafeItems.length })}</p>
            <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap;margin-top:var(--space-sm);">
              ${unsafeItems.map((u) => `
                <button type="button" class="btn btn-danger btn-sm" onclick="discardItem('${u.id}')">
                  ${t(`actDiscard`)}: ${getItemDisplayName(u)}
                </button>
              `).join(``)}
            </div>
          </div>
        `;
      } else {
        safetyBox.innerHTML = ``;
      }

      const priorityItems = appState.items
        .filter((x) => !getItemStatus(x).isUnsafe && daysBetweenToday(x.expiryDate) <= 7)
        .sort((a, b) => daysBetweenToday(a.expiryDate) - daysBetweenToday(b.expiryDate));

      if (priorityItems.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1 / -1;"><p>${appState.lang === `si` ? `ඉදිරි දින 7 තුළ කල් ඉකුත් වන ආහාර නොමැත.` : `No safe items expiring within the next 7 days.`}</p></div>`;
        return;
      }
      grid.innerHTML = priorityItems.map((item) => renderFoodCardHtml(item, true)).join(``);
    }

    /* ============================================================
       SMART SRI LANKAN RECIPES
    ============================================================ */
    let recipeIngredientFilter = null;

    function setRecipeFilter(mode) {
      appState.recipeFilter = mode;
      recipeIngredientFilter = null;
      const btnAll = document.getElementById(`rec-filter-all`);
      const btnPri = document.getElementById(`rec-filter-priority`);
      if (btnAll) btnAll.setAttribute(`aria-pressed`, mode === `all` ? `true` : `false`);
      if (btnPri) btnPri.setAttribute(`aria-pressed`, mode === `priority` ? `true` : `false`);
      renderRecipes();
    }

    function jumpToRecipeForIngredient(catalogKey) {
      recipeIngredientFilter = catalogKey;
      switchView(`recipes`);
      renderRecipes();
    }

    function getSafeAvailableKeys() {
      const safeMap = {};
      appState.items.forEach((item) => {
        const st = getItemStatus(item);
        if (!st.isUnsafe) {
          safeMap[item.catalogKey] = {
            item: item,
            expiringSoon: st.code === `expiring` || st.daysLeft <= 3
          };
        }
      });
      return safeMap;
    }

    function getRankedRecipes() {
      const safeMap = getSafeAvailableKeys();
      return SRI_LANKAN_RECIPES.map((r) => {
        const have = [];
        const missing = [];
        let usesExpiring = false;
        r.ingredients.forEach((ingKey) => {
          if (safeMap[ingKey]) {
            have.push(ingKey);
            if (safeMap[ingKey].expiringSoon) usesExpiring = true;
          } else {
            missing.push(ingKey);
          }
        });
        return {
          ...r,
          have: have,
          missing: missing,
          haveCount: have.length,
          usesExpiring: usesExpiring,
          score: (usesExpiring ? 10 : 0) + (have.length / r.ingredients.length) * 10
        };
      }).sort((a, b) => b.score - a.score);
    }

    function getIngredientDisplayName(key) {
      const c = FOOD_CATALOG.find((x) => x.key === key);
      if (!c) return key;
      return appState.lang === `si` ? c.si : c.en;
    }

    function addMissingIngredientsToShop(recipeId) {
      const ranked = getRankedRecipes().find((r) => r.id === recipeId);
      if (!ranked || ranked.missing.length === 0) return;
      pushUndoSnapshot(`Add recipe ingredients`);
      ranked.missing.forEach((ingKey) => {
        const cat = FOOD_CATALOG.find((c) => c.key === ingKey);
        if (!cat) return;
        const already = appState.shoppingList.find((s) => s.catalogKey === ingKey);
        if (!already) {
          appState.shoppingList.push({
            id: `sh_` + Date.now() + `_` + ingKey,
            catalogKey: ingKey,
            nameEn: cat.en,
            nameSi: cat.si,
            qty: 1,
            unit: cat.unit,
            estPriceLkr: cat.avgLkr,
            category: cat.cat,
            location: cat.loc,
            checked: false
          });
        }
      });
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `අඩු අමුද්‍රව්‍ය සාප්පු ලැයිස්තුවට එක් කළා` : `Added ${ranked.missing.length} missing ingredient(s) to Shopping List`, true);
    }

    function markRecipeCooked(recipeId) {
      const recipe = SRI_LANKAN_RECIPES.find((r) => r.id === recipeId);
      if (!recipe) return;
      const safeMap = getSafeAvailableKeys();
      let deducted = 0;
      pushUndoSnapshot(`Cooked ` + recipe.titleEn);
      recipe.ingredients.forEach((ingKey) => {
        if (safeMap[ingKey]) {
          const item = safeMap[ingKey].item;
          const step = item.unit === `g` || item.unit === `ml` ? Math.min(item.qty, 150) : Math.min(item.qty, 1);
          const val = Math.round((item.priceLkr || 0) * (step / item.qty));
          item.qty = Number((item.qty - step).toFixed(2));
          item.priceLkr = Math.max(0, (item.priceLkr || 0) - val);
          appState.history.unshift({
            id: `rc_` + Date.now() + `_` + ingKey,
            date: getColomboTodayStr(0),
            nameEn: item.nameEn,
            nameSi: item.nameSi,
            cat: item.category,
            action: `consumed`,
            qty: step,
            unit: item.unit,
            valueLkr: val
          });
          if (item.qty <= 0) appState.items = appState.items.filter((x) => x.id !== item.id);
          deducted++;
        }
      });
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `වට්ටෝරුව සඳහා අමුද්‍රව්‍ය ${deducted} ක් තොගයෙන් අඩු කළා!` : `Cooked! Deducted ${deducted} ingredient(s) from My Food`, true);
    }

    function renderRecipes() {
      const grid = document.getElementById(`recipes-grid`);
      if (!grid) return;

      let list = getRankedRecipes();
      if (appState.recipeFilter === `priority`) {
        list = list.filter((r) => r.usesExpiring);
      }
      if (recipeIngredientFilter) {
        const filtered = list.filter((r) => r.ingredients.includes(recipeIngredientFilter));
        if (filtered.length > 0) list = filtered;
      }

      if (list.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1 / -1;"><p>${appState.lang === `si` ? `වට්ටෝරු හමු නොවීය.` : `No recipes match the current filter.`}</p></div>`;
        return;
      }

      grid.innerHTML = list.map((r) => {
        const pct = Math.round((r.haveCount / r.ingredients.length) * 100);
        return `
          <article class="card ${r.usesExpiring ? `is-leaf-highlight` : ``}" style="display:flex;flex-direction:column;gap:var(--space-md);">
            <div style="display:flex;gap:var(--space-md);align-items:center;">
              <div class="food-thumb">${getFoodSvg(r.art)}</div>
              <div style="flex:1;">
                <span class="label-mono">${r.timeMin} MIN • ${pct}% MATCH ${r.usesExpiring ? `• USE FIRST` : ``}</span>
                <h3 style="margin-top:2px;">${appState.lang === `si` ? r.titleSi : r.titleEn}</h3>
              </div>
            </div>

            <p style="font-size:0.9rem;">${appState.lang === `si` ? r.stepsSi : r.stepsEn}</p>

            <div style="display:flex;flex-direction:column;gap:6px;font-size:0.85rem;">
              <div>
                <strong>${t(`inStockLabel`)}</strong>
                ${r.have.length > 0 ? r.have.map((k) => `<span class="badge badge-fresh" style="margin:2px;">${getIngredientDisplayName(k)}</span>`).join(``) : `—`}
              </div>
              <div>
                ${r.missing.length > 0
                  ? `<strong>${t(`missingLabel`)}</strong> ` + r.missing.map((k) => `<span class="badge badge-warn" style="margin:2px;">${getIngredientDisplayName(k)}</span>`).join(``)
                  : `<span class="badge badge-fresh">${t(`allIngredientsReady`)}</span>`}
              </div>
            </div>

            <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap;margin-top:auto;">
              ${r.haveCount > 0 ? `<button type="button" class="btn btn-primary btn-sm" onclick="markRecipeCooked('${r.id}')">${t(`cookedThis`)}</button>` : ``}
              ${r.missing.length > 0 ? `<button type="button" class="btn btn-secondary btn-sm" onclick="addMissingIngredientsToShop('${r.id}')">${t(`addMissingToShop`)}</button>` : ``}
            </div>
          </article>
        `;
      }).join(``);
    }

    /* ============================================================
       SMART SHOPPING LIST (DUPLICATE & LOW STOCK DETECTION)
    ============================================================ */
    function checkShopDuplicateWarning() {
      const input = document.getElementById(`shop-name`);
      const warn = document.getElementById(`shop-dup-warning`);
      if (!input || !warn) return;
      const q = input.value.trim().toLowerCase();
      if (!q) { warn.textContent = ``; return; }

      const dup = appState.items.find((x) =>
        (x.nameEn || ``).toLowerCase().includes(q) ||
        (x.nameSi && x.nameSi.includes(q))
      );
      if (dup) {
        warn.textContent = appState.lang === `si`
          ? `අවධානයයි: ${getItemDisplayName(dup)} (${dup.qty} ${getUnitLabel(dup.unit)}) දැනටමත් ඔබගේ ${getLocationLabel(dup.location)} තුළ ඇත!`
          : `Duplicate warning: You already have ${dup.qty} ${getUnitLabel(dup.unit)} of ${getItemDisplayName(dup)} in your ${getLocationLabel(dup.location)}!`;
      } else {
        warn.textContent = ``;
      }
    }

    function handleShopAdd(event) {
      event.preventDefault();
      const name = document.getElementById(`shop-name`).value.trim();
      if (!name) return;
      const qty = Math.max(0.1, Number(document.getElementById(`shop-qty`).value) || 1);
      const unit = document.getElementById(`shop-unit`).value;
      const estPriceLkr = Math.max(0, Number(document.getElementById(`shop-price`).value) || 0);
      const location = document.getElementById(`shop-loc`).value;
      const match = matchCatalogFood(name);

      pushUndoSnapshot(`Add to shopping list`);
      appState.shoppingList.push({
        id: `sh_` + Date.now(),
        catalogKey: match ? match.key : name.toLowerCase().replace(/\s+/g, `_`),
        nameEn: match ? match.en : name,
        nameSi: match ? match.si : name,
        qty: qty,
        unit: unit,
        estPriceLkr: estPriceLkr,
        category: match ? match.cat : `veg`,
        location: location,
        checked: false
      });

      document.getElementById(`shop-add-form`).reset();
      document.getElementById(`shop-dup-warning`).textContent = ``;
      persistState();
      renderAll();
    }

    function toggleShopCheck(id) {
      const item = appState.shoppingList.find((x) => x.id === id);
      if (!item) return;
      item.checked = !item.checked;
      persistState();
      renderShoppingList();
    }

    function removeShopItem(id) {
      pushUndoSnapshot(`Remove shopping item`);
      appState.shoppingList = appState.shoppingList.filter((x) => x.id !== id);
      persistState();
      renderAll();
    }

    function quickAddLowStockToShop(nameEn, nameSi, cat, unit, avgLkr, loc, catalogKey) {
      pushUndoSnapshot(`Restock ` + nameEn);
      appState.shoppingList.push({
        id: `sh_` + Date.now(),
        catalogKey: catalogKey,
        nameEn: nameEn,
        nameSi: nameSi,
        qty: 1,
        unit: unit,
        estPriceLkr: avgLkr,
        category: cat,
        location: loc,
        checked: false
      });
      persistState();
      renderAll();
    }

    function transferPurchasedToInventory() {
      const checkedItems = appState.shoppingList.filter((x) => x.checked);
      if (checkedItems.length === 0) return;

      pushUndoSnapshot(`Transfer purchased groceries`);
      const today = getColomboTodayStr(0);

      checkedItems.forEach((s) => {
        const match = FOOD_CATALOG.find((c) => c.key === s.catalogKey);
        const days = match ? match.days : 7;
        appState.items.unshift({
          id: `item_` + Date.now() + `_` + Math.random().toString(36).slice(2, 6),
          catalogKey: s.catalogKey || s.nameEn.toLowerCase().replace(/\s+/g, `_`),
          nameEn: s.nameEn,
          nameSi: s.nameSi,
          qty: s.qty,
          unit: s.unit,
          category: s.category || `veg`,
          location: s.location || `fridge`,
          purchaseDate: today,
          expiryDate: getColomboTodayStr(days),
          labelType: match && match.labelType ? match.labelType : `estimated`,
          priceLkr: s.estPriceLkr || 0,
          notes: `Transferred from Shopping List`,
          art: match ? match.art : `bowl`
        });
        appState.history.unshift({
          id: `shh_` + Date.now() + `_` + Math.random().toString(36).slice(2, 5),
          date: today,
          nameEn: s.nameEn,
          nameSi: s.nameSi,
          cat: s.category || `veg`,
          action: `purchased`,
          qty: s.qty,
          unit: s.unit,
          valueLkr: s.estPriceLkr || 0
        });
      });

      appState.shoppingList = appState.shoppingList.filter((x) => !x.checked);
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `මිලදී ගත් දෑ ආහාර තොගයට එක් කළා!` : `Transferred ${checkedItems.length} item(s) to My Food!`, true);
    }

    function renderShoppingList() {
      const container = document.getElementById(`shopping-list-container`);
      const alertsBox = document.getElementById(`shop-alerts-box`);
      const summaryEl = document.getElementById(`shop-summary-text`);
      const transferBtn = document.getElementById(`transfer-purchased-btn`);
      if (!container || !alertsBox || !summaryEl || !transferBtn) return;

      const lowStockItems = appState.items.filter((x) => (x.unit === `pcs` && x.qty <= 1) || ((x.unit === `g` || x.unit === `ml`) && x.qty <= 150));
      const recentlyUsed = appState.history
        .filter((h) => h.action === `consumed`)
        .slice(0, 4)
        .filter((h) => !appState.items.some((i) => i.nameEn === h.nameEn) && !appState.shoppingList.some((s) => s.nameEn === h.nameEn));

      let alertsHtml = ``;
      if (lowStockItems.length > 0 || recentlyUsed.length > 0) {
        const chips = [
          ...lowStockItems.map((i) => `<span class="badge badge-warn">${getItemDisplayName(i)} (${i.qty} ${getUnitLabel(i.unit)})</span>`),
          ...recentlyUsed.map((h) => {
            const cat = FOOD_CATALOG.find((c) => c.en === h.nameEn);
            const key = cat ? cat.key : h.nameEn.toLowerCase();
            return `<button type="button" class="chip-btn" onclick="quickAddLowStockToShop('${h.nameEn}', '${h.nameSi || h.nameEn}', '${h.cat}', '${h.unit}', ${h.valueLkr || 250}, 'fridge', '${key}')">+ ${appState.lang === `si` ? (h.nameSi || h.nameEn) : h.nameEn}</button>`;
          })
        ].join(` `);
        alertsHtml = `
          <div class="card" style="background:var(--tertiary-container);color:var(--on-tertiary-container);">
            <strong>${t(`lowStockAlert`)}</strong>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">${chips}</div>
          </div>
        `;
      }
      alertsBox.innerHTML = alertsHtml;

      const totalEst = appState.shoppingList.reduce((s, x) => s + (x.estPriceLkr || 0), 0);
      const checkedCount = appState.shoppingList.filter((x) => x.checked).length;
      summaryEl.textContent = `${appState.shoppingList.length} ITEMS • EST. ${formatLkr(totalEst)} • ${checkedCount} CHECKED`;
      transferBtn.disabled = checkedCount === 0;

      if (appState.shoppingList.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>${appState.lang === `si` ? `ඔබගේ සාප්පු ලැයිස්තුව හිස්ය.` : `Your shopping list is empty. Add items above or import missing recipe ingredients.`}</p></div>`;
        return;
      }

      container.innerHTML = appState.shoppingList.map((s) => {
        const inStock = appState.items.find((i) => i.nameEn.toLowerCase() === (s.nameEn || ``).toLowerCase());
        return `
          <div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-md);padding:var(--space-md) var(--space-lg);flex-wrap:wrap;">
            <label style="display:flex;align-items:center;gap:12px;cursor:pointer;flex:1;">
              <input type="checkbox" ${s.checked ? `checked` : ``} onchange="toggleShopCheck('${s.id}')" style="width:20px;height:20px;accent-color:var(--primary);">
              <span style="text-decoration:${s.checked ? `line-through` : `none`};font-weight:700;">
                ${appState.lang === `si` && s.nameSi ? s.nameSi : s.nameEn}
              </span>
              <span style="font-size:0.86rem;color:var(--on-surface-variant);">(${s.qty} ${getUnitLabel(s.unit)} • ${formatLkr(s.estPriceLkr)} • ${getLocationLabel(s.location)})</span>
              ${inStock ? `<span class="badge badge-warn">${appState.lang === `si` ? `දැනටමත් ඇත` : `In Stock: ${inStock.qty} ${inStock.unit}`}</span>` : ``}
            </label>
            <button type="button" class="btn btn-danger btn-sm" onclick="removeShopItem('${s.id}')" aria-label="Remove">
              <i data-lucide="trash-2" aria-hidden="true"></i>
            </button>
          </div>
        `;
      }).join(``);
    }

    /* ============================================================
       CLIMATE STORAGE TIPS
    ============================================================ */
    function setTipsFilter(cat) {
      appState.tipsFilter = cat;
      renderTips();
    }

    function renderTips() {
      const decoder = document.getElementById(`label-decoder-cards`);
      const filterRow = document.getElementById(`tips-filter-row`);
      const grid = document.getElementById(`tips-cards-grid`);
      const tbody = document.getElementById(`fda-table-body`);

      if (decoder) {
        decoder.innerHTML = LABEL_DECODER_CARDS.map((c) => `
          <div style="background:var(--background);border-radius:var(--rounded);padding:var(--space-md);color:var(--on-surface);">
            <span class="label-mono" style="color:var(--tertiary);">${appState.lang === `si` ? c.whoSi : c.whoEn}</span>
            <h4 style="margin:4px 0 6px;">${appState.lang === `si` ? c.titleSi : c.titleEn}</h4>
            <p style="font-size:0.88rem;color:var(--on-surface-variant);">${appState.lang === `si` ? c.descSi : c.descEn}</p>
          </div>
        `).join(``);
      }

      if (filterRow) {
        const filters = [
          { id: `all`, en: `All Guidance`, si: `සියල්ල` },
          { id: `tropical`, en: `Tropical Climate`, si: `නිවර්තන දේශගුණය` },
          { id: `safety`, en: `Temperature & Safety`, si: `උෂ්ණත්ව ආරක්ෂාව` },
          { id: `fifo`, en: `FIFO System`, si: `FIFO ක්‍රමය` },
          { id: `spoilage`, en: `Spoilage Signs`, si: `නරක් වීමේ ලකුණු` }
        ];
        filterRow.innerHTML = filters.map((f) => `
          <button type="button" class="chip-btn" aria-pressed="${appState.tipsFilter === f.id ? `true` : `false`}" onclick="setTipsFilter('${f.id}')">
            ${appState.lang === `si` ? f.si : f.en}
          </button>
        `).join(``);
      }

      if (grid) {
        const filtered = TROPICAL_TIPS.filter((tip) => appState.tipsFilter === `all` || tip.cat === appState.tipsFilter);
        grid.innerHTML = filtered.map((tip) => `
          <article class="card">
            <span class="kicker">${tip.cat.toUpperCase()}</span>
            <h3 style="margin:6px 0 8px;">${appState.lang === `si` ? tip.titleSi : tip.titleEn}</h3>
            <p style="font-size:0.92rem;color:var(--on-surface-variant);">${appState.lang === `si` ? tip.bodySi : tip.bodyEn}</p>
          </article>
        `).join(``);
      }

      if (tbody) {
        tbody.innerHTML = FDA_STORAGE_ROWS.map((r) => `
          <tr>
            <td><strong>${appState.lang === `si` ? r.itemSi : r.itemEn}</strong></td>
            <td>${r.fridge}</td>
            <td>${r.freezer}</td>
          </tr>
        `).join(``);
      }
    }

    /* ============================================================
       MONTHLY INSIGHTS & CHART.JS
    ============================================================ */
    function renderInsights() {
      const kpiEl = document.getElementById(`insights-kpis`);
      const tbody = document.getElementById(`history-table-body`);
      if (!kpiEl || !tbody) return;

      const consumedLkr = appState.history.filter((h) => h.action === `consumed`).reduce((s, h) => s + (h.valueLkr || 0), 0);
      const wastedLkr = appState.history.filter((h) => h.action === `wasted`).reduce((s, h) => s + (h.valueLkr || 0), 0);
      const activeLkr = appState.items.reduce((s, x) => s + (x.priceLkr || 0), 0);
      const totalTracked = consumedLkr + wastedLkr;
      const saveRate = totalTracked > 0 ? Math.round((consumedLkr / totalTracked) * 100) : 100;

      kpiEl.innerHTML = `
        <div class="card">
          <span class="label-mono">${appState.lang === `si` ? `වත්මන් තොග වටිනාකම` : `ACTIVE STOCK VALUE`}</span>
          <p class="key-figure" style="margin:6px 0;">${formatLkr(activeLkr)}</p>
        </div>
        <div class="card is-leaf-highlight">
          <span class="label-mono" style="color:var(--on-primary-container);">${appState.lang === `si` ? `භාවිතා කර ඉතිරි කළ` : `CONSUMED (SAVED)`}</span>
          <p class="key-figure" style="margin:6px 0;">${formatLkr(consumedLkr)}</p>
        </div>
        <div class="card">
          <span class="label-mono">${appState.lang === `si` ? `නාස්ති වූ වටිනාකම` : `WASTED VALUE`}</span>
          <p class="key-figure" style="margin:6px 0;color:var(--error);">${formatLkr(wastedLkr)}</p>
        </div>
        <div class="card">
          <span class="label-mono">${appState.lang === `si` ? `භාවිතා කළ අනුපාතය` : `CONSUMPTION EFFICIENCY`}</span>
          <p class="key-figure" style="margin:6px 0;">${saveRate}%</p>
        </div>
      `;

      if (appState.history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--on-surface-variant);">${appState.lang === `si` ? `තවමත් ඉතිහාස වාර්තා නොමැත.` : `No purchase or consumption history logged yet.`}</td></tr>`;
      } else {
        tbody.innerHTML = appState.history.slice(0, 25).map((h) => {
          const actionCls = h.action === `wasted` ? `badge-danger` : h.action === `consumed` ? `badge-fresh` : `badge-neutral`;
          return `
            <tr>
              <td>${h.date}</td>
              <td><strong>${appState.lang === `si` && h.nameSi ? h.nameSi : h.nameEn}</strong></td>
              <td><span class="badge ${actionCls}">${h.action.toUpperCase()}</span></td>
              <td>${h.qty} ${getUnitLabel(h.unit)}</td>
              <td>${formatLkr(h.valueLkr)}</td>
            </tr>
          `;
        }).join(``);
      }

      if (appState.activeView === `insights`) {
        renderInsightsCharts();
      }
    }

    function renderInsightsCharts() {
      if (typeof Chart === `undefined`) return;
      const styles = getComputedStyle(document.documentElement);
      const colGreen = styles.getPropertyValue(`--data-1`).trim() || `#477a55`;
      const colOchre = styles.getPropertyValue(`--data-2`).trim() || `#8f5822`;
      const colRed = styles.getPropertyValue(`--data-3`).trim() || `#b83230`;

      const consumedLkr = appState.history.filter((h) => h.action === `consumed`).reduce((s, h) => s + (h.valueLkr || 0), 0);
      const wastedLkr = appState.history.filter((h) => h.action === `wasted`).reduce((s, h) => s + (h.valueLkr || 0), 0);
      const activeLkr = appState.items.reduce((s, x) => s + (x.priceLkr || 0), 0);

      const cRatio = document.getElementById(`chart-ratio`);
      if (cRatio) {
        if (ratioChartInstance) ratioChartInstance.destroy();
        const hasRatioData = consumedLkr + wastedLkr + activeLkr > 0;
        const colContext = styles.getPropertyValue(`--data-context`).trim() || `#b5b0a3`;
        ratioChartInstance = new Chart(cRatio, {
          type: `doughnut`,
          data: {
            labels: hasRatioData ? [
              appState.lang === `si` ? `භාවිතා කළ (LKR)` : `Consumed (LKR)`,
              appState.lang === `si` ? `නාස්ති වූ (LKR)` : `Wasted (LKR)`,
              appState.lang === `si` ? `තොගයේ ඇති (LKR)` : `In Stock (LKR)`
            ] : [appState.lang === `si` ? `දත්ත නොමැත` : `No Data Yet`],
            datasets: [{
              data: hasRatioData ? [consumedLkr, wastedLkr, activeLkr] : [1],
              backgroundColor: hasRatioData ? [colGreen, colRed, colOchre] : [colContext],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: `bottom` } }
          }
        });
      }

      const catKeys = Object.keys(CATEGORY_LABELS);
      const catConsumed = catKeys.map((k) =>
        appState.history.filter((h) => h.cat === k && h.action === `consumed`).reduce((s, h) => s + (h.valueLkr || 0), 0) +
        appState.items.filter((i) => i.category === k).reduce((s, i) => s + (i.priceLkr || 0), 0)
      );
      const catWasted = catKeys.map((k) =>
        appState.history.filter((h) => h.cat === k && h.action === `wasted`).reduce((s, h) => s + (h.valueLkr || 0), 0)
      );

      const cCat = document.getElementById(`chart-category`);
      if (cCat) {
        if (categoryChartInstance) categoryChartInstance.destroy();
        categoryChartInstance = new Chart(cCat, {
          type: `bar`,
          data: {
            labels: catKeys.map((k) => getCategoryLabel(k)),
            datasets: [
              {
                label: appState.lang === `si` ? `භාවිතය / තොග (LKR)` : `Active & Consumed (LKR)`,
                data: catConsumed,
                backgroundColor: colGreen,
                borderRadius: 6
              },
              {
                label: appState.lang === `si` ? `නාස්තිය (LKR)` : `Wasted (LKR)`,
                data: catWasted,
                backgroundColor: colRed,
                borderRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { position: `bottom` } }
          }
        });
      }
    }

    function exportInsightsCsv() {
      const header = `Date,Item,Category,Action,Qty,Unit,Value_LKR\n`;
      const rows = appState.history.map((h) =>
        `${h.date},"${(h.nameEn || ``).replace(/"/g, `""`)}",${h.cat},${h.action},${h.qty},${h.unit},${h.valueLkr || 0}`
      ).join(`\n`);
      const csv = header + rows;
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content: csv,
          contentType: `text/csv`,
          encoding: `UTF-8`,
          filename: `ithiri-kitchen-history.csv`
        });
      }
      showToast(appState.lang === `si` ? `CSV ගොනුව බාගත කළා` : `Exported ithiri-kitchen-history.csv`, false);
    }

    /* ============================================================
       SETTINGS & INLINE RESET
    ============================================================ */
    function renderSettings() {
      const hEl = document.getElementById(`set-household`);
      const zEl = document.getElementById(`set-zone`);
      const aEl = document.getElementById(`set-alert-days`);
      const cEl = document.getElementById(`set-avail-check`);
      if (hEl) hEl.value = appState.settings.householdName || ``;
      if (zEl) zEl.value = appState.settings.climateZone || `wet`;
      if (aEl) aEl.value = String(appState.settings.alertDays || 3);
      if (cEl) cEl.value = appState.settings.enable3DayCheck ? `true` : `false`;
    }

    function saveSettingsForm(event) {
      event.preventDefault();
      appState.settings.householdName = document.getElementById(`set-household`).value.trim() || `My Kitchen`;
      appState.settings.climateZone = document.getElementById(`set-zone`).value;
      appState.settings.alertDays = Number(document.getElementById(`set-alert-days`).value) || 3;
      appState.settings.enable3DayCheck = document.getElementById(`set-avail-check`).value === `true`;
      persistState();
      renderAll();
      const msg = document.getElementById(`settings-saved-msg`);
      if (msg) {
        msg.textContent = appState.lang === `si` ? `සුරැකුණා!` : `Preferences saved!`;
        setTimeout(() => { msg.textContent = ``; }, 3000);
      }
    }

    function handleResetAll(btn) {
      if (btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.querySelector(`span`).textContent = appState.lang === `si` ? `තහවුරු කිරීමට නැවත ඔබන්න` : `Click again to confirm reset`;
        setTimeout(() => {
          btn.dataset.armed = `false`;
          btn.querySelector(`span`).textContent = t(`btnResetData`);
        }, 4000);
        return;
      }
      btn.dataset.armed = `false`;
      btn.querySelector(`span`).textContent = t(`btnResetData`);
      pushUndoSnapshot(`Reset all kitchen data`);
      appState.items = [];
      appState.shoppingList = [];
      appState.history = [];
      appState.dismissedChecks = {};
      persistState();
      renderAll();
      showToast(appState.lang === `si` ? `සියලු දත්ත මකා දමන ලදී` : `Kitchen data cleared`, true);
    }

    /* ============================================================
       STARTUP INITIALIZATION
    ============================================================ */
    async function initApp() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === `object`) {
            appState = {
              ...appState,
              ...saved,
              settings: { ...appState.settings, ...(saved.settings || {}) }
            };
          }
        }
      } catch (err) {
        console.warn(`Could not restore state:`, err);
      }

      document.documentElement.lang = appState.lang === `si` ? `si` : `en`;
      const enBtn = document.getElementById(`lang-btn-en`);
      const siBtn = document.getElementById(`lang-btn-si`);
      if (enBtn) enBtn.setAttribute(`aria-pressed`, appState.lang === `en` ? `true` : `false`);
      if (siBtn) siBtn.setAttribute(`aria-pressed`, appState.lang === `si` ? `true` : `false`);

      applyTranslations();
      populateSelects();
      renderAll();
      switchView(appState.activeView || `dashboard`);
      setInterval(updateColomboGreeting, 60000);

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initApp);
  
