var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  if (currentTab == "1") {
    if ((document.getElementById("pnumber").value.length !== 10) || isNaN(document.getElementById("pnumber").value)) {
      valid = false;
      alert("Please enter a Valid Phone  Number");
    }
    if ((document.getElementById("wnumber").value.length !== 10) || isNaN(document.getElementById("wnumber").value)) {
      valid = false;
      alert("Please enter a Valid What's App  Number");
    }
    if (document.getElementById("email").value.length !== "") {
      var e = document.getElementById("email").value;
      var atposition = e.indexOf("@");
      var dotposition = e.lastIndexOf(".");
      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= e.length) {
        alert("Please enter a Valid E-Mail Address");
        valid = false;
      }
    }
  }
  if (currentTab == "2") {
    if ((document.getElementById("dob_d").value.length < 1) || (document.getElementById("dob_d").value.length > 2) || isNaN(document.getElementById("dob_d").value) || (document.getElementById("dob_d").value < "0") || (document.getElementById("dob_d").value > "31")) {
      valid = false;
      alert("Please enter a Valid Date");
    }
    if ((document.getElementById("dob_m").value.length < 1) || (document.getElementById("dob_m").value.length > 2) || isNaN(document.getElementById("dob_m").value) || (document.getElementById("dob_m").value < "0") || (document.getElementById("dob_m").value > "12")) {
      valid = false;
      alert("Please enter a Valid Month");
    }
    if ((document.getElementById("dob_y").value.length !== 4) || isNaN(document.getElementById("dob_y").value)) {
      valid = false;
      alert("Please enter a Valid Year");
    }
  }
  if (currentTab == "3") {
    if (isNaN(document.getElementById("id_num").value)) {
      valid = false;
      alert("Please enter a Valid Identification Number");
    }
  }
  if (currentTab == "4") {
    if (document.getElementById("dropdown").value == "0") {
      valid = false;
      alert("Please select a Valid Id Type");
    }
    if (document.getElementById("dropdown").value == "Aadhar_Card") {
      var reg_adh = /^\d{12}$/;
      var ano = document.getElementById("id_proof").value;
      if (reg_adh.test(ano)) {
        valid = true;
      }
      else {
        valid = false;
        alert("Please Enter a Valid Aadhar Card Number");
      }
    }
    if (document.getElementById("dropdown").value == "Driving_License") {
      var reg_dl = /^[0-3][0-9]{7}$/;
      var dno = document.getElementById("id_proof").value;
      if (reg_dl.test(dno)) {
        valid = true;
      }
      else {
        valid = false;
        alert("Please Enter a Valid Driving License Number");
      }
    }
    if (document.getElementById("dropdown").value == "Pan_Card") {
      var reg_pan = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
      var pno = document.getElementById("id_proof").value;
      if (reg_pan.test(pno)) {
        valid = true;
      }
      else {
        valid = false;
        alert("Please Enter a Valid Pan Card Number");
      }
    }
    if (document.getElementById("dropdown").value == "Voter_Card") {
      var reg_v = /^([a-zA-Z]){3}([0-9]){7}?$/g;
      var vno = document.getElementById("id_proof").value;
      if (reg_v.test(vno)) {
        valid = true;
      }
      else {
        valid = false;
        alert("Please Enter a Valid Pan Card Number");
      }
    }
    if (document.getElementById("dropdown").value == "Passport") {
      var reg_p = /([A-Z a-z]){1}([0-9]){7}$/;
      var pno = document.getElementById("id_proof").value;
      if (reg_p.test(pno)) {
        valid = true;
      }
      else {
        valid = false;
        alert("Please Enter a Valid Passport Number");
      }
    }
  }
  if (currentTab == "5") {
    if (document.getElementById("dropdown_dep").value == "0") {
      valid = false;
      alert("Please Select a Valid Department");
    }
  }
  if (currentTab == "7") {
    if ((document.getElementById("dob_jd").value.length < 1) || (document.getElementById("dob_jd").value.length > 2) || isNaN(document.getElementById("dob_jd").value) || (document.getElementById("dob_jd").value < "0") || (document.getElementById("dob_jd").value > "31")) {
      valid = false;
      alert("Please enter a Valid Date");
    }
    if ((document.getElementById("dob_jm").value.length < 1) || (document.getElementById("dob_jm").value.length > 2) || isNaN(document.getElementById("dob_jm").value) || (document.getElementById("dob_jm").value < "0") || (document.getElementById("dob_jm").value > "12")) {
      valid = false;
      alert("Please enter a Valid Month");
    }
    if ((document.getElementById("dob_jy").value.length !== 4) || isNaN(document.getElementById("dob_jy").value)) {
      valid = false;
      alert("Please enter a Valid Year");
    }
  }
  if (currentTab == "8") {
    if ((document.getElementById("tenure").value.length < 1) || (document.getElementById("tenure").value.length > 12) || isNaN(document.getElementById("tenure").value)) {
      valid = false;
      alert("Please Enter a Valid Tenure Range Between (1-12)");
    }
  }
  if (currentTab == "9") {
    if ((document.getElementById("dob_ed").value.length < 1) || (document.getElementById("dob_ed").value.length > 2) || isNaN(document.getElementById("dob_ed").value) || (document.getElementById("dob_ed").value < "0") || (document.getElementById("dob_ed").value > "31")) {
      valid = false;
      alert("Please enter a Valid Date");
    }
    if ((document.getElementById("dob_em").value.length < 1) || (document.getElementById("dob_em").value.length > 2) || isNaN(document.getElementById("dob_em").value) || (document.getElementById("dob_em").value < "0") || (document.getElementById("dob_em").value > "12")) {
      valid = false;
      alert("Please enter a Valid Month");
    }
    if ((document.getElementById("dob_ey").value.length !== 4) || isNaN(document.getElementById("dob_ey").value)) {
      valid = false;
      alert("Please enter a Valid Year");
      e
    }
  }
  if (currentTab == "10") {
    if (isNaN(document.getElementById("cid").value)) {
      valid = false;
      alert("Please enter a Valid Certificate ID");
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
