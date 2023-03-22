package com.publickey;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;
import okhttp3.CertificatePinner.Builder;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;

import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public class SSLPinnerFactory implements OkHttpClientFactory {
    private static String hostname = "jsonplaceholder.typicode.com";

    
    public OkHttpClient createNewNetworkModuleClient() {
        CertificatePinner certificatePinner = new CertificatePinner.Builder()
                .add(hostname, "sha256/F5yEJFlAhYki30l8i+NwYAdXTKE1+x/n9J41HHorqys=")
                .build();
        // Get a OkHttpClient builder with all the React Native defaults
        OkHttpClient.Builder clientBuilder = OkHttpClientProvider.createClientBuilder();
        return clientBuilder
                .certificatePinner(certificatePinner)
                .build();
    }
}