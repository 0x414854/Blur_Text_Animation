function textAnimation() {
  const textAnimation = document.querySelector(".text_animation");
  const letters = textAnimation.textContent.split("");
  const delay = 0.3;
  textAnimation.textContent = "";
  textAnimation.style.color = "white";
  textAnimation.style.textShadow = "0 2px 15px white";
  textAnimation.style.opacity = "1";

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${delay + Math.abs(i * 300) * 0.6}ms`;
    textAnimation.append(span);
  });
}

textAnimation();
