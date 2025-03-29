document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const userInput = document.getElementById("user-input");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", async function () {
        const prompt = userInput.value;
        if (prompt.trim() === "") {
            alert("Please enter a prompt.");
            return;
        }

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response from the server.");
            }

            const data = await response.json();
            output.textContent = data.result;
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while processing your request.");
        }
    });
});
