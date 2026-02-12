# Tek Sayfalık Web Sitesi

This is a code bundle for Tek Sayfalık Web Sitesi. The original project is available at https://www.figma.com/design/QTp4kOb5ua1YY3dvfk6Tms/Tek-Sayfal%C4%B1k-Web-Sitesi.

## Geliştirme

```bash
npm i
npm run dev
```

Tarayıcıda http://localhost:5173 adresinden çalışır.

## Build ve sunucuya taşıma

1. **Yerelde build alın:**

   ```bash
   npm i
   npm run build
   ```

   Çıktı `dist/` klasöründe oluşur.

2. **`dist/` içeriğini sunucuya kopyalayın**  
   (scp, rsync, FTP veya başka bir yöntemle):

   ```bash
   rsync -avz dist/ kullanici@sunucu:/var/www/mergenovaweb/dist/
   ```

   veya tüm `dist` klasörünü zipleyip sunucuya atıp orada açın.

3. **Sunucuda web sunucusu ayarı**  
   `dist/` içeriğini sunucuda bir web sunucusu (Nginx, Apache vb.) ile yayınlayın. SPA için tüm route’lar `index.html`’e yönlendirilmeli.

   **Nginx örneği:** Projedeki `nginx.conf.example` dosyasını inceleyin. `root` path’i sunucudaki `dist` klasörünün yoluna göre düzenleyip Nginx config’e ekleyin.

Örnek Nginx `root`: `/var/www/mergenovaweb/dist`
