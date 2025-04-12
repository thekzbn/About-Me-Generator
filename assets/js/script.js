// Capitalize the first letter of each word
function capitalizeWords(str) {
    return str.trim().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Function to sanitize and format the input
function sanitizeInput(input) {
    return input.trim();  // Removes any unwanted spaces before and after
}

// Generate a dynamic About Me sentence based on the inputs
document.getElementById('aboutForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from the form fields
    const name = sanitizeInput(document.getElementById('name').value);
    const age = sanitizeInput(document.getElementById('age').value);
    const color = sanitizeInput(document.getElementById('color').value);
    const food = sanitizeInput(document.getElementById('food').value);
    const hobby = sanitizeInput(document.getElementById('hobby').value);
    const goal = sanitizeInput(document.getElementById('goal').value);
    const motivation = sanitizeInput(document.getElementById('motivation').value);
    const fear = sanitizeInput(document.getElementById('fear').value);
    const dreamPlace = sanitizeInput(document.getElementById('dreamPlace').value);
    const dreamJob = sanitizeInput(document.getElementById('dreamJob').value);
    const successMeaning = sanitizeInput(document.getElementById('successMeaning').value);
    const favoriteQuote = sanitizeInput(document.getElementById('favoriteQuote').value);
    const accomplishment = sanitizeInput(document.getElementById('accomplishment').value);
    const additionalInfo = sanitizeInput(document.getElementById('additionalInfo').value);

    // Capitalize the first letter of each word for relevant inputs
    const capitalizedName = capitalizeWords(name);
    const capitalizedColor = capitalizeWords(color);
    const capitalizedFood = capitalizeWords(food);
    const capitalizedHobby = capitalizeWords(hobby);
    const capitalizedGoal = capitalizeWords(goal);
    const capitalizedMotivation = capitalizeWords(motivation);
    const capitalizedFear = capitalizeWords(fear);
    const capitalizedDreamPlace = capitalizeWords(dreamPlace);
    const capitalizedDreamJob = capitalizeWords(dreamJob);
    const capitalizedSuccessMeaning = capitalizeWords(successMeaning);
    const capitalizedFavoriteQuote = capitalizeWords(favoriteQuote);
    const capitalizedAccomplishment = capitalizeWords(accomplishment);

    // Ensure the age is a number and not empty
    if (!age || isNaN(age) || age < 1) {
        alert('Please enter a valid age!');
        return;
    }

    // Dynamic sentence generation
    const result = `
      <p>Hi, my name is ${capitalizedName}, and I am ${age} years old. My favorite color is ${capitalizedColor} and I love to eat ${capitalizedFood}. One of my hobbies is ${capitalizedHobby}, and my main goal in life is to ${capitalizedGoal}. What motivates me every day is ${capitalizedMotivation}, but my biggest fear is ${capitalizedFear}. </p>
      <p>My dream place to visit is ${capitalizedDreamPlace}, and my ultimate career goal is to become a ${capitalizedDreamJob}. To me, success means ${capitalizedSuccessMeaning}. One of my favorite quotes is: "${capitalizedFavoriteQuote}". </p>
      <p>I'm proud of my biggest accomplishment, which was ${capitalizedAccomplishment}. ${additionalInfo ? "Additionally, " + additionalInfo : ""}</p>
    `;

    // Display the generated About Me text
    document.getElementById('result').innerHTML = result;
});
