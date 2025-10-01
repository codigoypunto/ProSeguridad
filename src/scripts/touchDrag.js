function touchDrag () {

    console.log("- activando touch")

    container.addEventListener(
        "touchstart", e => {
            isDragging = true;
            startX = e.touches[0].clientX - actualX;
        }
    );

    container.addEventListener(
        "touchmove", e => {
            if (!isDragging) return;
            actualX = e.touches[0].clientX - startX;

            if (actualX > maxX) actualX = maxX;
            if (actualX < minX) actualX = minX;

            container.style.left = `${actualX}px`;
        }
    );

    container.addEventListener(
        "touchend", () => {
            isDragging = false;
        }
    );

    document.querySelectorAll(".hotspot").forEach(
        hotspot => {
            hotspot.addEventListener(
                "click", () => {
                    if (!hotspot.classList.contains("found")) {
                        hotspot.classList.add("found");
                        score++;
                    }
                }
            );
        }
    );

}

