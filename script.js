let calc = () => {
  // Get elements
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const ageInput = document.getElementById("age");
  const new_status = document.getElementById("status");
  const metric = document.getElementById("metric");
  const us = document.getElementById("us");
  const gender = document.getElementById("gender");
  const resultDisplay = document.getElementById("no");

  // Function to update input placeholders based on the selected unit
  const updatePlaceholders = () => {
    if (metric.checked) {
      heightInput.placeholder = "e.g., 170 (cm)";
      weightInput.placeholder = "e.g., 70 (kg)";
    } else if (us.checked) {
      heightInput.placeholder = "e.g., 68 (in)";
      weightInput.placeholder = "e.g., 154 (lbs)";
    }
  };

  // Attach event listeners to radio buttons
  metric.addEventListener("change", updatePlaceholders);
  us.addEventListener("change", updatePlaceholders);

  // Update placeholders on initial load
  updatePlaceholders();

  // Read input values
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const age = parseInt(ageInput.value);
  const genderValue = gender.value;

  // Input validation
  if (isNaN(height) || isNaN(weight) || isNaN(age)) {
    alert("Please enter valid numbers for height, weight, and age.");
    return;
  }

  if (!metric.checked && !us.checked) {
    alert("Please select a unit system (Metric or US).");
    return;
  }

  if (!genderValue) {
    alert("Please select your gender.");
    return;
  }

  let bmi;

  // Calculate BMI based on selected unit
  if (metric.checked) {
    const newHeight = height / 100; // Convert cm to m
    bmi = weight / newHeight ** 2;
  } else if (us.checked) {
    bmi = (weight * 703) / height ** 2;
  }

  bmi = bmi.toFixed(1); // Fix to 1 decimal place

  // Display the calculated BMI
  resultDisplay.innerHTML = bmi;

  // Determine and display the BMI category
  if (bmi < 18.5) {
    new_status.innerText = "Underweight";
    new_status.className = "status underweight";
  } else if (bmi < 25) {
    new_status.innerText = "Normal";
    new_status.className = "status normal";
  } else if (bmi < 30) {
    new_status.innerText = "Overweight";
    new_status.className = "status overweight";
  } else {
    new_status.innerText = "Obese";
    new_status.className = "status obese";
  }
};
