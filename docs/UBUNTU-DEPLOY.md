# Ubuntu Sunucuda Mergenova Web Çalıştırma

Bu rehber Ubuntu 20.04/22.04 LTS üzerinde projeyi çalıştırmak içindir.

---

## Ön koşul: Docker kurulumu

Sunucuda Docker yoksa:

```bash
# Güncelleme
sudo apt update && sudo apt upgrade -y

# Docker kurulumu (resmi script)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Çıkış yapıp tekrar giriş yapın veya: newgrp docker

# Docker Compose (v2) genelde Docker ile birlikte gelir, kontrol:
docker compose version
```

---

## Seçenek A: Sadece site (tek konteyner, HTTP)

Domain yok veya sadece IP ile test edecekseniz. Site **80** veya **8080** portunda açılır.

### 1. Projeyi sunucuya alın

```bash
# Örnek: git ile
git clone <repo-url> mergenovaweb
cd mergenovaweb

# Veya bilgisayarınızdan SCP ile kopyalayın:
# scp -r ./mergenovaweb kullanici@SUNUCU_IP:/home/kullanici/
```

### 2. Build ve çalıştırma

**80 portunda (standart HTTP):**

```bash
cd mergenovaweb
docker compose -f docker-compose.local.yml up --build -d
```

`docker-compose.local.yml` varsayılan olarak 8080 kullanıyor. 80 kullanmak için:

```bash
docker compose -f docker-compose.local.yml up --build -d
# Portu 80 yapmak için aşağıdaki "Port 80 kullanımı" bölümüne bakın
```

**Erişim:** `http://SUNUCU_IP:8080` (veya 80’e eşlediyseniz `http://SUNUCU_IP`)

### 3. Port 80 kullanmak (isteğe bağlı)

`docker-compose.local.yml` içinde `ports` kısmını şöyle değiştirin:

```yaml
ports:
  - "80:80"
```

Sonra:

```bash
docker compose -f docker-compose.local.yml up --build -d
```

Erişim: `http://SUNUCU_IP`

### 4. Durdurma / güncelleme

```bash
# Durdur
docker compose -f docker-compose.local.yml down

# Güncelleme: kodu çek, yeniden build et, çalıştır
git pull   # veya yeni dosyaları kopyala
docker compose -f docker-compose.local.yml up --build -d
```

---

## Seçenek B: Domain + HTTPS (production)

Domain (örn. `mergenova.com.tr`) sunucunun IP’sine yönlendirilmiş olmalı. SSL Let’s Encrypt ile otomatik alınır.

### 1. Projeyi sunucuya alın

```bash
cd /home/kullanici   # veya tercih ettiğiniz dizin
git clone <repo-url> mergenovaweb
cd mergenovaweb
```

### 2. Nginx proxy için klasörleri oluşturun

`docker-compose.prod.yml` şu volume’ları kullanır; oluşturulmalıdır:

```bash
mkdir -p nginx/certs nginx/vhost.d nginx/html nginx/acme
```

### 3. Compose’u çalıştırın

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

İlk seferde Let’s Encrypt sertifikası alınırken birkaç dakika sürebilir.

### 4. Domain ayarı

- DNS’te `mergenova.com.tr` (ve www gerekirse `www.mergenova.com.tr`) A kaydı sunucu IP’sine işaret etmeli.
- `docker-compose.prod.yml` içinde `VIRTUAL_HOST` ve `LETSENCRYPT_HOST` bu domain ile dolu olmalı (şu an `mergenova.com.tr`).

Erişim: `https://mergenova.com.tr`

### 5. Log ve durum

```bash
# Loglar
docker compose -f docker-compose.prod.yml logs -f

# Konteyner durumu
docker compose -f docker-compose.prod.yml ps
```

---

## Özet komutlar (kopyala-yapıştır)

**Sadece hızlı test (HTTP, port 8080):**

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && sudo usermod -aG docker $USER
# Çıkış yapıp tekrar giriş (veya newgrp docker)
cd mergenovaweb
docker compose -f docker-compose.local.yml up --build -d
# Tarayıcı: http://SUNUCU_IP:8080
```

**Production (domain + HTTPS):**

```bash
# Docker kurulu, proje sunucuda
cd mergenovaweb
mkdir -p nginx/certs nginx/vhost.d nginx/html nginx/acme
docker compose -f docker-compose.prod.yml up -d --build
# https://mergenova.com.tr
```

---

## Güvenlik notları

- Sunucuda **firewall** açın, sadece 22 (SSH), 80, 443 açık kalsın: `sudo ufw allow 22,80,443 && sudo ufw enable`
- SSH key ile giriş kullanın, root login’i kapatmayı düşünün.
- Production’da imajı registry’e push edip sunucuda `docker pull` ile almak daha temiz bir yöntemdir; bu rehber sunucuda build senaryosunu anlatır.
