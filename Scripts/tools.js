const newTool = [
    {
        id: 0,
        language: 'JAVASCRIPT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        desc: 'Programming language that is one of the core technologies of the World Wide Web.',
        longDesc: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/JavaScript',
        resource2: 'W3schools',
        link2: 'https://www.w3schools.com/js/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
        filterAtributes:['language','developer','popular','begginers','open'],
    },
    {
        id: 1,
        language: 'REACT',
        icon: 'https://icon-library.com/images/react-icon/react-icon-15.jpg',
        desc: 'React is a free and open-source front-end JavaScript library ',
        longDesc: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/React_(JavaScript_library',
        resource2: 'React Website',
        link2: 'https://reactjs.org/',
        resource3: 'W3schools',
        link3: 'https://www.w3schools.com/whatis/whatis_react.asp',
        filterAtributes:['framework','developer','designer','popular','open'],

    },
    {
        id: 2,
        language: 'ANGULAR',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        desc: 'Angular is a TypeScript-based open-source web application framework ',
        longDesc: 'Angular (commonly referred to as "Angular 2+" or "Angular CLI") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
        resource2: 'Angular Website',
        link2: 'https://angular.io/',
        resource3: 'W3schools',
        link3: 'https://www.w3schools.com/angular/angular_intro.asp',
        filterAtributes:['framework','developer','popular','open'],
    },
    {
        id: 3,
        language: 'VUE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        desc: 'Vue.js is a model–view–viewmodel front end JavaScript framework',
        longDesc: 'Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/Vue.js',
        resource2: 'Vue Website',
        link2: 'https://vuejs.org/',
        resource3: 'W3schools',
        link3: 'https://www.w3schools.com/whatis/whatis_vue.asp',
        filterAtributes:['framework','developer','designer','open'],

      },
    {
        id: 4,
        language: 'DENO',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg',
        desc: 'Deno is a runtime for JavaScript, TypeScript, and WebAssembly',
        longDesc: `Deno is a runtime for JavaScript, TypeScript, and WebAssembly that is based on the V8 JavaScript engine and the Rust programming language. Deno was co-created by Ryan Dahl, who also created Node.js.`,
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/Deno_(software)',
        resource2: 'Deno Website',
        link2: 'https://deno.land/',
        resource3: '',
        link3: '',
        filterAtributes:['developer','open'],

    },
    {
        id: 5,
        language: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        desc: 'Cascading Style Sheets (CSS) is a style sheet language',
        longDesc: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`,
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/CSS',
        resource2: 'W3schools',
        link2: 'https://www.w3schools.com/css/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        filterAtributes:['language','designer','popular','open', 'begginers'],

    },
    {
        id: 6,
        language: 'NODE',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
        desc: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment',
        longDesc: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.`,
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/Node.js',
        resource2: 'Node Website',
        link2: 'https://nodejs.org/en/',
        resource3: 'W3schools',
        link3: 'https://www.w3schools.com/nodejs/nodejs_intro.asp',
        filterAtributes:['developer','popular','open'],
    },
    {
        id: 7,
        language: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        desc: 'HTML is the language for describing the structure of Web pages.',
        longDesc: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,(HyperText%20Markup%20Language)',
        resource2: 'W3schools',
        link2: 'https://www.w3schools.com/html/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
        filterAtributes:['language','designer','popular','open','begginers'],
    },
    {
        id: 8,
        language: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        desc: 'A popular general-purpose scripting language that is especially suited to web development',
        longDesc: 'PHP is a general-purpose scripting language geared toward web development.It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/PHP',
        resource2: 'W3schools',
        link2: 'https://www.w3schools.com/php/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Glossary/PHP',
        filterAtributes:['language','developer','popular','open','begginers'],
    },
    {
        id: 9,
        language: 'BOOTSTRAP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        desc: 'A free and open-source CSS framework directed at responsive web development.',
        longDesc: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components. As of July 2022, Bootstrap is the eighth most starred project on GitHub, with over 158,000 stars.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)',
        resource2: 'Bootstrap Website',
        link2: 'https://getbootstrap.com/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Glossary/Bootstrap',
        filterAtributes:['designer','popular','open','begginers'],
    },
    {
        id: 10,
        language: 'TYPESCRIPT',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        desc: 'TypeScript is a programming language developed and maintained by Microsoft',
        longDesc: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/TypeScript',
        resource2: 'Typescript Website',
        link2: 'https://www.typescriptlang.org/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript#why_typescript',
        filterAtributes:['language','developer','open'],
    },
    {
        id: 11,
        language: 'jQuery',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        desc: 'A JavaScript Library that focuses on simplifying DOM manipulation and Event handling',
        longDesc: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library.',
        resource1: 'Wikipedia',
        link1: 'https://en.wikipedia.org/wiki/JQuery',
        resource2: 'jQuery Website',
        link2: 'https://jquery.com/',
        resource3: 'MDN',
        link3: 'https://developer.mozilla.org/en-US/docs/Glossary/jQuery',
        filterAtributes:['developer','open'],

    },

]
