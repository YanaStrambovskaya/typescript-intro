"use strict";
document.addEventListener("DOMContentLoaded", () => {
    initForbiddenWordsForm();
});
function initForbiddenWordsForm() {
    const form = document.getElementById("form");
    if (!form)
        return;
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const text = formData.get("text");
        const forbiddenWords = formData.get("forbiddenWords") ?? "";
        const forbiddenWordsArr = forbiddenWords
            .split(",")
            .map((word) => word.trim());
        try {
            const response = await fetch("/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text,
                    forbiddenWordsArr,
                }),
            });
            if (!response.ok)
                throw new Error(`HTTP ${response.status}`);
            const result = await response.json();
            const filteredText = document.getElementById("filteredText");
            const fixedSentence = document.getElementById("fixedSentence");
            if (!filteredText || !fixedSentence)
                return;
            fixedSentence.hidden = false;
            filteredText.innerHTML = result.updatedText;
        }
        catch (err) {
            console.log(err);
        }
    });
}
//# sourceMappingURL=script.js.map