const projects = [
    {
      title: "Bus Tracker App",
      description: "Karachi ke public transport ke liye real-time tracking app.",
    },
    {
      title: "Bank Management System",
      description: "Ek system jo customer accounts aur transactions handle karta hai.",
    },
    {
      title: "Waste Management Dashboard",
      description: "Plastic waste ka analysis aur management ke liye dashboard.",
    }
  ];
  
  const projectSection = document.getElementById("projects");
  
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";
  
    div.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;
  
    projectSection.appendChild(div);
  });
  