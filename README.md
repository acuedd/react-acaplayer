# Installation

At the beginning you need to have install nvm or node version >=14.0

Check your node version: 
```
node -v
```

Install dependencies:

```
yarn install
```

## Run locally
You need to modify your package.json. 

Go to package.json file and modify the line **homepage**, you need to take off that line:

```
"homepage": "https://acaplayer.info/acaplayer"
```

## Run to deploy in prod

Just if you deploy the project in a subdir you need to add this line in package.json 
```
"homepage": "https://acaplayer.info/acaplayer"
```

## Run the project 

Now you are ready to run the code:

```
yarn run start
```
