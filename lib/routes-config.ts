// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Stepper", href: "/stepper" },
          { title: "Tabs", href: "/tabs" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
          { title: "Image & Link", href: "/image-link" },
          { title: "Custom", href: "/custom" },
        ],
      },
      { title: "Themes", href: "/themes" },
      { title: "Customize", href: "/customize" },
    ],
  },
  {
    title: "Programming Languages",
    href: "/programming-languages",
    noLink:true,
    items: [
      { title: "Python", href: "/python" }, 
      { title: "JavaScript", href: "/javascript" },
      { title: "Java", href: "/java" },
      { title: "C++", href: "/c++" },
      { title: "C#", href: "/c#" },
      { title: "Ruby", href: "/ruby" },
      { title: "Swift", href: "/swift" },
      { title: "Kotlin", href: "/kotlin" },
    ],
  },
  {
    title: "Web Development",
    href: "/web-development",
    noLink: true,
    items: [
      { title: "Frontend Development", href: "/frontend-development" },
      { title: "Backend Development", href: "/backend-development" },
      { title: "APIs", href: "/apis" },
    ],
  },
  {
    title: "Mobile Development",
    href: "/mobile-development",
    noLink: true,
    items: [
      { title: "Android", href: "/android" },
      { title: "iOS", href: "/ios" },
      { title: "Flutter", href: "/flutter" },
      { title: "React Native", href: "/react-native" },
    ],
  },
  {
    title: "Game Development",
    href: "/game-development",
    noLink: true,
    items: [
      { title: "Unity", href: "/unity" },
      { title: "Unreal Engine", href: "/unreal-engine" },
      { title: "Godot", href: "/godot" },
    ],
  },
  {
    title: "Data Science and Machine Learning",
    href: "/data-science-and-machine-learning",
    noLink: true,
    items: [
      { title: "Data Analysis", href: "/data-analysis" },
      { title: "Machine Learning", href: "/machine-learning" },
      { title: "Data Engineering", href: "/data-engineering" },
      { title: "Data Visualization", href: "/data-visualization" },
    ],
  },
  {
    title: "Cloud and DevOps",
    href: "/cloud-and-devops",
    noLink: true,
    items: [
      { title: "Cloud Providers", href: "/cloud-providers" },
      { title: "Containerization", href: "/containerization" },
      { title: "CI/CD", href: "/ci-cd" },
      { title: "Infrastructure as Code", href: "/infrastructure-as-code" },
    ],
  },
  {
    title: "Database Systems",
    href: "/database-systems",
    noLink: true,
    items: [
      { title: "SQL Databases", href: "/sql-databases" },
      { title: "NoSQL Databases", href: "/nosql-databases" },
      { title: "Data Modeling and Optimization", href: "/data-modeling-and-optimization" },
    ],
  },
  {
    title: "Cybersecurity",
    href: "/cybersecurity",
    noLink: true,
    items: [
      { title: "Web Security", href: "/web-security" },
      { title: "Network Security", href: "/network-security" },
      { title: "Ethical Hacking", href: "/ethical-hacking" },
    ],
  },
  {
    title: "Software Development Principles",
    href: "/software-development-principles",
    noLink: true,
    items: [
      { title: "Design Patterns", href: "/design-patterns" },
      { title: "Architectures", href: "/architectures" },
      { title: "Agile and Scrum", href: "/agile-and-scrum" },
      { title: "Testing", href: "/testing" },
    ],
  },
  {
    title: "Tools and Utilities",
    href: "/tools-and-utilities",
    noLink: true,
    items: [
      { title: "Text Editors and IDEs", href: "/text-editors-and-ides" },
      { title: "Build Tools", href: "/build-tools" },
      { title: "Package Managers", href: "/package-managers" },
      { title: "Collaboration Tools", href: "/collaboration-tools" },
      { title: "Version Control and GitHub", href: "/version-control-and-github",noLink:true,items:[
        { title: "Delete Latest Commit", href: "/delete-latest-commit" },
      ] }, 
    ],
  },
  {
    title: "Emerging Technologies",
    href: "/emerging-technologies",
    noLink: true,
    items: [
      { title: "Blockchain and Cryptography", href: "/blockchain-and-cryptography" },
      { title: "Artificial Intelligence", href: "/artificial-intelligence" },
      { title: "AR and VR", href: "/ar-and-vr" },
      { title: "Internet of Things", href: "/internet-of-things" },
    ],
  },
  {
    title: "Project Ideas and Case Studies",
    href: "/project-ideas-and-case-studies",
    noLink: true,
    items: [
      { title: "Beginner Projects", href: "/beginner-projects" },
      { title: "Intermediate Projects", href: "/intermediate-projects" },
      { title: "Advanced Projects", href: "/advanced-projects" },
      { title: "Case Studies", href: "/case-studies" },
    ],
  },
];


type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
