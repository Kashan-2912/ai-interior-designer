
# 🏡 AI-Powered Interior Designer

Transform your space with the power of AI! Upload any room screenshot, choose your desired aesthetic, and let AI redesign it into your dream space — whether modern, minimalistic, bohemian, or custom-styled!

![App Screenshot](https://your-app-screenshot-link.com)

---

## ✨ Features

- 🔐 **User Authentication** via Clerk
- 🧠 **AI Interior Design** using Replicate API
- 📸 **Image Upload** with support for any kind of room image
- 🎨 **Custom Style Options** — Modern, Minimal, Bohemian, etc.
- 💬 **Optional Prompts** — Add personal notes to guide AI
- 💳 **Credit-Based System** — Purchase credits via Paddle gateway
- ☁️ **Cloud Storage** using Appwrite & Firebase

---

## 🚀 Tech Stack

| Technology     | Usage                            |
|----------------|----------------------------------|
| **Next.js**    | Frontend Framework               |
| **Clerk**      | User Authentication              |
| **Replicate**  | AI Model for Room Redesigns      |
| **Paddle**     | Payment Gateway for Credits      |
| **Firebase**   | Room Metadata/Realtime Database  |
| **Appwrite**   | File & Image Storage             |
| **Tailwind CSS**| Styling and UI                  |

---

## 📦 Environment Variables

To run this project, set the following environment variables in a `.env.local` file:

```env
# App base
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=

# Appwrite
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_BUCKET_ID=

# Replicate AI
NEXT_PUBLIC_REPLICATE_API_TOKEN=

# Paddle Payments
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=
PADDLE_SECRET_TOKEN=
WEBHOOK_SECRET_KEY=
```

---

## 🧪 Usage

### 1. Sign Up / Sign In
Create an account using Clerk's secure authentication.

### 2. Upload Your Room
Upload a screenshot or image of any room (living room, bedroom, office, etc).

### 3. Choose Your Style
Select from pre-defined interior styles such as:
- Modern
- Minimalistic
- Bohemian
- Industrial
- Scandinavian
- Custom (via prompt)

### 4. Let AI Work Its Magic
Using the Replicate API, your image is transformed into a stunning design based on your choices.

### 5. Save & Download
Save your new room design or download it for future inspiration.

### 6. Manage Credits
Credits are required per image transformation. Buy more credits anytime securely via Paddle.

---

## 🛒 Payment & Credits

- Each image transformation costs 1 credit.
- Credits can be purchased using the **Paddle** payment gateway.
- Webhooks securely update user credit balance post-purchase.

---

## 📁 Project Structure (High-Level)

```
/components      → Reusable UI Components  
/pages           → Next.js Routes  
/lib             → Utility Functions  
/hooks           → Custom React Hooks  
/styles          → Global Tailwind Styles  
/public          → Static Assets  
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/ai-interior-designer.git
cd ai-interior-designer
npm install
npm run dev
```

---

## 📬 API & Credits

- Replicate API powers the AI model behind the redesign.
- Credit deduction is triggered on design generation.
- Paddle webhook verifies payment and adds credits.

---

## 💡 Future Improvements

- Drag-and-drop furniture placement
- 3D visualization of redesign
- Multi-language support
- More design styles (e.g., Japandi, Rustic, Mid-century)

---

## 🙌 Contributing

Want to contribute? PRs are welcome! Just fork the repo, make your changes, and open a pull request.

---

## 📜 License

MIT License

---

## 🔗 Links

- [Live Demo](http://localhost:3000) *(replace with your deployment URL)*
- [Clerk](https://clerk.dev)
- [Replicate](https://replicate.com)
- [Paddle](https://paddle.com)
- [Appwrite](https://appwrite.io)

![image](https://github.com/user-attachments/assets/48e765b7-796b-42ce-ad11-5e112fa00ac1)
