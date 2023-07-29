// Plan

// Nisab Threshold 
// 3 ounces of gold (87.48g) or 21 ounces of silver (612.36g)
// CHANGE WHENEVER IT CHANGES

const nisabThreshold = 373.05;

// getValue(id) Helper Function
// Reduces repetiveness by getting value from form much easier
// Called to assign varriables at the beginning of calcualteZakat() function
function getValue(id) {
    let value = document.getElementById(id).value;
    console.log(value);
    if (value == "" || isNaN(value)) {
        return 0;
    } else {
        return parseFloat(value);
    }
}

// calculateZakat() Function
// Perform a calculation based on the Zakat formula, and update the values as a result
// Called any time there is an input change
function calculateZakat() {    
    // Input Variables
        // Income
    let amount_goldAndSilver = getValue("amount_goldAndSilver");
    let amount_cashAtHome    = getValue("amount_cashAtHome");
    let amount_otherSavings = getValue("amount_otherSavings");
    let amount_investments = getValue("amount_investments");
    let amount_owedToYou = getValue("amount_owedToYou");
    let amount_businessAssets = getValue("amount_businessAssets");
        // Expenses
    let amount_moneyYouOwe = getValue("amount_moneyYouOwe");
    let amount_otherOutgoingsDue = getValue("amount_otherOutgoingsDue"); // Could add living expenses, business expenses

    // Results Variables
    let amount_netAssets = document.getElementById("amount_netAssets");
    let amount_zakatTotal =  document.getElementById("amount_zakatTotal");

    // Using islamicreliefcanada.org for calculations
    // 1. Total up all your sources of income
        // Cash + Gold/Silver + Debts owed to you + investments/stocks + business assets
    // 2. Total up your immediate needs and living expenses
        // Personal/living expenses + debts you owe + business expenses*
    // 3. Zakatable wealth calculation
        // Total Income - Living Expenses = Zakatable Wealth
    // 4. Check if it's above threshold for Nisab
        // Zakatable Wealth > Nisab Threshold
    // 5. Calculate zakat you have to pay
        // Multiply zakatable wealth by 2.5%

    // Calculating Total Income
    let totalIncome = amount_goldAndSilver + amount_cashAtHome + amount_otherSavings + amount_investments +amount_owedToYou + amount_businessAssets;
    console.log("Total income is: £" + totalIncome)

    // Calculating Expenses
    let totalExpenses = amount_moneyYouOwe + amount_otherOutgoingsDue;
    console.log("Total expenses is: £" + totalExpenses);

    // Zakatable wealth calculation
    let zakatableWealth = totalIncome - totalExpenses;
    console.log("Total zakatable wealth is: £" + zakatableWealth);
        // Update the form
    amount_netAssets.value = "£" + +zakatableWealth.toFixed(2);


    // Check if it's above threshold for Nisab
    let zakatDifference = zakatableWealth - nisabThreshold;
    let zakatTotal = 0;
    if (zakatDifference > 0) {
        zakatTotal = zakatableWealth;
    }

    // Calculate zakat
    zakatTotal = zakatTotal *= 0.025;
    amount_zakatTotal.value = "£" + +zakatTotal.toFixed(2);


}



