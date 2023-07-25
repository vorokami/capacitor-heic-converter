import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(HeicConverterPlugin)
public class HeicConverterPlugin: CAPPlugin {
    private let implementation = HeicConverter()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func convert(_ call: CAPPluginCall) {
        let uri = call.getString("uri", "")
        if uri == "" {
            call.reject("uri is empty")
            return
        }
        
        // convert to URL
        guard let fileUrl :URL = URL.init(string: uri) else {
            call.reject("error getting image url")
            return
        }
        
        // get UIImage
        guard let img :UIImage = convertHeicToImage(url: fileUrl) else { 
            call.reject("error getting image")
            return
        }
        
        let base64String :String = convertImageToBase64String(img: img)
        if base64String == "" {
            call.reject("error converting to base64")
        }
        
        call.resolve([
            "base64String": base64String
        ])
    }
    
    func convertHeicToImage(url: URL) -> UIImage? {
        guard let source = CGImageSourceCreateWithURL(url as CFURL, nil) else { return nil }
        guard let cgImage = CGImageSourceCreateImageAtIndex(source, 0, nil) else { return nil }
        return UIImage(cgImage: cgImage)
    }
    
    func convertImageToBase64String(img: UIImage) -> String {
        return img.jpegData(compressionQuality: 1)?.base64EncodedString() ?? ""
    }
}
