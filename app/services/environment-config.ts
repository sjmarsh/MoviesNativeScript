import { Injectable } from '@angular/core';
import { FileReader } from "./file-reader";

@Injectable()
export class EnvironmentConfig {

  // note re. using localhost with android emulator. http://stackoverflow.com/questions/39948595/fetch-apican-not-get-data-from-localhost/39958955
  // therefore don't use localhost.  Use 10.0.2.2 instead

  private configData;

/**
 * Initialize environment config settings
 */
  initialize() : void{
    console.log('Initialize Environment!');
    this.configData = FileReader.readJSONSync('environment.json');
    console.log('Done initializing environment.');
  }

  movieApiUrl() : string{
    if(this.configData == null){
      throw('Error: Environment config was not initialized.')
    }
    else {
      return this.configData.movieApiUrl;
    }
  }

}

