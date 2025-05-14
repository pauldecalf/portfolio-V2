FROM node:20-alpine AS base

# Étape de dépendances
FROM base AS deps
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm ci

# Étape de construction
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Construction de l'application
RUN npm run build

# Étape de production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Création d'un utilisateur non-root pour plus de sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers nécessaires
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Commande pour démarrer l'application
CMD ["node", "server.js"] 