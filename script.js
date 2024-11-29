document.getElementById("add-customer-button").addEventListener("click", function() {
    const formData = new FormData(document.getElementById("customer-form"));
    console.log("Sending data:", Object.fromEntries(formData)); // בדיקה: הדפסת הנתונים שנשלחים

    fetch("https://script.google.com/macros/s/AKfycbw4D4HjsxeVVmI5z5GSoNS1lfNRtCFvVB_fuJB2DUpEm0kNlTDLWGf0KTCywwooyAcR/exec", {
        method: "POST",
        body: new URLSearchParams(formData),
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response from server:", data); // בדיקה: הדפסת התגובה מהשרת
        alert("לקוח חדש נוסף בהצלחה!");
        document.getElementById("customer-form").reset(); // ניקוי הטופס לאחר שליחה
    })
    .catch(error => {
        console.error("Error:", error); // טיפול בשגיאות
        alert("אירעה שגיאה, נסה שוב.");
    });
});
