# Latest-material-integration

# Step 1
1. npm install --save @angular/material

2. npm install --save @angular/cdk

3.npm install --save angular/material2-builds

4.npm install --save angular/cdk-builds

5.npm install --save @angular/animations


# step2 – import in app module

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

imports: [ BrowserAnimationsModule ],


# step 3 include theme in style.css

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

# step 4 (import needed property in app module)

import { MdCardModule} from '@angular/material'; 

imports: [MdCardModule ]
