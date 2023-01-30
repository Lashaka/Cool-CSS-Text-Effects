function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Text copied to clipboard");
    },
    (err) => {
      console.error("Failed to copy text: ", err);
    }
  );
}

const StaticNeonCopyBtn = document.getElementById("StaticNeonCopyBtn");
const NeonCubeCopyBtn = document.getElementById("NeonCubeCopyBtn");
const NeonTriangleCopyBtn = document.getElementById("NeonTriangleCopyBtn");
const TokyoNeonLightsCopyBtn = document.getElementById(
  "TokyoNeonLightsCopyBtn"
);
const OutlineRainbowCopyBtn = document.getElementById("OutlineRainbowCopyBtn");
const PulsingCopyBtn = document.getElementById("PulsingCopyBtn");
const Text3DCopyBtn = document.getElementById("Text3DCopyBtn");
const ScreenScreamerCopyBtn = document.getElementById("ScreenScreamerCopyBtn");
const spinningCopyBtn = document.getElementById("spinningCopyBtn");
const SpinningVerticallyCopyBtn = document.getElementById(
  "SpinningVerticallyCopyBtn"
);

StaticNeonCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".StaticNeon { margin-bottom: 50px; -webkit-text-stroke-width: 7px; -webkit-text-stroke: cyan; -webkit-text-stroke-color: cyan; -webkit-text-stroke-width: 5px; animation: StaticNeonEffect 6s ease-in-out infinite; } @keyframes StaticNeonEffect { 0% { color: blue; -webkit-text-stroke-color: cyan; } 50% { color: purple; -webkit-text-stroke-color: pink; } 100% { color: blue; -webkit-text-stroke-color: cyan; } }"
  );
});
NeonCubeCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".NeonCube { color: #7fc4fa; text-shadow: -10px -10px #ff8c00; margin-bottom: 50px; animation: neonforCube 8s ease-in-out infinite; } @keyframes neonforCube { 0% { text-shadow: -10px -10px #8c6af2; } 25% { text-shadow: 10px -10px #a757d0; } 50% { text-shadow: 10px 10px #ba4ba9; } 75% { text-shadow: -10px 10px #de3c78; } 100% { text-shadow: -10px -10px #8c6af2; } }"
  );
});
NeonTriangleCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".NeonTriangle { color: white; text-shadow: -10px -10px black; margin-bottom: 50px; animation: neonForTriangle 1s step-end infinite; } @keyframes neonForTriangle { 0% { text-shadow: -10px -10px yellow; } 33% { text-shadow: 10px -10px orange; } 66% { text-shadow: 0px 10px red; } 100% { text-shadow: -10px -10px yellow; } }"
  );
});
TokyoNeonLightsCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".TokyoNeonLights { color: black; text-shadow: -10px -10px black; margin-bottom: 50px; color: rgba(0, 0, 0, 0); animation: TokyoNeonEffect 1s step-end infinite; } @keyframes TokyoNeonEffect { 0% { text-shadow: -20px -20px #3c1096; } 10% { text-shadow: -30px -10px #4c2bc4; } 20% { text-shadow: -40px 0px #51c7e3; } 30% { text-shadow: -30px 10px #be43a1; } 40% { text-shadow: -20px 20px #721a86; } 50% { text-shadow: 20px -20px #3c1096; } 60% { text-shadow: 30px -10px #4c2bc4; } 70% { text-shadow: 40px 0px #51c7e3; } 80% { text-shadow: 30px 10px #be43a1; } 90% { text-shadow: 20px 20px #721a86; } 100% { text-shadow: -20px -20px #3c1096; } }"
  );
});
OutlineRainbowCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".OutlineRainbow { color: black; margin-bottom: 50px; -webkit-text-stroke: #de3c78; -webkit-text-stroke-width: 3px; animation: OutLineRainbowEffect 2s ease-in-out infinite; } @keyframes OutLineRainbowEffect { 0% { -webkit-text-stroke-color: Red; } 14% { -webkit-text-stroke-color: orange; } 28% { -webkit-text-stroke-color: yellow; } 43% { -webkit-text-stroke-color: green; } 57% { -webkit-text-stroke-color: blue; } 72% { -webkit-text-stroke-color: indigo; } 86% { -webkit-text-stroke-color: violet; } 100% { -webkit-text-stroke-color: Red; } }"
  );
});
PulsingCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".Pulsing { animation: entry-animation 2s ease-in-out infinite; color: aquamarine; } @keyframes entry-animation { 0% { opacity: 0%; } 50% { opacity: 100%; } 100% { opacity: 0%; } }"
  );
});
ColumMoveCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".ColumMove::before { transform: scaleX(0); transform-origin: bottom right; } .ColumMove:hover::before { transform: scaleX(1); transform-origin: bottom left; } .ColumMove::before { content: ''; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0 0 0 0; background: hsl(200 100% 80%); z-index: -1; transition: transform .8s ease; } .ColumMove { position: relative; } @media (orientation: landscape) { body { grid-auto-flow: column; } }"
  );
});
Text3DCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".Text3D { font-weight: 500; font-family: verdana; color: yellow; text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4); }"
  );
});
ScreenScreamerCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".ScreenScreamer { font-size: 100px; font-weight: bold; text-align: center; transform: perspective(10px) rotateX(0) rotateY(0); transition: transform 0.25s; color: white; } .ScreenScreamer:hover { transform: perspective(10px) rotateX(-90deg) rotateY(180deg); }"
  );
});
spinningCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".Spinning { animation: Spin 8s linear infinite; color: white; } @keyframes Spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); /* -360deg to spin left */ } }"
  );
});
SpinningVerticallyCopyBtn.addEventListener("click", () => {
  copyToClipboard(
    ".SpinningVertically { animation: SpinVertically 8s linear infinite; color: white; } @keyframes SpinVertically { from { transform: rotateX(0deg); } to { transform: rotateX(360deg); } }"
  );
});
