     var tabLinks = document.getElementsByClassName("tab-links");
        var tabContents = document.getElementsByClassName("tab-contents");

        function openTab(tabName, event, clickedElement) {
            for (let tabLink of tabLinks) {
                tabLink.classList.remove("active-link");
            }

            for (let tabContent of tabContents) {
                tabContent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");


        if (clickedElement) {
        clickedElement.classList.add("active-link");
    } else if (event && event.currentTarget) {
        event.currentTarget.classList.add("active-link");
    }

    // 4. Reveal the correct selected text block dynamically
    document.getElementById(tabName).classList.add("active-tab");
}


        var sidemenu = document.getElementById("sidemenu");
        function openMenu() {
            sidemenu.style.right = "0";
        }
        function closeMenu() {
            sidemenu.style.right = "-200px";
        }

       const scriptURL = 'https://script.google.com/macros/s/AKfycbysafx9hk8XNYRI-iMknJ_n5zHyBktNDiEs4BPP_QtAjoR_gBtF1r_BDDZhYYRpBKl3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // This runs as long as the server responds, ignoring JSON formatting errors
            msg.innerHTML = "Message sent successfully"
            
            // Instantly clears out your input fields
            form.reset() 
            
            // Clears out the confirmation message after 5 seconds
            setTimeout(function(){
               msg.innerHTML = ""
            }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})
