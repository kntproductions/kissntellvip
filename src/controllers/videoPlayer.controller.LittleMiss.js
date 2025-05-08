const loader = document.querySelector(".heart__loader");
const initializeModal = (iframe) => {
  const embeddUrl = "https://chaturbate.com/embed/xxlittlemiss95xx/?campaign=9r5I1&disable_sound=1&embed_video_only=0&join_overlay=1&mobileRedirect=auto&room=xxlittlemiss95xx&target=_parent&tour=ZQAI&track=embed";
/* "https://chaturbate.com/fullvideo/?b=xxlittlemiss95xx&campaign=9r5I1&disable_sound=1&mobileRedirect=never&signup_notice=1&tour=ZQAI&track=embed" */

  iframe.setAttribute("src", embeddUrl);
}
export const loadVideo = async (iframe) => {
  try {
    initializeModal(iframe);
    loader.style.display = "none";
  } catch (error) {
    console.error("Error loading video:", error);
  }
};

// Initialize video modal for all iframes with class "latestVideoEmbed"
const iframes = document.getElementsByClassName("latestVideoEmbed");
if (iframes.length > 0) {
  loadVideo(iframes[0]);
}