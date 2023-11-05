function openTab(tabName) {
    let i;
    let tabContent;
    
    tabContent = document.getElementsByClassName("tab-contents");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "flex";
}


// This needs to DRY'ed up so it can be used with a CMS
let designLinkEl = document.getElementById("DesignLink");
let progLinkEl = document.getElementById("ProgLink");
let musicLinkEl = document.getElementById("SupportLink");
let networkLinkEl = document.getElementById("networkLink");

designLinkEl.addEventListener("click", function(){openTab("Design")}, false);
progLinkEl.addEventListener("click", function(){openTab("Programming")}, false);
musicLinkEl.addEventListener("click", function(){openTab("Support")}, false);
networkLinkEl.addEventListener("click", function(){openTab("network")}, false);