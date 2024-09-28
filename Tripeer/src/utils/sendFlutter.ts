interface FlutterInAppWebView {
  callHandler(handlerName: string, ...args: any[]): Promise<any>;
}
declare global {
  interface Window {
    flutter_inappwebview?: FlutterInAppWebView;
  }
}

export function sendFlutterToSendToken(setter?: (param: boolean) => void) {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('webToFlutterFCM', {
      message: 'sendToken',
      data: { token: 'test' },
    });
  } else {
    setter && setter(true);
  }
}
