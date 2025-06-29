// ! 
// ! UNSUBSCRIBE FROM EVERYONE
// ! PLEASE note that to unsubscribe all users at once, you'll first have to scroll down the subscriptions page to load everything.
// !

// Retrieves all tracking buttons that have been LOADED
let elements = [...document.querySelectorAll('*')].filter(el => {
    return [...el.attributes].some(attr =>
        attr.name.startsWith('data-') && attr.value === 'follow-button'
    );
});

let unfollowedCount = 0;
let index = 0;

console.log("➡️ Found " + elements.length + " elements. Starting unfollow process...");

if (elements.length === 0) {
    console.log("❌ No follow buttons found. Try scrolling down the page. Or reload the page.");
} else {
    const interval = setInterval(() => {
        if (index >= elements.length) {
            clearInterval(interval);
            console.log("✅ Done. Total unfollowed: " + unfollowedCount);
            return;
        }

        const el = elements[index];
        if (el) {
            el.click();
            console.log("❎ Unfollowed #" + (unfollowedCount + 1));
            unfollowedCount++;
        }

        index++;
    }, 1000);
}
