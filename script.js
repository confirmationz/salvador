document.getElementById("add-customer-button").addEventListener("click", function() {
    const formData = new FormData(document.getElementById("customer-form"));
    fetch("https://script.google.com/macros/s/AKfycbzc6DwkYxI_5iM_pF490hAAdUZOQxZvY95gReJwiOdo-eN09b7GPnmmFIbTAj9cvj5d/exec", {
        method: "POST",
        body: new URLSearchParams(formData),
    })
    .then(response => response.text())
    .then(data => {
        alert("לקוח חדש נוסף בהצלחה!"); // הודעת הצלחה
        document.getElementById("customer-form").reset(); // מנקה את הטופס לאחר השליחה
    })
    .catch(error => console.error("Error:", error)); // טיפול בשגיאות
});
