const projects = [
    {
        title: "ADLC",
        type: "Court-métrage",
        duration: "2'20 min",
        image: "/Images/AFFICHE_PULSION_V2.png",
        link: "/Fictions/adlc.html"
      }
    {
      title: "RUPTUR",
      type: "Court-métrage",
      duration: "9 min",
      image: "/Images/AFFICHE_RUPTUR_9_16_V2_LOW.jpg",
      link: "/Fictions/ruptur.html"
    },
    {
      title: "PULSION",
      type: "Court-métrage",
      duration: "20 min",
      image: "/Images/AFFICHE_PULSION_V2.png",
      link: "/Fictions/pulsion.html"
    }
  ];
  
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    item.innerHTML = `
      <a href="${project.link}" class="project-item text-decoration-none text-white d-block">
        <div class="project-item">
          <img src="${project.image}" alt="Affiche ${project.title}" class="project-image">
          <div class="project-info">
            <div class="project-title">${project.title}</div>
            <div class="project-meta">${project.type} · ${project.duration}</div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(item);
  });
  