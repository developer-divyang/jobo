document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".tab-container").forEach(tabContainer => {
        let tabButtons = tabContainer.querySelectorAll(".tab-button");
        let contentWrapper = tabContainer.nextElementSibling; // The wrapper containing tab contents

        if (!contentWrapper) return; // Skip if no content found

        let tabContents = contentWrapper.querySelectorAll(".tab-content");

        // Show default active tab for each section
        let defaultTab = tabContainer.querySelector(".tab-button.active");
        if (defaultTab) {
            let tabName = defaultTab.getAttribute("onclick").match(/'([^']+)'/)[1];
            document.getElementById(tabName).classList.add("active");
        }

        tabButtons.forEach(button => {
            button.addEventListener("click", function(event) {
                let tabName = this.getAttribute("onclick").match(/'([^']+)'/)[1];

                // Remove active class from all buttons in this container
                tabButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                // Hide all tab contents in this section
                tabContents.forEach(content => content.classList.remove("active"));

                // Show the selected tab content
                let activeContent = document.getElementById(tabName);
                if (activeContent) {
                    activeContent.classList.add("active");
                }
            });
        });
    });
});
