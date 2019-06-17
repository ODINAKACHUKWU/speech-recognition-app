const icon = document.querySelector("i.fa.fa-microphone");
let paragraph = document.createElement("p");
let container = document.querySelector(".text-box");

container.appendChild(paragraph)
window.SpeechRecognition = window.webkitSpeechRecognition

const recognition = new SpeechRecognition;

console.log(">>>", recognition);

const transcribe = () => {
    recognition.start();
    recognition.onresult = (event) => {
        console.log("++++++", event);
        const speechToText = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");
        paragraph.textContent = speechToText;
    };
}

icon.addEventListener("click", () => {
  transcribe();
});
