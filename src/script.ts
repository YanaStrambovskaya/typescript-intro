document.addEventListener("DOMContentLoaded", () => {
  initForbiddenWordsForm();
});

type filteredText = {
  updatedText: string;
};

function initForbiddenWordsForm() {
  const form = document.getElementById("form") as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const text = formData.get("text") as string;
    const forbiddenWords = (formData.get("forbiddenWords") as string) ?? "";

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

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result: filteredText = await response.json();
      const filteredText = document.getElementById("filteredText");
      const fixedSentence = document.getElementById("fixedSentence");

      if (!filteredText || !fixedSentence) return;

      fixedSentence.hidden = false;
      filteredText.innerHTML = result.updatedText;
    } catch (err) {
      console.log(err);
    }
  });
}
