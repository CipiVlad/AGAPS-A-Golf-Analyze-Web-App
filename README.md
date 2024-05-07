# AGAPS-A-Golf-Analyze-Web-App

<!-- dev mode -->
npm run dev

<!-- compile ts to use on render.com -->
npm run build

## Overview

### Usage / Idea

### Challenges

#### Problem:
##### Task server site

(1) User selects courseInfo with input "course = 'GCK'" and "round = 'half'/'full' " » id is set by db on default
(2) User input into agapsTable with inputs like 'hole', 'roundId'


##### Task client site
- client :
(3) binding courseInfo and agapsTable -- matching roundId to id of courseInfo
(4) take id of courseInfo slected, and set it equal to roundId
(5) when 18 holes finished, binding is done

### Screenshot

### Links

### Tools / Built
- OS: Arch - Linux (ArcoLinux)
- Bulilt with Typescript (server and client)
- Tech - Stack: 
    -- IDE: vscode, Thunderclient / Postman
    -- Serversite: nodejs, express, mysql, workbench mysql
    -- Clientsite: vite, react, axios
    -- Hosting/Web Service: render.com
    -- Mobile First

- Project Management Tools:
    -- figma
    -- trelloboard


### Helpful Ressources
[set up](https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/)
[bezkoder - crud app with mysql, nodejs, react and expressjs](https://www.bezkoder.com/react-node-express-mysql/)
[react-select-onChange](https://bobbyhadz.com/blog/react-select-onchange)
[create mysql pool](https://github.com/mysqljs/mysql/issues/1166)
[passing data with useNaviagate, Link ](https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically)