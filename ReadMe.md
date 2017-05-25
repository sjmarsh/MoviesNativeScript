# MoviesNativeScript

Follows on from MoviesAngular2 app ([https://github.com/sjmarsh/MoviesAngular2](https://github.com/sjmarsh/MoviesAngular2 "https://github.com/sjmarsh/MoviesAngular2")).  

Aims to explore: </br>
- [NativeScript](https://docs.nativescript.org/ "NativeScript") with [Angular](https://angular.io/ "Angular")  
- deployment of above

## TODO ##
- <del>Search</del>  
- <del>Categories</del>
- Improve Style/Layout
- Tests

## Run ##
`tns run android`   
*Must have valid android emulator setup. refer NativeScript doco [https://docs.nativescript.org/angular/start/introduction.html](https://docs.nativescript.org/angular/start/introduction.html "https://docs.nativescript.org/angular/start/introduction.html")  

or `tns run ios` (refer docs for iPhone setup)

## Deploy ##
To test on physical android device:


1. Connect device to computer via usb
2. Ensure device is in developer mode and USB debugging enabled.
3. Ensure device detected/connected (USB drivers installed)
4. Check device listed: `tns device list`
5. Run deploy command:
	`tns deploy android --release --key-store-path "<<PathToStore>>.keystore" --key-store-password "<<Password>>" --key-store-alias "mykey" --key-store-alias-password "<<Password>>"`

#### Notes: ####
- PathToStore on Windows 10 is "c:\users\username"
- You need to create a key using the oracle/java keytool eg. `keytool -keygen` (then follow prompts).