const scrollSnap1 = document.getElementById("scrollSnap1");
const scrollSnap1_slides = scrollSnap1.children.length;
let scrollSnap1_current = 0;

function next_scrollSnap1() {
    scrollSnap1.scrollLeft = ((scrollSnap1_current + 1) < scrollSnap1_slides) 
        ? ((scrollSnap1_current + 1) * 600) 
        : 0;

    scrollSnap1_current = ((scrollSnap1_current + 1) < scrollSnap1_slides) 
        ? scrollSnap1_current + 1 
        : 0;
}