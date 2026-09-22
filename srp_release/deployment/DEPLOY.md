# Production deployment
1. Create a Node 20 service or Docker service on your hosting provider.
2. Point the service at `deployment/Dockerfile`.
3. Set environment variables from `.env.example`.
4. Attach persistent storage for `website/data/mandal.sqlite` or move the DB to PostgreSQL for multi-instance deployments.
5. Add your domain and enable HTTPS.
6. Replace the Android `BASE_URL` with the HTTPS domain and build the Android project.
7. Configure the real UPI QR and Web Push/VAPID keys.
