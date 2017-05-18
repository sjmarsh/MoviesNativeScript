import * as fs from "file-system";
let documents = fs.knownFolders.currentApp();

export class FileReader {
    
    public static readJSONAsync(path: string): Promise<Object> {
        let jsonFile = documents.getFile(path);
        return new Promise<Object>((resolve, reject) => {
            jsonFile.readText().then((content: string) => {
                let data = <Array<Object>>JSON.parse(content);
                resolve(data);
            })
            .catch((err) => {
                console.log('Error reading File!');
                reject(err);
            });
        });
    }

    public static readJSONSync(path: string): Object {
      let jsonFile = documents.getFile(path);
      var content = jsonFile.readTextSync(err => console.log('Error reading File!'));
      return JSON.parse(content);
    }
}