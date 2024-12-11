const publications = [
    {
        title: "Large Network UWB Localization: Algorithms and Implementation",
        authors: ["N. Garg", "I. Shahid", "R. K. Sheshadri", "K. Sundaresan", "N. Roy"],
        venue: "NSDI 2025",
        image: "./assets/overview_figures/locate3d.png",
        links: [
        { text: "Paper", url: "assets/papers/locate3d_nsdi2025_nakul.pdf" },
            // { text: "Video", url: "#" },
            // { text: "Code", url: "#" },
            // { text: "Dataset", url: "#" }
        ],
        awards: []
    },
    {
        title: "LiTEfoot: Ultra-low-power Localization using Ambient Cellular Signals",
        authors: ["N. Garg<sup>*</sup>", "A. Ghosh<sup>*</sup>", "N. Roy"],
        venue: "Sensys 2024",
        image: "./assets/overview_figures/litefoot.png", // You'll need to provide this image
        links: [
        { text: "Paper", url: "assets/papers/litefoot_sensys2024_nakul.pdf" },
            // { text: "Code", url: "#" },  // Update with actual link when available
            // { text: "Video", url: "#" }  // Update with actual link when available
        ],
        awards: ["Best Poster Runner-up Award"]
    },
    {
        title: "FreshSense: Transforming Supply Chains with Low-Cost and Dynamic Food Quality Sensing at the Pallet-Level",
        authors: ["N. Garg", "N. Roy", "R. Chandra", "V. Ranganathan"],
        venue: "GetMobile 2024",
        image: "./assets/overview_figures/freshsense.png",
        links: [
        { text: "Paper", url: "" },
            // { text: "Video", url: "#" },
            // { text: "Code", url: "#" },
            // { text: "Dataset", url: "#" }
        ],
        awards: []
    },
    {
        title: "Sirius: A Self-Localization System for Resource-Constrained IoT Sensors",
        authors: ["N. Garg", "N. Roy"],
        venue: "Mobisys 2023",
        image: "./assets/overview_figures/sirius.png",
        links: [
            { text: "Paper", url: "assets/papers/sirius_mobisys2023_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_sirius_mobisys23.pptx" },
            { text: "Video", url: "https://youtu.be/JdCDbBUeu74" },
            { text: "Code", url: "https://github.com/Nakul22/Sirius" }
        ],
        awards: ["Best Poster Award"]
    },
    {
        title: "SPiDR: Ultra-low-power Acoustic Spatial Sensing for Micro-robot Navigation",
        authors: ["N. Garg<sup>*</sup>", "Y. Bai<sup>*</sup>", "N. Roy"],
        venue: "Mobisys 2022",
        image: "./assets/overview_figures/spidr.png",
        links: [
            { text: "Paper", url: "assets/papers/spidr_mobisys2022_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_spidr_mobisys22.pptx" },
            { text: "Video", url: "https://youtu.be/CoYIpEEFOxY" },
            { text: "Code", url: "https://github.com/Nakul22/Spidr_Mobisys22" }
        ],
        awards: ["Best Paper Award", "Communications of the ACM", "SIGMOBILE Research Highlight"]
    },
    {
        title: "Owlet: Enabling Spatial Information in Ubiquitous Acoustic Devices",
        authors: ["N. Garg<sup>*</sup>", "Y. Bai<sup>*</sup>", "N. Roy"],
        venue: "Mobisys, 2021",
        image: "./assets/overview_figures/owlet.png",
        links: [
            { text: "Paper", url: "assets/papers/owlet_mobisys2021_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_owlet_mobisys21.pptx" },
            { text: "Video", url: "https://youtu.be/pQqwYSWLHug" },
            { text: "Talk", url: "https://youtu.be/EFPvRxkjNuM" },
            { text: "Code", url: "https://github.com/Nakul22/Owlet_Mobisys21" }
        ],
        awards: ["Best Demo Award", "ACM GetMobile Cover"]
    },
    {
        title: "Enabling Self-defense in Small Drones",
        authors: ["N. Garg", "N. Roy"],
        venue: "HotMobile 2020",
        image: "./assets/overview_figures/dopplerdodge.png",
        links: [
            { text: "Paper", url: "assets/papers/dopplerdodge_hotmobile20_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_dopplerdodge_hotmobile20.pptx" },
            { text: "Talk", url: "https://youtu.be/d1zxUGb-2bM" }
        ],
        awards: []
    },
    {
        title: "Structure Assisted Spectrum Sensing for Low-power Acoustic Event Detection",
        authors: ["N. Garg", "H. Takawale", "Y. Bai", "I. Shahid", "N. Roy"],
        venue: "IASA CPS IoT Week, 2023",
        image: "./assets/overview_figures/lyra.png",
        links: [
            { text: "Paper", url: "assets/papers/lyra_iasa_cpsiotweek2023_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_lyra_iasa23.pptx" }
        ],
        awards: []
    },
    {
        title: "ThermWare: Towards Side-channel Defense for Tiny IoT Devices",
        authors: ["N. Garg", "I. Shahid", "E. Avllazagaj", "J. Hill", "J. Han", "N. Roy"],
        venue: "HotMobile 2023",
        image: "./assets/overview_figures/thermware.png",
        links: [
            { text: "Paper", url: "assets/papers/thermware_hotmobile23_nakul.pdf" },
            { text: "Slides", url: "assets/papers/slides_thermware_hotmobile23.pptx" }
        ],
        awards: []
    },
    {
        title: "VoiceFind: Noise-Resilient Speech Recovery in Commodity Headphones",
        authors: ["I. Shahid", "Y. Bai", "N. Garg", "N. Roy"],
        venue: "IASA Mobisys, 2022",
        image: "./assets/overview_figures/voicefind.png",
        links: [
            { text: "Paper", url: "assets/papers/voicefind_iasa_mobisys2022_nakul.pdf" }
        ],
        awards: []
    }
    ];

function createPublicationItem(pub) {
    const boldAuthors = pub.authors.map(author => 
        author.includes("N. Garg") ? `<strong>${author}</strong>` : author
    ).join(', ');

    return `
        <div class="publication-item">
            <div class="pub-content">
                <div class="pub-image">
                    <img src="${pub.image}" alt="${pub.title}" loading="lazy" />
                </div>
                <div class="pub-details">
                    <h3 class="pub-title">${pub.title}</h3>
                    <p class="pub-authors">${boldAuthors}</p>
                    <p class="pub-venue">${pub.venue}</p>
                    ${pub.awards.length > 0 ? `
                        <div class="pub-awards">
                            ${pub.awards.map(award => `<span class="award-tag">${award}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="pub-links">
                        ${pub.links.map(link => `
                            <a href="${link.url}" class="pub-link" target="_blank">${link.text}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const pubList = document.getElementById('pub-list');
    const fragment = document.createDocumentFragment();
    
    publications.forEach(pub => {
        const div = document.createElement('div');
        div.innerHTML = createPublicationItem(pub);
        fragment.appendChild(div.firstElementChild);
    });
    
    pubList.appendChild(fragment);
});