 ## How to Setup Tilwinds CSS
from Tailwinds web. go to Get started -> Tailwinds CLI .

Step 1 : Run the following commands:

```
npm install -D tailwindcss
npx tailwindcss init
 ```

Step 2: Update tailwinds.conf.js file to include this line: 

```
content:  ["*.{html,js}"],
```

Step 3: Create src/input.css to include : 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Run the command:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 5: link output.css in html: 

```
 <link href="./output.css" rel="stylesheet">
 ```
