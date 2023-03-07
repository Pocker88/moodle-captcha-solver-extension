function stripString(string, match_start, match_end) {
    //console.log(string)
    startIndex = string.indexOf(match_start);
    endIndex = string.indexOf(match_end);
    // if (startIndex === -1 || endIndex === -1) {
    //   return string;
    // }
    return string.slice(startIndex, endIndex);
  }


// Get the target input element by its id
// var targetInput = getelem("subcontent.loginsub");
targetInput = document.getElementById("valuepkg3");

text_question = (document.evaluate('//form[text()]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML)

new_text_question = stripString(text_question, "Please", "  =")

console.log(new_text_question)

var numberPattern = /\d+/g;
nums = new_text_question.match(numberPattern)
//console.log(nums[1])

if (new_text_question.includes("first")){
    targetInput.value = nums[0];
}

if (new_text_question.includes("second")){
    targetInput.value = nums[1];
}

if (new_text_question.includes("add")){
    targetInput.value = parseInt(nums[0]) + parseInt(nums[1]);
}

if (new_text_question.includes("subtract")){
    targetInput.value = parseInt(nums[0]) - parseInt(nums[1]);
}

// Get the target input element by its id

// Check if the target input element was found
// if (targetInput) {
//   // Set the value of the input element
//   targetInput.value = "23";
// }