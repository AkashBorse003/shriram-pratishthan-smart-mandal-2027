package com.srp.smartmandal;

import android.app.*;import android.os.*;import android.content.*;import android.graphics.Color;import android.net.Uri;import android.webkit.*;import android.view.*;import android.widget.*;

public class MainActivity extends Activity {
    private static final String BASE_URL = "https://YOUR-LIVE-DOMAIN.example/";
    WebView web;
    @Override public void onCreate(Bundle b){super.onCreate(b); web=new WebView(this); setContentView(web); WebSettings s=web.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setAllowFileAccess(true); s.setSupportZoom(false); web.setBackgroundColor(Color.rgb(7,16,24)); web.setWebViewClient(new WebViewClient(){@Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r){v.loadUrl(r.getUrl().toString());return true;}}); web.setDownloadListener((url,userAgent,contentDisposition,mimeType,contentLength)->{startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));}); web.loadUrl(BASE_URL); }
    @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
}
