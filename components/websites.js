
$(document).ready(function () {
    // load all websites
    var allSites = JSON.parse(sitesJSON).websites;
    for (let i in allSites) {
        let website = allSites[i];

        $('#websiteList').append(
            $("<div class='col-12 col-md-4 col-sm-6 p-2' data-aos='fade'>"+
                "<a class='pointer' data-bs-toggle='modal' data-bs-target='#"+ website.id +"Modal'>" +
                "<img class='previewImg' src='"+ website.thumbImg +"' alt='"+ website.imgAlt +"'>"+
                "</a>" +
                "<div class='modal fade' id='"+ website.id +"Modal' tabindex='-1' aria-hidden='true'>"+
                    "<div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'>"+
                    "<div class='modal-header p-3'>" +
                    "<h5 class='modal-title'>" + website.name + "</h5>" +
                    "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div>"+
                    "<div class='modal-body p-4'>"+
                    "<p>" + website.desc + "</p>" +
                    "<div><a href='"+ website.url +"' target='_blank' rel='nofollow noreferrer' class='link--newTab'>Go to Website</a></div>" +
                "</div></div></div></div>" +
            +"</div>")
        );
    }
});

var sitesJSON = `{
    "websites": [
        {
            "name": "Summus Laser",
            "url": "https://summuslaser.com/",
            "date":"",
            "id":"summuslaser",
            "thumbImg": "assets/websitePreviews/preview_Summus.webp",
            "imgAlt": "A website preview of the first paint of summuslaser.com",
            "desc": "Summus Laser is the leading provider of laser therapy machines. This company was going through a massive rebrand and site overhaul. The main challenge of this site was including both B2B and B2C interfaces, and considering the unique user journeys of each user group."
        },
        {
            "name": "Pierpont Inn",
            "url": "https://pierpontinn.com/",
            "date":"",
            "id":"pierpontinn",
            "thumbImg": "assets/websitePreviews/preview_Pierpont.webp",
            "imgAlt": "A website preview of the first paint of pierpontinn.com",
            "desc": "Pierpont Inn is a historic hotel by the Ventura Pier in California. With it's rich history, my client was looking for a look-and-feel refresh and improved user experience, while preserving the established branding."
        },
        {
            "name": "Inner Minds Health",
            "url": "https://innermindshealth.com/",
            "date":"",
            "id":"innermindshealth",
            "thumbImg": "assets/websitePreviews/preview_InnerMinds.webp",
            "imgAlt": "A website preview of the first paint of innermindshealth.com",
            "desc": "Inner Minds Health is a mental health and eating disorder treatment center. In this project, I created their logo and established their company's branding & design language."
        },
        {
            "name": "Finish Line Recovery",
            "url": "https://californiarecovers.com/",
            "date":"",
            "id":"californiarecovers",
            "thumbImg": "assets/websitePreviews/preview_FinishLine.webp",
            "imgAlt": "A website preview of the first paint of californiarecovers.com",
            "desc": "Finish Line Recovery is an upscale sober living environment with multiple residences in LA County. The client was looking for rebrand along with their new site."
        },
        {
            "name": "ABC Wellness Group",
            "url": "https://awgderidder.com/",
            "date":"",
            "id":"awgderidder",
            "thumbImg": "assets/websitePreviews/preview_AWG.webp",
            "imgAlt": "A website preview of the first paint of awgderidder.com",
            "desc": "ABC Wellness Group serves as a psychiatric facility dedicated to offering treatment and care to individuals within their community. Their goal was to rebrand along with creating a new website."
        },
        {
            "name": "Hydrate Now",
            "url": "https://hydratenow.com/",
            "date":"",
            "id":"hydratenow",
            "thumbImg": "assets/websitePreviews/preview_HydrateNow.webp",
            "imgAlt": "A website preview of the first paint of hydratenow.com",
            "desc": "HydrateNow is an IV therapy medical spa that offers a variety of services for beauty and wellness. They came to us for a complete rebrand and improved user experience."
        },
        {
            "name": "Villa Oasis San Diego",
            "url": "https://villaoasissandiego.com/",
            "date":"",
            "id":"villaoasissandiego",
            "thumbImg": "assets/websitePreviews/preview_VO.webp",
            "imgAlt": "A website preview of the first paint of villaoasissandiego.com",
            "desc": "Villa Oasis is a drug and alcohol treatment center that wanted to redesign their site to highlight their incredible facility and the level of care that they offer."
        },
        {
            "name": "3 Thrones Hospitality",
            "url": "https://3throneshospitality.com/",
            "date":"",
            "id":"3throneshospitality",
            "thumbImg": "assets/websitePreviews/preview_3T.webp",
            "imgAlt": "A website preview of the first paint of 3throneshospitality.com",
            "desc": "3 Thrones is a hospitality investment firm that was looking for a portfolio site. The challenge was to create attractive and unique design to showcase their investments and properties."
        },
        {
            "name": "Refresh TMS",
            "url": "https://refreshtms.com/",
            "date":"",
            "id":"refreshtms",
            "thumbImg": "assets/websitePreviews/preview_RefreshTMS.webp",
            "imgAlt": "A website preview of the first paint of refreshtms.com",
            "desc": "Refresh TMS is a mental health facility who's site needed a visual overhaul. This was my first project at Webserv and was a wonderful learning experience to put design principles into practice."
        }
    ]}`;