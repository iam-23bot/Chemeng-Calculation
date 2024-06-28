function calculateMakeUpWater() {
    const evaporation = parseFloat(document.getElementById('evaporation').value);
    const blowdown = parseFloat(document.getElementById('blowdown').value);
    const drift = parseFloat(document.getElementById('drift').value);

    if (isNaN(evaporation) || isNaN(blowdown) || isNaN(drift)) {
        alert('Please enter valid numbers');
        return;
    }

    const makeUpWater = evaporation + blowdown + drift;
    document.getElementById('makeup-result').innerText = `Make-up Water Requirement: ${makeUpWater.toFixed(2)} m³/h`;
}

function calculateCombustionEfficiency() {
    const fuelValue = parseFloat(document.getElementById('fuel-value').value);
    const actualHeat = parseFloat(document.getElementById('actual-heat').value);
    const theoreticalHeat = parseFloat(document.getElementById('theoretical-heat').value);

    if (isNaN(fuelValue) || isNaN(actualHeat) || isNaN(theoreticalHeat)) {
        alert('Please enter valid numbers');
        return;
    }

    const efficiency = (actualHeat / theoreticalHeat) * 100;
    document.getElementById('efficiency-result').innerText = `Combustion Efficiency: ${efficiency.toFixed(2)}%`;
}

function calculateMassEnergyBalance() {
    const massIn = parseFloat(document.getElementById('mass-in').value);
    const massOut = parseFloat(document.getElementById('mass-out').value);
    const energyIn = parseFloat(document.getElementById('energy-in').value);
    const energyOut = parseFloat(document.getElementById('energy-out').value);

    if (isNaN(massIn) || isNaN(massOut) || isNaN(energyIn) || isNaN(energyOut)) {
        alert('Please enter valid numbers');
        return;
    }

    const massBalance = massIn - massOut;
    const energyBalance = energyIn - energyOut;
    document.getElementById('balance-result').innerText = `Mass Balance: ${massBalance.toFixed(2)} kg, Energy Balance: ${energyBalance.toFixed(2)} MJ`;
}

function calculateEmissions() {
    const fuelAmount = parseFloat(document.getElementById('fuel-amount').value);
    const carbonContent = parseFloat(document.getElementById('carbon-content').value);

    if (isNaN(fuelAmount) || isNaN(carbonContent)) {
        alert('Please enter valid numbers');
        return;
    }

    const emissions = fuelAmount * (carbonContent / 100) * 3.67; // 3.67 is the conversion factor from carbon to CO2
    document.getElementById('emissions-result').innerText = `CO2 Emissions: ${emissions.toFixed(2)} kg`;
}

function calculateTurbineEfficiency() {
    const inputEnthalpy = parseFloat(document.getElementById('input-enthalpy').value);
    const outputEnthalpy = parseFloat(document.getElementById('output-enthalpy').value);

    if (isNaN(inputEnthalpy) || isNaN(outputEnthalpy)) {
        alert('Please enter valid numbers');
        return;
    }

    const efficiency = ((inputEnthalpy - outputEnthalpy) / inputEnthalpy) * 100;
    document.getElementById('turbine-efficiency-result').innerText = `Turbine Efficiency: ${efficiency.toFixed(2)}%`;
}

function calculateHeatRecoveryEfficiency() {
    const inputHeat = parseFloat(document.getElementById('input-heat').value);
    const recoveredHeat = parseFloat(document.getElementById('recovered-heat').value);

    if (isNaN(inputHeat) || isNaN(recoveredHeat)) {
        alert('Please enter valid numbers');
        return;
    }

    const efficiency = (recoveredHeat / inputHeat) * 100;
    document.getElementById('heat-recovery-result').innerText = `Heat Recovery Efficiency: ${efficiency.toFixed(2)}%`;
}

function calculateAirSteamQuality() {
    const boilerPressure = parseFloat(document.getElementById('boiler-pressure').value);
    const steamTemperature = parseFloat(document.getElementById('steam-temperature').value);

    if (isNaN(boilerPressure) || isNaN(steamTemperature)) {
        alert('Please enter valid numbers');
        return;
    }

    const quality = boilerPressure * steamTemperature; // Simplified calculation, adjust as needed
    document.getElementById('air-steam-quality-result').innerText = `Air and Steam Quality: ${quality.toFixed(2)}`;
}

function calculateEnergyFuelConsumption() {
    const energyOutput = parseFloat(document.getElementById('energy-output').value);
    const fuelConsumed = parseFloat(document.getElementById('fuel-consumed').value);

    if (isNaN(energyOutput) || isNaN(fuelConsumed)) {
        alert('Please enter valid numbers');
        return;
    }

    const consumption = energyOutput / fuelConsumed;
    document.getElementById('energy-fuel-consumption-result').innerText = `Energy per Fuel Unit: ${consumption.toFixed(2)} MJ/kg`;
}

function calculateChemicalProcess() {
    const reactant = parseFloat(document.getElementById('reactant').value);
    const product = parseFloat(document.getElementById('product').value);

    if (isNaN(reactant) || isNaN(product)) {
        alert('Please enter valid numbers');
        return;
    }

    const efficiency = (product / reactant) * 100;
    document.getElementById('chemical-process-result').innerText = `Process Efficiency: ${efficiency.toFixed(2)}%`;
}

function calculateSafetyHealth() {
    const hazardousConcentration = parseFloat(document.getElementById('hazardous-concentration').value);
    const exposureTime = parseFloat(document.getElementById('exposure-time').value);

    if (isNaN(hazardousConcentration) || isNaN(exposureTime)) {
        alert('Please enter valid numbers');
        return;
    }

    const safetyIndex = hazardousConcentration * exposureTime; // Simplified calculation, adjust as needed
    document.getElementById('safety-health-result').innerText = `Safety Index: ${safetyIndex.toFixed(2)}`;
}
