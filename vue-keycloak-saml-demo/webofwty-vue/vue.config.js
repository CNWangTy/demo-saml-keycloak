module.exports = {
    outputDir: '../public'
    , devServer: { 
        proxy: { 
            '/saml/*':
                { target: 'http://127.0.0.1:8080', changeOrigin: true, ws: true, pathRewrite: { '^/saml/*':  '/saml/*', } },
            '/customer':
                { target: 'http://127.0.0.1:8082', changeOrigin: true, ws: true, pathRewrite: { '^/customer':  '/customer', } },
            
        }
    }
  }