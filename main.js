let targets = document.querySelector(".yearly-targets");
let targetsProgress = Array.from(
  document.querySelectorAll(".yearly-targets > div .progres span ")
);

let statistics = document.querySelector(".tickets-statistics");
let statisticsArray = document.querySelectorAll(
  ".tickets-statistics > div > div span"
);

let search = document.querySelector(".top-search");
let searchArray = Array.from(
  document.querySelectorAll(".top-search .row span")
);

let projects = document.querySelector(".projects");
let projectsArray = Array.from(
  document.querySelectorAll(".projects table tbody tr .price")
);

let startStats = true;
let startSearch = true;
let startProjects = true;

window.onscroll = () => {
  let offesetTopTargets = targets.offsetTop;
  let offesetTopStatistics = statistics.offsetTop;
  let offesetTopSearch = search.offsetTop;
  let offesetTopProject = projects.offsetTop;
  let windowHeight = this.scrollY;
  if (windowHeight >= offesetTopTargets) {
    targetsProgress.forEach((target) => {
      target.style.width = target.dataset.width;
    });
  }
  if (windowHeight >= offesetTopStatistics) {
    if (startStats) {
      statisticsArray.forEach((stats) => {
        startCount(stats);
        startStats = false;
      });
    }
  }
  if (windowHeight >= offesetTopSearch) {
    if (startSearch) {
      searchArray.forEach((search) => {
        startCount(search);
        startSearch = false;
      });
    }
  }
  if (windowHeight >= document.body.offsetHeight - offesetTopProject + 50) {
    console.log("yes");
    if (startProjects) {
      console.log("yes2");
      projectsArray.forEach((project) => {
        startCount(project);
        startProjects = false;
      });
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let interval = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(interval);
    }
  }, 2000 / goal);
}
