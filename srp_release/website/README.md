# श्रीराम प्रतिष्ठान चिंचवड — Smart Mandal Management System 2027

Features:
- Public website linked with member registration, donation receipt, notices and today's aarti.
- Member registration with unique Member ID and printable digital ID card.
- Member directory for committee/admin use.
- Volunteer/कार्यकर्ता assignment and status.
- Daily Aarti schedule: date, time, assigned member, status; public page shows today's assigned aarti.
- Donation receipt: donor copy + accounts copy, QR-ready UPI, Receipt ID.
- Dashboard: members, volunteers, receipts, collection totals, today's aarti and notifications.
- Notification center with browser notification support and server Web Push support when VAPID keys are configured.
- CSV export.
- SQLite database for real persistent data.

## Run
1. Install Node.js 18+.
2. `npm install`
3. Copy `.env.example` to `.env` and set values.
4. `npm start`
5. Open `http://localhost:3000`

For production, deploy behind HTTPS. Browser push notifications require HTTPS (except localhost).

## Important
The sample UPI/QR is intentionally not a real payment account. Set the real UPI ID from Admin Settings before use.
Change the admin PIN and keep it secret.
