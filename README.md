# petshop-backend

This is a practice project to practice backend development in Node.js.

## 🧶 Setup Yarn Berry

Run the following commands to use Yarn Berry:

### 1. Enable Corepack

Open PowerShell as Administrator and run:
```powershell
corepack enable
```

### 2. Activate Yarn Berry

Activate Yarn Berry on your project:
```powershell
corepack prepare yarn@stable --activate
```

### 3. Enable Plug'n'Play (PnP)

Configure Yarn to use PnP for faster installs:
```powershell
yarn config set nodeLinker pnp
```

### 4. Install Dependencies

Install all project dependencies:
```powershell
yarn install
```