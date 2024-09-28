interface FlutterInAppWebView {
  callHandler(handlerName: string, ...args: any[]): Promise<any>;
}
declare global {
  interface Window {
    flutter_inappwebview?: FlutterInAppWebView;
  }
}

export function sendFlutterToSendToken() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('webToFlutterFCM', {
      message: 'sendToken',
      data: { token: 'test' },
    });
  } else {
    alert('없는데?');
  }
}
