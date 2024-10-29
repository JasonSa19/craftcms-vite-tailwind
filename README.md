# CraftCMS Starter Project with vite.js and built-in tailwindcss support


## 1. Step: Clone the Repository
```
git clone git@github.com:JasonSa19/craftcms-vite-tailwind.git
```

## 2. Step: switch to cloned project and configurate DDEV
```
cd craftcms-vite-tailwind
```

## 3. Step: Add Port settings to the config.yaml in the .ddev folder:

```
web_extra_exposed_ports:
    - name: vite
      container_port: 3000
      http_port: 3000
      https_port: 3001
```

## 4. Step: Configure DDEV and follow the steps:
```
ddev config
```


## 5. Step: Start DDEV environment and launch to visit the site
```
ddev start
ddev launch
```

## 6. Step: install node_modules
```
ddev npm install
```


### Start local-staging with code-watching and hmr:

```
ddev npm run dev
```

### Build the assets for a production environment:

Note: production only works after the .env variable is set from "dev" to "production"!

Change the following in the .env file:

from:
```
CRAFT_ENVIRONMENT=dev
```
to:
```
CRAFT_ENVIRONMENT=production
```
then:
```
ddev npm run build
```
