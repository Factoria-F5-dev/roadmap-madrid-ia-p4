document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Generate the roadmap on page load
    generateGantt();
});

const data = [
    {
        type: "Proyecto",
        name: "App con Python | <i class='bi bi-person-fill'></i> (Alex)",
        start: 1,
        end: 2,
    },
    {
        type: "Proyecto",
        name: "Un CRUD | <i class='bi bi-people-fill'></i> (Alex)",
        start: 3,
        end: 5,
    },
    {
        type: "Proyecto",
        name: "Web Scraping | <i class='bi bi-person-fill'></i> (Jorge)",
        start: 6,
        end: 7,
    },
    {
        type: "Proyecto",
        name: "Datathon | <i class='bi bi-person-fill'></i>",
        start: 8,
        end: 8,
    },
    {
        type: "Proyecto",
        name: "Problema de regresión (regresión lineal) | <i class='bi bi-person-fill'></i> ",
        start: 9,
        end: 10,
    },
    {
        type: "Proyecto",
        name: "Problema de clasificación (Regresión logística binaria y multiclase) | <i class='bi bi-person-fill'></i>",
        start: 11,
        end: 12,
    },
    {
        type: "Proyecto",
        name: "Modelo de libre elección | <i class='bi bi-person-fill'></i>",
        start: 13,
        end: 15,
    },
    {
        type: "Transición",
        name: "Transición flexible",
        start: 16,
        end: 19,
    },
    {
        type: "Proyecto",
        name: "Tracks (Data Analyst, Data Engineer, AI Developer) | <i class='bi bi-people-fill'></i>",
        start: 20,
        end: 23,
    },
    {
        type: "Proyecto",
        name: "NLP (Youtube comments) | <i class='bi bi-people-fill'></i>",
        start: 24,
        end: 26,
    },
    {
        type: "Proyecto",
        name: "LLM (Rag + agentes) | <i class='bi bi-people-fill'></i>",
        start: 27,
        end: 29,
    },
    {
        type: "Proyecto",
        name: "Computer vision | <i class='bi bi-people-fill'></i>",
        start: 30,
        end: 32,
    },
    {
        type: "Proyecto",
        name: "Proyectos Finales | <i class='bi bi-people-fill'></i>",
        start: 33,
        end: 36,
    },
    {
        type: "Tema",
        name: "<a href='https://github.com/Factoria-F5-dev/python-intro' target='blank'>Introducción a Python<a> (Alex), Entornos de desarrollo: Pycharn, Jupyter, Colab, etc. (Alex),",
        start: 1,
        end: 1,
    },
    {
        type: "Tema",
        name: "Buenas prácticas: Programación funcional, OOP, <a href='https://github.com/Factoria-F5-dev/git-flow'>Git</a>, <a href='https://github.com/Factoria-F5-dev/docker'>Docker</a>, Testing. (Jorge)",
        start: 3,
        end: 3,
    },
    {
        type: "Tema",
        name: "BBDD: <a href='https://github.com/Factoria-F5-dev/mysql' target='blank'>SQL (Mysql)</a>, <a href='https://github.com/Factoria-F5-dev/mongo' target='blank'>NoSQL (Mongo)</a>, ORM/ODM y Despliegue en producción: APIs Rest, Render, Azure (Alex)",
        start: 4,
        end: 4,
    },
    {
        type: "Tema",
        name: "Web Scraping: HTML, CSS, JS, Selenium, Scrapy, DOM (Jorge)",
        start: 6,
        end: 6,
    },
    {
        type: "Tema",
        name: "Intro a Análisis exploratorio de Datos (EDA), pandas, numpy, scikitlearn, matplotlib, visualización de datos.",
        start: 8,
        end: 8,
    },
    {
        type: "Tema",
        name: "Intro a mates y estadística (Derivadas, límites, métricas, distribuciones).",
        start: 9,
        end: 9,
    },
    {
        type: "Tema",
        name: "Intro a machine learning (Tipos de modelos) y regresión lineal (Modelos, entrenamiento, evaluación, regresión lineal).",
        start: 10,
        end: 10,
    },
    {
        type: "Tema",
        name: "Intro a modelo de clasificación binaria (Regresión logística, modelos, entrenamiento, evaluación).",
        start: 13,
        end: 13,
    },
    {
        type: "Tema",
        name: "Intro a modelo de clasificación multiclase y ajuste de modelo.",
        start: 14,
        end: 14,
    },
    {
        type: "Transición",
        name: "Transición flexible",
        start: 16,
        end: 19,
    },
    {
        type: "Tema",
        name: "Intro a los roles IA [Data Analist, Data Engineer, Data Scientist]",
        start: 20,
        end: 20,
    },
    {
        type: "Tema",
        name: "Intro a Spacy, NLTK, Word2Vec",
        start: 24,
        end: 24,
    },
    {
        type: "Tema",
        name: "Intro a Langchain, LLMs, Embedings, Vector DB.",
        start: 27,
        end: 27,
    },
    {
        type: "Tema",
        name: "Intro a OpenCV, YoloV11.",
        start: 30,
        end: 30,
    },
];

function generateGantt() {
    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = ""; 

    let periodHeaderRow = "<tr><th>Periodo</th>";

    const periods = [
        { name: "The Field", start: 1, end: 7 },
        { name: "The Hill", start: 8, end: 15 },
        { name: "The Mountain", start: 17, end: 24 },
        { name: "The Peak", start: 24, end: 32 },
        { name: "The Valley", start: 33, end: 36 },
    ];

    periods.forEach(period => {
        let colspan = period.end - period.start + 1;
        periodHeaderRow += `<th colspan="${colspan}">${period.name}</th>`;
    });
    periodHeaderRow += "</tr>";
    table.innerHTML = periodHeaderRow;

    let moduleHeaderRow = "<tr><th>Módulos</th>";
    const modules = [
        { name: "Módulo 1", start: 1, end: 7 }, 
        { name: "Módulo 2", start: 8, end: 15 }, 
        { name: "Módulo 3", start: 17, end: 33 }, 
        { name: "End", start: 33, end: 36 }, 
    ];

    modules.forEach(module => {
        let colspan = module.end - module.start + 1;
        moduleHeaderRow += `<th colspan="${colspan}">${module.name}</th>`;
    });
    moduleHeaderRow += "</tr>";
    table.innerHTML += moduleHeaderRow;

    let monthHeaderRow = "<tr><th>Meses</th>";
    for (let i = 1; i <= weeks; i += 4) {
        const month = Math.ceil(i / 4);
        let colspan = Math.min(4, weeks - i + 1); 
        monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
    }
    monthHeaderRow += "</tr>";
    table.innerHTML += monthHeaderRow;

    let weekHeaderRow = "<tr><th>Elemento</th>";
    for (let i = 1; i <= weeks; i++) {
        weekHeaderRow += `<th>${i}</th>`;
    }
    weekHeaderRow += "</tr>";
    table.innerHTML += weekHeaderRow;

    let lastEnd = 0;

    data.forEach((item) => {
        let colorClass = "";
        let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
        let iconoTema = '<i class="bi bi-book-fill"></i>';
        let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
        let icon = '';

        if (item.type === "Proyecto") {
            colorClass = "proyecto";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoProject;
        } else if (item.type === "Tema") {
            colorClass = "tema";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoTema;
        } else if (item.type === "Transición") {
            colorClass = "transicion";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoIntegracion;
        }

        lastEnd = item.end;

        let row = `<tr><td class="label ${colorClass}">${icon} ${item.name}</td>`;

        for (let i = 1; i <= weeks; i++) {
            if (i >= item.start && i <= item.end) {
                row += `<td class="block ${colorClass}"></td>`;
            } else {
                row += `<td class="empty"></td>`;
            }
        }

        row += "</tr>";
        table.innerHTML += row;
    });

    table.style.width = `${weeks * 30 + 260}px`; 
}
