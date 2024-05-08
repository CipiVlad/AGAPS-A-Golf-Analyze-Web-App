# AGAPS-A-Golf-Analyze-Web-App

<!-- dev mode -->
npm run dev

<!-- compile ts to use on render.com -->
npm run build

## Overview

### Usage / Idea

### Challenges

#### Issues:
##### Task server site

(1) User selects courseInfo with input "course = 'GCK'" and "round = 'half'/'full' " » id is set by db on default
(2) User input into agapsTable with inputs like 'hole', 'roundId'


##### Task client site
- client :
(1) when User selects 'half' end round after 9 holes, 'full' after 18
(3) binding courseInfo and agapsTable -- matching roundId to id of courseInfo

(4) take id of courseInfo slected, and set it equal to roundId 
    --> passing state with useNavigate to certain Components like: HoleCardStart.tsx and InputFields.tsx
 ```js
 ///  useNavigate
    navigate("/hole-card/1", { state: newPostObj.roundId })
 ```
(5) when User:
    -- is in round and ends round before finishing 'half' or 'full' by leaving window
        -- send message to User: "Do you really want to finish round here?"
        -- let User continue where left
        -- make use of sessionStorage?

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