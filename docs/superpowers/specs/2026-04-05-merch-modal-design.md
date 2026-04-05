# Merch Modal Redesign — Design Spec

**Date:** 2026-04-05
**Status:** Approved

## Summary

Redesign the order modal into a two-step flow with product image preview, order summary, payment method selection (PayPal + IBAN), and buyer confirmation email via Formsubmit.co.

---

## Config (`config.js`)

### Product images
Replace single `image` field with `images` array on each product:
```js
{ images: ["photos/merch/front.png", "photos/merch/back.png"], … }
```
Single-image products use `images: ["path"]`. If `images` is empty/absent, no image strip renders.

### Payment config
New `payment` key inside `CONFIG.merch`:
```js
merch: {
  payment: {
    iban: {
      holder: "Nome Cognome",
      bank:   "Nome Banca",
      iban:   "IT00 X000 0000 0000 0000 0000 000",
    },
    paypal: "https://paypal.me/yourlink",
  },
  …
}
```

### Form backend
```js
orderEndpoint: "https://formsubmit.co/ajax/discepoliteam@gmail.com"
```

### UI strings (additions)
```js
order: {
  …existing…,
  payment:        { it: "Metodo di pagamento", en: "Payment method" },
  paymentPaypal:  { it: "PayPal",              en: "PayPal"         },
  paymentIban:    { it: "Bonifico bancario",   en: "Bank transfer"  },
  summary:        { it: "Riepilogo ordine",    en: "Order summary"  },
  summaryProduct: { it: "Prodotto",            en: "Product"        },
  summarySize:    { it: "Taglia",              en: "Size"           },
  summaryQty:     { it: "Quantità",            en: "Quantity"       },
  summaryPayment: { it: "Pagamento",           en: "Payment"        },
  back:           { it: "← Modifica",          en: "← Edit"         },
  next:           { it: "Riepilogo →",         en: "Summary →"      },
  paymentDetails: { it: "Istruzioni di pagamento", en: "Payment instructions" },
  paypalBtn:      { it: "Paga con PayPal →",   en: "Pay with PayPal →" },
  ibanHolder:     { it: "Intestatario",        en: "Account holder" },
  ibanBank:       { it: "Banca",               en: "Bank"           },
  ibanCode:       { it: "IBAN",                en: "IBAN"           },
  confirmEmail:   { it: "Controlla la tua email per la conferma.", en: "Check your email for confirmation." },
}
```

---

## DOM (`index.html`)

Replace the existing modal inner content:

```html
<div class="modal-overlay" id="order-modal" role="dialog" aria-modal="true">
  <div class="modal">
    <button class="modal-close" id="modal-close" aria-label="Chiudi">✕</button>

    <!-- Image strip -->
    <div class="modal-images" id="modal-images">
      <img class="modal-img-main" id="modal-img-main" src="" alt="" />
      <div class="modal-img-thumbs" id="modal-img-thumbs"></div>
    </div>

    <p class="modal-eyebrow" id="modal-eyebrow"></p>
    <h3 class="modal-title" id="modal-title"></h3>

    <!-- Step 1: Form -->
    <div id="modal-step-1">
      <form class="modal-form" id="order-form">
        <input type="hidden" name="product"   id="order-product" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject"  id="order-subject" />
        <!-- name, email (_replyto), phone, size, qty, message — same as current -->
        <!-- payment radio -->
        <div class="form-group" id="payment-group">
          <label id="label-order-payment"></label>
          <div class="payment-options">
            <label class="payment-option">
              <input type="radio" name="payment_method" value="paypal" required />
              <span id="label-paypal"></span>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment_method" value="iban" />
              <span id="label-iban"></span>
            </label>
          </div>
        </div>
        <button type="button" class="btn btn-primary" id="order-next"></button>
      </form>
    </div>

    <!-- Step 2: Summary + submit -->
    <div id="modal-step-2" style="display:none">
      <div class="order-summary" id="order-summary"></div>
      <div class="payment-instructions" id="payment-instructions"></div>
      <div class="modal-step2-actions">
        <button type="button" class="btn btn-outline" id="order-back"></button>
        <button type="button" class="btn btn-primary" id="order-submit"></button>
      </div>
      <p class="form-feedback" id="order-feedback"></p>
    </div>

  </div>
</div>
```

---

## JS (`script.js`)

### `openOrderModal(productName, sizes, images)`
- Renders image strip: sets `#modal-img-main` src to `images[0]`; renders thumbnails in `#modal-img-thumbs`. Clicking a thumb swaps the main image and updates active class. Hides `#modal-images` entirely if `images` is empty.
- Populates all form labels/placeholders (same as current).
- Resets to step 1 on open.

### Step navigation
- `#order-next` click: calls `orderForm.reportValidity()`. If valid, renders summary + payment instructions in step 2, swaps `display`.
- `#order-back` click: shows step 1, hides step 2.

### `renderSummary()`
Builds `.order-summary` rows: Product / Size (if applicable) / Quantity / Payment method.
Builds `.payment-instructions`:
- If `payment_method === 'paypal'`: renders PayPal link button using `CONFIG.merch.payment.paypal`.
- If `payment_method === 'iban'`: renders holder, bank, IBAN in a styled block.

### Submit
`#order-submit` click fires `fetch` POST to `CONFIG.merch.orderEndpoint` with `FormData` from `#order-form`. Hidden field `_replyto` = buyer email (triggers Formsubmit auto-reply).

On success: replaces step 2 content with confirmation message + payment details + `ui.order.confirmEmail` note. Auto-closes after 4 seconds.

On error: shows error in `#order-feedback`.

### `renderMerch()` update
Pass `product.images || (product.image ? [product.image] : [])` as third argument to `openOrderModal`.

---

## CSS (`style.css`)

```css
/* Image strip */
.modal-images { margin-bottom: 20px; }
.modal-img-main { width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-sm); }
.modal-img-thumbs { display: flex; gap: 8px; margin-top: 8px; }
.modal-img-thumb { width: 56px; height: 56px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid transparent; opacity: 0.6; transition: all 0.2s; }
.modal-img-thumb.active, .modal-img-thumb:hover { border-color: var(--green); opacity: 1; }

/* Payment options */
.payment-options { display: flex; gap: 16px; margin-top: 6px; }
.payment-option { display: flex; align-items: center; gap: 8px; cursor: pointer; }

/* Order summary */
.order-summary { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 16px; }
.summary-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.summary-row:last-child { border-bottom: none; }
.summary-label { color: var(--text-muted); }

/* Payment instructions */
.payment-instructions { background: rgba(190,206,45,0.07); border: 1px solid rgba(190,206,45,0.2); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 20px; }
.payment-instructions h4 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 2px; color: var(--green); margin-bottom: 12px; }
.iban-row { display: flex; justify-content: space-between; font-size: 0.88rem; padding: 4px 0; }
.iban-label { color: var(--text-muted); }
.paypal-link { display: inline-block; color: var(--green); font-weight: 600; text-decoration: underline; }

/* Step 2 actions */
.modal-step2-actions { display: flex; gap: 12px; margin-bottom: 12px; }
.modal-step2-actions .btn { flex: 1; }
```
