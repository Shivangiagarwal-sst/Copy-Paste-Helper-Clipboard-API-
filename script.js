const textArea = document.getElementById("textArea");
const copyBtn = document.getElementById("copyBtn");
const pasteBtn = document.getElementById("pasteBtn");
const statusMsg = document.getElementById("status");
copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(textArea.value);
        showStatus("📋✨ Copied!");
    } catch (err) {
        console.error("Failed to copy:", err);
        showStatus("❌ Copy failed");
    }
});
pasteBtn.addEventListener("click", async () => {
    try {
        const text = await navigator.clipboard.readText();
        textArea.setRangeText(
            text,
            textArea.selectionStart,
            textArea.selectionEnd,
            "end"
        );
        showStatus("📥 Pasted!");
    } catch (err) {
        console.error("Failed to paste:", err);
        showStatus("🔒 Permission denied");
    }
});
function showStatus(message) {
    statusMsg.textContent = message;
    statusMsg.classList.remove("hidden");
    setTimeout(() => {
        statusMsg.classList.add("hidden");
    }, 2000);
}
