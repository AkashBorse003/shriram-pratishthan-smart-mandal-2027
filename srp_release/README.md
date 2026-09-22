# श्रीराम प्रतिष्ठान चिंचवड — Smart Mandal 2027

This release contains:
- `website/` — the complete Node/Express website + admin system.
- `android-app/` — Android WebView app shell that connects to the same live website/API.
- `deployment/` — production deployment notes and Docker config.

## Important
This package is deploy-ready, but it is not possible to make it publicly live from this chat without access to your hosting/domain/database accounts. Set the live URL in `android-app/app/src/main/java/com/srp/smartmandal/MainActivity.java` before building the Android app.

For production: use HTTPS, a real domain, a strong ADMIN_PIN, real UPI ID/QR, VAPID keys for web push, and regular database backups.
