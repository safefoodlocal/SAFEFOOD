# Backend API Integration Guide

This document explains how to connect the frontend to a backend API when ready.

## Current State

The frontend is currently in **placeholder mode**:
- Contact form and newsletter simulate submissions with console logs
- Product data is loaded from static JSON files (`src/data/products.json`)
- API configuration is set up in `src/config/api.js`

## When Backend is Ready

### 1. Set Environment Variable

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=https://your-api-domain.com/api
```

### 2. Uncomment API Calls

In `src/pages/Contact.jsx`, uncomment the backend API call:

```javascript
// Remove this section:
// Fallback: Placeholder mode - simulate submission
// Remove this when backend is ready
await new Promise(resolve => setTimeout(resolve, 1000))
console.log('Form submitted (placeholder mode):', formData)

// Uncomment this:
await apiCall(API_CONFIG.CONTACT, {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

In `src/components/Newsletter.jsx`, do the same:

```javascript
// Remove placeholder section, uncomment:
await apiCall(API_CONFIG.NEWSLETTER, {
  method: 'POST',
  body: JSON.stringify({ email })
})
```

### 3. Backend API Endpoints

Your backend should implement these endpoints:

#### POST /api/contact
- Receives: `{ name, company, email, phone, country, message }`
- Returns: `{ success: true }` or error
- Sends email to info@safefoodegy.com

#### POST /api/newsletter
- Receives: `{ email }`
- Returns: `{ success: true }` or error
- Adds to email list (Mailchimp, Brevo, etc.)

#### GET /api/products
- Returns: Product catalogue JSON
- Optional: Replace static JSON with dynamic API call

#### GET /api/categories
- Returns: Category list JSON
- Optional: Replace static JSON with dynamic API call

### 4. PHP Backend Example (cPanel)

If using PHP on cPanel, create `api/contact.php`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate and process
    // Send email using mail() or PHPMailer
    // Store in database if needed
    
    echo json_encode(['success' => true]);
}
?>
```

### 5. Security Notes

- Never expose database credentials in frontend code
- Use server-side validation in addition to client-side
- Implement rate limiting on form endpoints
- Use HTTPS for all API calls
- Sanitize all inputs before database operations

## Testing

After connecting the backend:
1. Test contact form submission
2. Test newsletter signup
3. Verify product data loads correctly
4. Check error handling for failed requests

## Static Deployment

If deploying as static site (no backend):
- Keep placeholder mode active
- Use third-party services (Formspree, Mailchimp) for forms
- Update static JSON files when product data changes

## Required API Security Before Going Live

The current project has no API or database. When one is connected, the following controls are mandatory and must be implemented on the server—not in the browser:

- Use parameterized queries or a trusted ORM for every database operation. Never concatenate request values into SQL strings.
- Validate input against strict schemas on the server: maximum lengths, allowed characters, valid email format, and required fields.
- Apply server-side rate limits to `POST /api/contact` and `POST /api/newsletter` by IP and account/session. A sensible starting point is 5 requests per 15 minutes, with a short burst allowance of 2 requests per minute.
- Set a small JSON request-body limit (for example, 16 KB), reject unsupported HTTP methods, and return generic errors that do not reveal internals.
- Store database credentials only in server-side environment variables or a managed secret store; never use `VITE_` variables for secrets.
- Require HTTPS, restrict CORS to the production site origin, and add CSRF protection if cookies are used for authentication.
- Use a managed mail provider with server-side API keys instead of logging submissions or exposing email credentials in the client.
- Record security events without storing full form contents, and keep database access on a least-privilege account.
