import { NgModule, NO_ERRORS_SCHEMA }     from "@angular/core";
import { NativeScriptModule }             from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule }         from "nativescript-angular/http";
import { NSHttp }                         from 'nativescript-angular/http';
import { NativeScriptRouterModule }       from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { AppComponent }                 from "./app.component";
import { appComponents, appRoutes }     from "./app.routing";
import { ReferenceDataService, MovieService, EnvironmentConfig } from "./services";

@NgModule({
  declarations: [AppComponent,
                 appComponents],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, 
            NativeScriptHttpModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(appRoutes),
            NativeScriptUISideDrawerModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NSHttp, MovieService, ReferenceDataService, EnvironmentConfig]
})
export class AppModule {}
