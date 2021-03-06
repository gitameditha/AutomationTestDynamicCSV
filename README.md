# Automation Test Websites using Cypress with Cucumber and Dynamic input from CSV

Automation testing websites using Cypress with Cucumber


## Requirement
```
node installation
```

## Installation

- package.json
```
"devDependencies": {
    "cypress": "^4.4.0",
    "cypress-cucumber-preprocessor": "^2.5.3",
    "cypress-dotenv": "^1.2.2",
    "dotenv": "^8.2.0",
    "multiple-cucumber-html-reporter": "^1.16.1",
    "mysql": "^2.18.1"
  }
```

- install modules
```
npm install
```

## env

```
cp env.sample .env
```
```
BUKALAPAK_URL=https://www.bukalapak.com
```
    
## How To Run
```
npm run cypress         #Running test case
```

## Structure
```
Folder PATH listing for volume Bucket
Volume serial number is D230-49A0
D:.
│   .env
│   .gitignore
│   cypress.json
│   package-lock.json
│   package.json
│   README.md
│   tree.txt
│   
└───cypress
    │   cypress_report.js
    │   
    ├───fixtures
    │   │   response_code.json
    │   │   
    │   └───seed_data
    │           data.csv
    │           dataFromCsv.json
    │           data_seed.json
    │           parser.ts
    │           
    ├───integration
    │   │   addTocart.feature
    │   │   
    │   └───common
    │           addTocart.js
    │           
    ├───plugins
    │       index.js
    │       
    ├───reports
    │   └───results
    │           addTocart.cucumber.json
    │           registrasi.cucumber.json
    │           
    ├───screenshots
    ├───support
    │       commands.js
    │       index.js
    │       
    └───videos
            registrasi.feature.mp4
            
```



## Report

report it can be 3 type :
- Screeshoots
- Video
- Json

## Notes
- this project use Windows set up, so need to simple set up if wanna use unix

