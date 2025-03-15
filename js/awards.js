const awards = [
    {
        title: "Marconi Society Young Scholar Award",
        year: "2024",
        description: "Marconi Society recognizes outstanding young scientists and engineers anywhere in the world.",
        image: "./assets/awards/marconi1_2024.png",
        link: "https://marconisociety.org/ys-bio/nakul-garg-2024/"
    },
    {
        title: "Best Poster Runner-Up Award (Project LiTEfoot)",
        year: "2024",
        description: "LiTEfoot, a cellular-based ultra-low-power asset tracking tag, wins best poster award at SenSys 2024.",
        image: "./assets/awards/sensys_2024.png",
        link: "https://sensys.acm.org/2024/demos/"
    },
    {
        title: "Cyber-Physical Systems (CPS) Rising Star",
        year: "2024",
        description: "Selected as a rising star in the field of cyber-physical systems research.",
        image: "./assets/awards/cps_2024.png",
        link: "https://risingstars.linklab.virginia.edu/2024/participants/nakul-garg.html"
    },
    {
        title: "Distinguished Artifact Reviewer Award",
        year: "2024",
        description: "Awarded for detialed, objective, timely and informative reviews in artifact review process.",
        image: "./assets/awards/mobisys_reviewer_2024.png",
        link: "https://www.sigmobile.org/mobisys/2024/"
    },
    // {
    //     title: "ACM SIGMOBILE Research Highlight (Project SPiDR)",
    //     year: "2024",
    //     description: "Project SPiDR selected as a research highlight by ACM SIGMOBILE.",
    //     image: "./assets/awards/sigmobile_highlight.png",
    //     link: "https://www.sigmobile.org/grav/publications/research-highlights"
    // },
    {
        title: "Best Poster Award (Project Sirius)",
        year: "2023",
        description: "Sirius, a solution for ultra-low-power self-localization on resource constrained devices, wins best poster award at MobiSys 2023.",
        image: "./assets/awards/mobisys_2023.png",
        link: "https://www.sigmobile.org/mobisys/2023/"
    },
    {
        title: "Ann G. Wylie Dissertation Fellowship",
        year: "2023",
        description: "Awarded by University of Maryland to support outstanding doctoral dissertation research.",
        image: "./assets/awards/wylie_fellowship.png",
        link: "https://www.cs.umd.edu/article/2024/04/three-phd-students-honored-ann-g-wylie-dissertation-fellowship"
    },
    {
        title: "UMD Future Faculty Fellowship",
        year: "2023",
        description: "Fellowship awarded to promising doctoral candidates preparing for academic careers.",
        image: "./assets/awards/future_faculty.png",
        link: "https://eng.umd.edu/future-faculty-program"
    },
    {
        title: "Outstanding Teaching Assistant Award",
        year: "2023",
        description: "Recognition for excellence in teaching, awarded to top 2% of 2800+ Teaching Assistants at UMD.",
        image: "./assets/awards/teaching_award.png",
        link: "https://gradschool.umd.edu/funding/student-fellowships-awards/outstanding-graduate-assistant-awards"
    },
    {
        title: "Best Paper Award (Project SPiDR)",
        year: "2022",
        description: "SPiDR, an ultra-low-power spatial sensing system for miniature mobile robots, wins best paper award at MobiSys 2022.",
        image: "./assets/awards/mobisys_2022.png",
        link: "https://www.sigmobile.org/mobisys/2022/"
    },
    {
        title: "Best Demo Award (Project Owlet)",
        year: "2021",
        description: "Owlet, the low-power and miniaturized spatial sensing system, wins best demo award at MobiSys 2021.",
        image: "./assets/awards/mobisys_2021.png",
        link: "https://www.sigmobile.org/mobisys/2021/"
    },
    {
        title: "President of India Award at World Food Hackathon",
        year: "2017",
        description: "Project recognized by the President of India for innovation in food safety.",
        image: "./assets/awards/food_safety.png",
        link: "https://blog.mygov.in/world-food-india-hackathon-winner-announcement/"
    },
    {
        title: "Celestini Project India Recipient",
        year: "2017",
        description: "Celestini Program is a flagship event by Marconi Society where students create technological solutions for social and economic impact.",
        // image: "./assets/awards/celestini.png",
        image: "./assets/awards/celestini2.png",
        link: "https://marconisociety.org/programs-services/celestini-program/"
    },
    {
        title: "First Place, eYantra Robotics Competition",
        year: "2017",
        description: "eYantra is the national robotics competition organized by IIT Bombay in India.",
        image: "./assets/awards/eyantra_2017.png",
        link: "https://www.e-yantra.org/"
    }
];

function createAwardItem(award) {
    return `
        <div class="award-item">
            <div class="award-content">
                <div class="award-image">
                    <img 
                        src="${award.image}" 
                        alt="Award image for ${award.title}" 
                        loading="lazy"
                        width="200"
                        height="200"
                    />
                </div>
                <div class="award-details">
                    <h3 class="award-title">
                        ${award.link ? 
                            `<a href="${award.link}" target="_blank">${award.title}</a>` : 
                            award.title
                        }
                    </h3>
                    <p class="award-year">${award.year}</p>
                    ${award.description ? 
                        `<p class="award-description">${award.description}</p>` : 
                        ''
                    }
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const awardsList = document.getElementById('awards-list');
    if (awardsList) {
        const fragment = document.createDocumentFragment();
        
        awards.forEach(award => {
            const div = document.createElement('div');
            div.innerHTML = createAwardItem(award);
            fragment.appendChild(div.firstElementChild);
        });
        
        awardsList.appendChild(fragment);
    }
});