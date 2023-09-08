document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userInputForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const userFormData = {
            Age: form.age.value,
            Location: form.location.value,
            Service: form.service.value,
            Language: form.language.value,
            Gender: form.gender.value,
            Public: form.public.value,
            timings: {
                day: form.day.value,
                time: form.time.value,
            },
        };

        try {
            // Send user data to the backend
            const response = await fetch("/api/collectUserData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userFormData),
            });

            if (response.ok) {
                console.log("User data sent successfully.");
                // You can redirect the user or show a success message here.
            } else {
                console.error("Failed to send user data.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
});
